/**
 * Replace conditional expression with function
 */

// from

if (!el.offsetWidth || !el.offsetHeight) {
}

// to

function isVisible(el) {
  return el.offsetWidth && el.offsetHeight;
}

if (!isVisible(el)) {
}

/**
 * Replace conditional expression with function
 */

// from

if (!el.offsetWidth || !el.offsetHeight) {
}

// to

var isVisible = el.offsetWidth && el.offsetHeight;
if (!isVisible) {
}

/**
 * Mathmatical expressions
 */

// from

return a * b + (c / d);

// to
var multiplier = a * b;
var divisor = c / d;
return multiplier + divisor;
