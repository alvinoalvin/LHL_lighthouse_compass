"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B" 1
- filesize(1000)     => "1kB" 4
- filesize(1000000)  => "1MB" 7
- filesize(1500000)  => "1.5MB" 7
- filesize(1250000000) => "1.25GB" 10
- filesize(9000000000000) => "9TB" 13

*/
let checksize = (size, str) => {
  let bytesStr = str.substr(0, 4);

  if (bytesStr.charAt(2) !== "0") {
    return bytesStr.charAt(0) + "." + bytesStr.charAt(1) + bytesStr.charAt(2) + size;
  } else if (bytesStr.charAt(1) !== "0") {
    return bytesStr.charAt(0) + "." + bytesStr.charAt(1) + size;
  }
  return bytesStr.charAt(0) + size;
};

const filesize = function(bytes) {
  let bytesStr = bytes.toString();
  let length = bytesStr.length;

  if (length < 4) {
    return bytesStr + "B";
  } else if (length >= 4 && length < 7) {
    return checksize("kB", bytesStr);
  } else if (length >= 7 && length < 10) {
    return checksize("MB", bytesStr);
  } else if (length >= 10 && length < 13) {
    return checksize("GB", bytesStr);
  } else if (length >= 13) {
    return checksize("TB", bytesStr);
  }
};


// Don't change below:
module.exports = { filesize };
