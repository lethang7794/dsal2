/***
 * Excerpted from "A Common-Sense Guide to Data Structures and Algorithms, Second Edition",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit https://pragprog.com/titles/jwdsal2 for more book information.
***/
function golomb(n, memo={}) {
  if (n === 1) {
    return 1;
  }

  if(!memo[n]) {
    memo[n] = 1 + golomb(n - golomb(golomb(n - 1, memo), memo), memo);
  }

  return memo[n];
}