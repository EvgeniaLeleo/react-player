import axios from "axios";
import { SongType } from "../types";

export const fetchTracks = () => {
  return axios
    .get<SongType[]>(
      "https://eu-central-1.aws.data.mongodb-api.com/app/sounds-oemdx/endpoint/sounds"
    )
    .then((res) => res.data);
};
