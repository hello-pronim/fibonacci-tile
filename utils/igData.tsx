import { instagram } from "instagram-scraper-api";

export const getIGUserData = async (username) => {
  const igData = await instagram.user(username);
  
};
