import axios from "axios";
import { YT_API_TOKEN } from "./config";

export const performSearch = (
  query,
  ok_handler,
  error_handler,
  token = YT_API_TOKEN
) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=${token}`
    )
    .then((resp) => {
      const raw_results = resp.data.items;
      let processed = [];
      raw_results.forEach((video, index) => {
        processed.push({
          key: index,
          id: index,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          open: <>{video.id.videoId}</>,
        });
      });
      ok_handler(processed);
    })
    .catch((resp) => {
      error_handler(resp);
    });
};
