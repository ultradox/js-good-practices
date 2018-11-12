/**
 * There are only two hard things in Computer Science: cache invalidation and naming things. 
 *  — Phil Karlton
 */

// square root of n with Newton-Raphson approximation
r = n / 2;
while (Math.abs(r - (n / r)) > t) {
  r = 0.5 * (r + (n / r));
}
console.log("r = " + r);

// Improved
function SquareRootApproximation(num) {
  const root = num / 2;
  while (Math.abs(root - (num / root)) > t) {
    root = 0.5 * (root + (num / root));
  }
  return root;
}
console.log("root = " + SquareRootApproximation(144));

// https://blog.codinghorror.com/coding-without-comments/
