import axios from "axios";
import { config } from "../config";

let accessToken = "";
let expiresIn = "";

export const IGDB = {
  async getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    await axios
      .post(
        `https://id.twitch.tv/oauth2/token?client_id=${config.CLIENT_ID}&client_secret=${config.CLIENT_SECRET}&grant_type=client_credentials`
      )
      .then((res) => {
        accessToken = res.data.access_token;
        expiresIn = res.data.expires_in;
      });
    window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
    return accessToken;
  },
};
