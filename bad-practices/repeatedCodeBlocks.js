/**
 * Not understanding and therefore not appreciating the benefits in 
 * abstracting repeatedly utilized code versus having a wall of 
 * unreadable code.
 */

// Urm, yeh, the title says it all really! Compare this:

document.getElementById('foo').style.border = '3px solid #FFF';
document.getElementById('foobar').style.border = '3px solid #FFF';
document.getElementById('foofoobar').style.border = '3px solid #FFF';
document.getElementById('foofoobarbar').style.border = '3px solid #FFF';

// ...to this:
var allMyFoos = '#foo, #foobar, #foofoobar, #foofoobarbar';
jQuery(allMyFoos).css('border', '3px solid #FFF');