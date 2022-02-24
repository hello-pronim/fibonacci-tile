import fetch from "node-fetch";
import { createWriteStream } from "fs";
import { writeFile, readFile, stat } from "fs/promises";
import { instagram } from "instagram-scraper-api";

async function downloadFile(url: string, path: string) {
  const response = await fetch(url);
  const destination = createWriteStream(path);
  response.body.pipe(destination);
}

export async function getIGUserData(username: string) {
  const dataFile = "./public/igfeed/data.json";
  try {
    const dataFileStat = await stat(dataFile);
    let seconds = (new Date().getTime() - +dataFileStat.mtime) / 1000;
    if (seconds < 100) {
      console.log("Using existing igfeed cache data");
      const data = await readFile(dataFile, "utf8");
      return JSON.parse(data);
    } else {
      console.log("Trying to fetch new data for igfeed");
    }
  } catch (e) {
    console.log(e);
  }
  const igData = await instagram.user(username);
  const posts = igData?.posts?.filter((post) => !post.isVideo);
  const result = [];
  for (const post of posts) {
    // save image locally
    const localFile = `./public/igfeed/${post.shortcode}.jpg`;
    await downloadFile(post.photo, localFile);
    result.push({
      shortcode: post.shortcode,
      image: `/igfeed/${post.shortcode}.jpg`,
      description: post.description,
    });
  }
  await writeFile(dataFile, JSON.stringify(result));
  return result;
}
