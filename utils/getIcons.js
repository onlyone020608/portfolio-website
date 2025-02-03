import fs from "fs";
import path from "path";

export const getIcons = (category) => {
  const dir = path.join(process.cwd(), `public/images/icons/${category}`);
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".svg"))
    .map((file) => `/images/icons/${category}/${file}`);
};
