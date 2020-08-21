# aghpb_get

Gets a list of URLs to pictures of anime girls holding programming books.

Fetches files from https://github.com/laynH/Anime-Girls-Holding-Programming-Books.

## Usage

```js
const aghpb = require('aghpb_get');

aghpb().then((list) => {
  // `list` is an array of githubusercontent urls for the images
  for (const url in list) {
    // do something with `url`
  }
});
```
