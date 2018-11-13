/**
 * Use language features to your advantage
 */

// We can even use some features of our chosen language to 
// better communicate the intention behind some code.

// A good example of this in JavaScript are the array iteration methods:

var ids = [];
for(var i = 0; i < things.length; i++) {
  ids.push(things[i].id);
}


// The above code collects a list of IDs into a new array. 
// However, in order to know that, we need to read the whole body of the loop. 

// Compare it with using map():

var ids = things.map(function(thing) {
  return thing.id;
});


// In this case, we immediately know that this produces a new array of something, 
// because that’s the purpose of map(). This can be beneficial especially if you 
// have more complicated looping logic. There’s a list of other iteration functions on MDN.

// Merges data with original set, if boolean === true
myThing.setData({ x: 1 }, true);

// Much cleaner
myThing.mergeData({ x: 1 });
