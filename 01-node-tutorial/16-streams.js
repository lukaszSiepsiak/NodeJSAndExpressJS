const { createReadStream } = require("fs");

// default 64kb - one chunk have 64 kilobytes
// last buffer - remainder
// highWaterMark - control size (90 000 - 90kb)
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));
