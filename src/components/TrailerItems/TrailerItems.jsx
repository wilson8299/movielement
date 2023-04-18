import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Wrap,
  YtPlayer,
  TrailerSection,
  ListTitle,
  List,
  Label,
  Radio,
  Card,
  ItemImg,
  ItemContent,
} from "./TrailerItems.style";

const TrailerItems = ({ data }) => {
  const [trailerUrl, setTrailerUrl] = useState(data[0].key);
  const [radioChecked, setradioChecked] = useState(data[0].id);

  const handleRadioClick = (e) => {
    setradioChecked(e.target.value);
    setTrailerUrl(e.target.attributes.getNamedItem("data-key").value);
  };

  return (
    <Wrap>
      <YtPlayer>
        <ReactPlayer
          style={{ position: "absolute", top: "0", left: "0" }}
          width="100%"
          height="100%"
          controls={true}
          url={`https://www.youtube.com/watch?v=${trailerUrl}`}
        />
      </YtPlayer>
      <TrailerSection>
        <ListTitle>Trailer List</ListTitle>
        <List>
          {data.map((trailer) => (
            <Label key={trailer.id}>
              <Radio
                checked={radioChecked === trailer.id}
                onChange={handleRadioClick}
                value={trailer.id}
                data-key={trailer.key}
                type="radio"
                name="trailer"
              />
              <Card>
                <ItemImg src={`https://image.tmdb.org/t/p/w342${trailer.posterPath}`} />
                <ItemContent>
                  <h4>{trailer.movieName}</h4>
                  <p>{trailer.name}</p>
                  <p>{trailer.publishedAt}</p>
                </ItemContent>
              </Card>
            </Label>
          ))}
        </List>
      </TrailerSection>
    </Wrap>
  );
};

export default TrailerItems;
