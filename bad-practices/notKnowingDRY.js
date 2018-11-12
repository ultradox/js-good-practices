// There are many different ways to express this concept but essentially
// it centers around not repeating yourself.
// A good example:

elemCollection[i].style.color = "red";
elemCollection[i].style.backgroundColor = "blue";
elemCollection[i].style.border = "2px solid #000";
elemCollection[i].style.paddingLeft = "3px";
elemCollection[i].style.marginTop = "3px";
elemCollection[i].style.fontSize = "1.2em";
elemCollection[i].style.fontStyle = "italic";

// The above mess can be expressed in a much cleaner way:

applyCSS(elemCollection[i], {
  color: "red",
  backgroundColor: "blue",
  border: "2px solid #000",
  paddingLeft: "3px",
  marginTop: "3px",
  fontSize: "1.2em",
  fontStyle: "italic"
});

// or

function applyCSS(el, styles) {
  for (var prop in styles) {
    if (!styles.hasOwnProperty || styles.hasOwnProperty(prop)) {
      el.style[prop] = styles[prop];
    }
  }
  return el;
}
