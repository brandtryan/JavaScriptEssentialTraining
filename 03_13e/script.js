/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

let timeNow = new Date();

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const theBible = new Book(
  "The Bible",
  "God",
  1,
  "January 1, 271822 15:00:00 EST",
  "March 21, 15:00:00 EST"
);

console.log("The Bible object:", theBible);
console.log("Days since published:", theBible.bookPubAge());

const theBible2 = new Book(
  "The Bible2",
  "God",
  2,
  "January 1, 271822 15:00:00 EST",
  "March 21, 15:00:00 EST"
);

console.log("The Bible2 object:", theBible2);
console.log("Days since published:", theBible2.bookPubAge());

const theBible3 = new Book(
  "The Bible3",
  "God",
  3,
  "January 1, 271822 15:00:00 EST",
  "March 21, 15:00:00 EST"
);

console.log("The Bible3 object:", theBible3);
console.log("Days since published:", theBible3.bookPubAge());

const theBible4 = new Book(
  "The Bible4",
  "God",
  4,
  "January 1, 271822 15:00:00 EST",
  "March 21, 15:00:00 EST"
);

console.log("The Bible4 object:", theBible4);
console.log("Days since published:", theBible4.bookPubAge());

const theBible5 = new Book(
  "The Bible5",
  "God",
  5,
  timeNow,
  "March 21, 15:00:00 EST"
);

console.log("The Bible5 object:", theBible5);
console.log("Days since published:", theBible5.bookPubAge());
