import API from "./api.js";

let versionApi = new API(0);

function isBadVersion(v) {
  return versionApi.isBad(v);
}

export function firstBadVersion(n) {
  // -- DO NOT CHANGE THIS SECTION
  versionApi.n = n;
  // --
  let counter = 0;
  let start = 1;
  let end = n;
  while (start < end) {
    console.log(start, end, counter);
    let midle = start + Math.floor((end - start) / 2);
    if (isBadVersion(midle)) {
      end = midle;
    } else {
      start = midle + 1;
    }
    counter++;
  }
  return [start, counter];
}
