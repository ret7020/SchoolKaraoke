import axios from "axios";
import { YT_API_TOKEN } from "./config";

export const performSearch = (query, ok_handler, error_handler, token = YT_API_TOKEN) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${token}`).then((resp) => {
        let raw_results = resp.data.items;
        let processed = [];
        raw_results.forEach(video => {
            processed.push({id: video.id.videoId, title: video.snippet.title, thumbnail: video.thumbnails.high.url});
        });
    }).catch((resp) => {
        error_handler(resp);
    });
}