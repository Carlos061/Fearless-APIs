import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import SearchBar from "../components/search";

function Trends() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    async function getTrends() {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=UG&key=AIzaSyCMKJqq4Hyfbh4rR5peZ8VGFiOf25ZynxY"
      );
      const data = await response.json();
      const wordCloudData = data.items.map((video,index) => {
        return {
          text: video.snippet.title,
          url: `https://www.youtube.com/watch?v=${video.id}`,
          value: video.statistics.viewCount,
          index:index
        };
      });
      setTrends(wordCloudData);
    }
    getTrends();
  }, []);

  const options = {
    rotations: 0,
  };

  const callbacks = {
    onWordClick: (word) => {
      if (word.url) {
        window.open(word.url, "_blank");
      }
    },
    getWordTooltip: (word) => {
      const tooltipContent = `${word.value}`;
      return tooltipContent;
    },
  };
  
  
  return (
    <>
      <h1>Trends</h1>
      <SearchBar></SearchBar>
      <ReactWordcloud words={trends} options={options} callbacks={callbacks} />
    </>
  );
}

export default Trends;
