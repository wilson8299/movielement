import React, { useReducer, useEffect } from "react";
import { genres, sortBy, scoreSliderMark, voteliderMark } from "./data";
import { useLazyGetMovieBySortQuery } from "@/services/movieApiSlice";
import { MovieSidebar, MovieCard, Pagination, LoadingSpinner } from "@/components";
import { Wrapper, Container, Title, Content, Sidebar, MovieItems } from "./Movie.style";

const initSideBarValue = {
  sort: "popularity.desc",
  startDate: null,
  endDate: new Date(),
  genresArray: {},
  userScore: [0, 10],
  userVote: 0,
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SORTBY":
      return {
        ...state,
        sort: action.payload,
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.payload,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.payload,
      };
    case "SET_GENERES":
      const value = action.payload.value;
      const checked = action.payload.checked;
      if (checked) {
        return {
          ...state,
          genresArray: { ...state.genresArray, [value]: checked },
        };
      } else {
        return {
          ...state,
          genresArray: Object.fromEntries(
            Object.entries(state.genresArray).filter(([key, _]) => key !== value)
          ),
        };
      }
    case "SET_USER_SCORE":
      return {
        ...state,
        userScore: action.payload,
      };
    case "SET_USER_VOTE":
      return {
        ...state,
        userVote: action.payload,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      throw new Error();
  }
};

const Movie = () => {
  const [state, dispatch] = useReducer(reducer, initSideBarValue);
  const [trigger, result] = useLazyGetMovieBySortQuery();

  const handlePageClick = (e) => {
    dispatch({
      type: "CHANGE_PAGE",
      payload: e.selected + 1,
    });

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    trigger({
      ...state,
      genresArray: Object.keys(state.genresArray).join(),
      userScore: state.userScore.join(),
      startDate: state.startDate?.toISOString().slice(0, 10),
      endDate: state.endDate.toISOString().slice(0, 10),
    });
  }, [trigger, state.page]);

  if (result.isLoading) return <LoadingSpinner />;

  return (
    <Wrapper>
      <Container>
        <Title>Movie</Title>
        <Content>
          <Sidebar>
            <MovieSidebar
              state={state}
              dispatch={dispatch}
              trigger={trigger}
              genres={genres}
              sortBy={sortBy}
              scoreSliderMark={scoreSliderMark}
              voteliderMark={voteliderMark}
            />
          </Sidebar>
          <MovieItems>
            {result.data?.movies.map((movie) => (
              <MovieCard {...movie} key={movie.id} />
            ))}
          </MovieItems>
        </Content>
        <Pagination
          pageCount={result.data?.totalPages}
          forcePage={state.page - 1}
          handlePageClick={handlePageClick}
        />
      </Container>
    </Wrapper>
  );
};

export default Movie;

// const [skip, setSkip] = useState(false);
// const { data, isLoading } = useGetMovieBySortQuery(
//   {
//     ...state,
//     genresArray: Object.keys(state.genresArray).join(),
//     userScore: state.userScore.join(),
//     startDate: state.startDate?.toISOString().slice(0, 10),
//     endDate: state.endDate.toISOString().slice(0, 10),
//   },
//   { skip }
// );

// useEffect(() => {
//   setSkip(true);
// }, [skip]);

// if (isLoading) return <div>Loading...</div>;
