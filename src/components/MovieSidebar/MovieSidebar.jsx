import React, { Fragment } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  Condition,
  Title,
  Divider,
  InnerTitle,
  SortSelectWrapper,
  Select,
  DatePickerWrapper,
  Genres,
  GenreLabel,
  GenreCheckBox,
  Button,
  SliderWrapper,
  ToolTip,
  Search,
} from "./MovieSidebar.style";

const MovieSidebar = ({
  state,
  dispatch,
  trigger,
  genres,
  sortBy,
  scoreSliderMark,
  voteliderMark,
}) => {
  const setSort = (value) => {
    dispatch({ type: "SET_SORTBY", payload: value });
  };

  const setStartDate = (value) => {
    dispatch({ type: "SET_START_DATE", payload: value });
  };

  const setEndDate = (value) => {
    dispatch({ type: "SET_END_DATE", payload: value });
  };

  const setUserScore = (value) => {
    dispatch({ type: "SET_USER_SCORE", payload: value });
  };

  const setUserVote = (value) => {
    dispatch({ type: "SET_USER_VOTE", payload: value });
  };

  const setGenresArray = (e) => {
    dispatch({
      type: "SET_GENERES",
      payload: { value: e.target.value, checked: e.target.checked },
    });
  };

  const searchHandler = (e) => {
    e.preventDefault();

    window.scrollTo(0, 0);

    state.page !== 1
      ? dispatch({
          type: "CHANGE_PAGE",
          payload: 1,
        })
      : trigger({
          ...state,
          page: 1,
          genresArray: Object.keys(state.genresArray).join(),
          userScore: state.userScore.join(),
          startDate: state.startDate?.toISOString().slice(0, 10),
          endDate: state.endDate.toISOString().slice(0, 10),
        });
  };

  return (
    <Fragment>
      <Condition>
        <Title>Sort</Title>
        <InnerTitle>Sort Results By</InnerTitle>
        <SortSelectWrapper>
          <Select
            value={state.sort}
            defaultChecked={state.sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {Object.entries(sortBy).map((sort) => (
              <option value={sort[0]} key={sort[0]}>
                {sort[1]}
              </option>
            ))}
          </Select>
        </SortSelectWrapper>
      </Condition>
      <Condition>
        <Title>Filter</Title>
        <Divider />
        <InnerTitle>Release Dates</InnerTitle>
        <DatePickerWrapper>
          <label>From</label>
          <DatePicker
            selected={state.startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={state.startDate}
            endDate={state.endDate}
            dateFormat="yyyy/MM/dd"
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        </DatePickerWrapper>
        <DatePickerWrapper>
          <label>To</label>
          <DatePicker
            selected={state.endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={state.startDate}
            endDate={state.endDate}
            minDate={state.startDate}
            dateFormat="yyyy/MM/dd"
            onKeyDown={(e) => {
              e.preventDefault();
            }}
          />
        </DatePickerWrapper>
        <Divider />
        <InnerTitle>Genres</InnerTitle>
        <Genres>
          {genres.map((genre, index) => (
            <GenreLabel key={genre.id}>
              <GenreCheckBox
                type="checkbox"
                name="genre"
                value={genre.id}
                checked={state.genresArray[genre.id] || false}
                onChange={setGenresArray}
              />
              <Button>{genre.name}</Button>
            </GenreLabel>
          ))}
        </Genres>
        <Divider />
        <InnerTitle>User Score</InnerTitle>
        <SliderWrapper>
          <Slider
            range
            marks={scoreSliderMark}
            min={0}
            max={10}
            dots={true}
            allowCross={false}
            step={1}
            defaultValue={state.userScore}
            onChange={(val) => setUserScore(val)}
            handleRender={(renderProps) => {
              return (
                <div {...renderProps.props}>
                  <ToolTip>
                    {renderProps.props.className.includes("rc-slider-handle-1")
                      ? state.userScore[0]
                      : state.userScore[1]}
                  </ToolTip>
                </div>
              );
            }}
          />
        </SliderWrapper>
        <InnerTitle>User Vote</InnerTitle>
        <SliderWrapper>
          <Slider
            marks={voteliderMark}
            min={0}
            max={500}
            dots={true}
            step={50}
            defaultValue={state.userVote}
            onChange={(val) => setUserVote(val)}
            handleRender={(renderProps) => {
              return (
                <div {...renderProps.props}>
                  <ToolTip>{state.userVote}</ToolTip>
                </div>
              );
            }}
          />
        </SliderWrapper>
      </Condition>
      <Search onClick={searchHandler}>Search</Search>
    </Fragment>
  );
};
export default MovieSidebar;
