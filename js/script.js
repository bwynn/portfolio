// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.
(function() {
  // ---------------------------- PROJECT SCOPE VARIABLES --------------------- */
  // create a modal object to hold property and animation properties
  var modal = {
    time_open_bckgd: 400,
    time_open_window: 600,
    time_closed: 300,
    contentLink: -4
  };

  var elem = {
    html: $("html"),
    body: $("body"),
    projectLinks: $(".prt-shell-nav > div"),
    modalBackground: $(".modal-background"),
    prtShellModal: $(".prt-shell-modal"),
    closeButton: $("#closeBtn"),
    modalWindow: $(".prt-shell-modal"),
    mobileClose: $("#mobileClose")
  };
  // ------------------------- END PROJECT SCOPE VARIABLES ---------------------------- */

  // ------------------------- DOM FUNCTIONS -------------------------------- */
  var scrollToTop = function( obj ) {
      // scroll to top of page
      obj.scrollTop(0);
      // firefox & ie fix
      elem.html.animate({ scrollTop: 0 });
  };
  // ------------------------- END DOM FUNCTIONS ---------------------------- */


  // ------------------------- BEGIN EVENT HANDLERS --------------------------- */

  // Displays the modal window when a project tile has been clicked on
  var showModalEvent = function(obj1, obj2, obj3, obj4) {
    obj1.on("click", function() {
      // initialize the modal window's content
      model.projectSwitcher( $(this) );
      // initialize scrollToTop method
      scrollToTop( obj2 );
      obj4.fadeIn(modal.time_open_window);
      obj3.fadeIn(modal.time_open_bckgd, function(){
        obj3.css("opacity", 0.85);
      });
    });
  };

  // The closeModalEvent function returns the element displays to their initial
  // state, using the fadeOut jquery method to provide a fade, at which point
  // changing the 2nd object's styles to their previous state.
  var closeModalEvent = function(obj1, obj2, obj3) {
    obj1.on("click", function() {
      obj2.fadeOut(modal.time_closed, function(){
        obj2.hide();
        obj2.css("opacity", "1");
      });
      obj3.fadeOut(modal.time_closed, function() {
        obj3.hide();
        obj2.css("opacity", "1");
      });
    });
  };

  // ------------------------- END EVENT HANDLERS ----------------------------- */

  // ------------------------- BEGIN PUBLIC METHODS --------------------------- */
  var initModule = function() {

    // Modal display initialization
    showModalEvent(elem.projectLinks, elem.body, elem.modalBackground, elem.prtShellModal);

    // close methods
    closeModalEvent(elem.closeButton, elem.modalBackground, elem.modalWindow);
    closeModalEvent(elem.mobileClose, elem.modalBackground, elem.modalWindow);
    closeModalEvent(elem.modalBackground, elem.modalBackground, elem.modalWindow);
  };
  // ------------------------- END PUBLIC METHODS ----------------------------- */

  //initModule();
  return initModule();
}());
