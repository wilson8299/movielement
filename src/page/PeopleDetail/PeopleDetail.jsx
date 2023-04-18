import React from "react";
import { useParams } from "react-router-dom";
import { useGetPeopleDetailQuery } from "@/services/peopleApiSlice";
import { LoadingSpinner } from "@/components";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import {
  Wrapper,
  Content,
  Side,
  Main,
  ProfileImg,
  SocialLink,
  Title,
  Biography,
  ActingWrapper,
  Character,
} from "./PeopleDetail.style";

const SortAndGroupActing = (acting) => {
  const sortByMonth = acting.sort(
    (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
  );

  const groupByYear = Object.values(
    sortByMonth.reduce((acc, cur) => {
      const year = cur.releaseDate?.split("-")[0];
      acc[year] = acc[year] || { year, info: [] };
      acc[year].info.push(cur);
      return acc;
    }, {})
  );

  return groupByYear;
};

const PeopleDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPeopleDetailQuery(id);

  if (isLoading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <Content>
        <Side>
          <ProfileImg
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.profilePath}`}
            alt=""
          />
          {data.socialId.facebook_id && (
            <SocialLink
              href={`https://www.facebook.com/${data.socialId.facebook_id}`}
              target="_blank"
              rel="noreferrer noopenner"
            >
              <AiFillFacebook />
            </SocialLink>
          )}
          {data.socialId.instagram_id && (
            <SocialLink
              href={`https://www.instagram.com/${data.socialId.instagram_id}`}
              target="_blank"
              rel="noreferrer noopenner"
            >
              <AiFillInstagram />
            </SocialLink>
          )}
          {data.socialId.twitter_id && (
            <SocialLink
              href={`https://twitter.com/${data.socialId.twitter_id}`}
              target="_blank"
              rel="noreferrer noopenner"
            >
              <AiFillTwitterCircle />
            </SocialLink>
          )}
          <Title as="h3">Personal Info</Title>
          <Title as="h4">Known For</Title>
          <p>{data.knownForDepartment}</p>
          <Title as="h4">Birthday</Title>
          <p>{data.birthday}</p>
          <Title as="h4">Place of Birth</Title>
          <p>{data?.placeOfBirth}</p>
          <Title as="h4">Also Known As</Title>
          {data.alsoKnownAs.map((known) => (
            <p key={known}>{known}</p>
          ))}
        </Side>
        <Main>
          <Title as="h2">{data.name}</Title>
          <Title as="h3">Biography</Title>
          <Biography>{data.biography}</Biography>
          <Title as="h3">Acting</Title>
          {SortAndGroupActing([...data.acting])
            .reverse()
            .map((acting) => (
              <ActingWrapper key={acting.year}>
                <Title as="h4">{acting.year}</Title>
                {acting.info.map((info) => (
                  <ul key={info.id}>
                    <li>
                      <span>
                        {info.name}
                        <Character>{info.character && ` as ${info.character}`}</Character>
                      </span>
                      <span>{info.releaseDate}</span>
                    </li>
                  </ul>
                ))}
              </ActingWrapper>
            ))}
        </Main>
      </Content>
    </Wrapper>
  );
};

export default PeopleDetail;
