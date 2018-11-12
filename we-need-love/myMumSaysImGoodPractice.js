var MenuStyler = (function(){

  function _init(menuItems) {
      /**
       * Apply CSS styles to each menu item
       */
      for (let index = 0; index < menuItems.length; index++) {
        menuItems[i].style.color = 'red';
        menuItems[i].style.backgroundColor = 'blue';
        menuItems[i].style.border = '2px solid #000';
        menuItems[i].style.paddingLeft = '3px';
        menuItems[i].style.marginTop = '3px';
        menuItems[i].style.fontSize = '1.2em';
        menuItems[i].style.fontStyle = 'italic';
      }
  };

  return {
    init: function() {
      var menuItems = document.getElementsByTagName('li');
      _init(menuItems);
    }
  }

})();