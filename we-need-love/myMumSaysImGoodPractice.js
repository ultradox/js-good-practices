var MenuStyler = (function(){

  function _init(menuItems) {
      /**
       * Apply CSS styles to each menu item
       */
      for (let index = 0; index < menuItems.length; index++) {
        applyCSS(elemCollection[i], {
          color: "red",
          backgroundColor: "blue",
          border: "2px solid #000",
          paddingLeft: "3px",
          marginTop: "3px",
          fontSize: "1.2em",
          fontStyle: "italic"
        });

      }
  };

  return {
    init: function() {
      var menuItems = document.getElementsByTagName('li');
      _init(menuItems);
    }
  }

})();