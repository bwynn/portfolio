// --------------------- BEGIN MODULE SCOPE VARIABLES --------------------------
prt.shell = (function() {
  // create module scope variable
  var configMap = {
    main_html: String()
    + '<header class="prt-shell-header">'
      + '<div class="prt-shell-links"></div>'
    + '</header>'
    + '<section class="prt-shell-content">'
      + '<figure class="prt-shell-portrait"></figure>'
      + '<nav class="prt-shell-nav">'
        + '<div class="prt-shell-prj-1"></div>'
        + '<div class="prt-shell-prj-2"></div>'
        + '<div class="prt-shell-prj-3"></div>'
        + '<div class="prt-shell-prj-4"></div>'
      + '</nav>'
    + '</section>'
    + '<div class="prt-shell-modal"></div>'
  },
  // clear out the container object -- this prevents any extra content from being mapped
  stateMap = { $container: null },
  // establish the jqueryMap object
  jqueryMap = {},
  // make these available globally
  setJqueryMap, initModule;
  // ------------------------- END MODULE SCOPE VARIABLES ----------------------

  // ------------------------- BEGIN UTILITY METHODS ---------------------------
  // ------------------------- END UTILITY METHODS -----------------------------

  // ------------------------- BEGIN DOM METHODS -------------------------------
  setJqueryMap = function() {
    // improve performance to cache all jquery collections
    var $container = stateMap.$container;
    jqueryMap = { $container: $container};
  };
  // ------------------------- END DOM METHODS ---------------------------------

  // ------------------------- BEGIN EVENT HANDLERS ----------------------------
  // ------------------------- END EVENT METHODS -------------------------------

  // ------------------------- BEGIN PUBLIC METHODS ----------------------------

  initModule = function($container) {
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    setJqueryMap();
  };
  // return the init module as an object instance of itself
  return { initModule: initModule };
  // ------------------------- END PUBLIC METHODS ------------------------------
}());
