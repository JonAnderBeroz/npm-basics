import { createWriteStream } from "node:fs";

export async function touch(fileName) {
  let stream = createWriteStream(fileName);
  stream.end();
}

touch("test.txt");
