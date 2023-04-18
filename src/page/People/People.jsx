import React, { useState } from "react";
import { useGetPopularPeopleQuery } from "@/services/peopleApiSlice";
import { PeopleCard, Pagination, LoadingSpinner } from "@/components";
import { Wrapper, Container, Title, PeopleItems } from "./People.style";

const People = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetPopularPeopleQuery(currentPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected + 1);
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <Container>
        <Title>Popular People</Title>
        <PeopleItems>
          {data.map((person) => (
            <PeopleCard key={person.id} {...person} />
          ))}
        </PeopleItems>
        <Pagination pageCount={500} handlePageClick={handlePageClick} />
      </Container>
    </Wrapper>
  );
};

export default People;
