import { writeFile } from "fs/promises";
import { instagram } from "instagram-scraper-api";

export const getIGUserData = async (username) => {
  const igData = await instagram.user(username);
  const images = igData?.posts?.filter((post) => !post.isVideo);
  const result = [];
  
  return igData;
};
