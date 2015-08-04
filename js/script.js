// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.

// create a modal object to hold property and animation properties
var modal = {

};

// create an element map object to hold all values within the page.
var elem = {
  body: $("body"),
  projectLinks: $(".prt-shell-nav > div"),
  modalBackground: $(".modal-background"),
  prtShellModal: $(".prt-shell-modal"),
  closeButton: $("#closeBtn"),
  mobileClose: $("#mobileClose"),
  modalWindow: $(".prt-shell-modal")
};

var showModalEvent = function() {
  elem.projectLinks.on("click", function() {
    elem.body.scrollTop(0);
    elem.modalBackground.show();
    elem.prtShellModal.show();
  });
};

// get modal window
var modalWindow = $(".prt-shell-modal");

var closeModalEvent = function(obj) {
  obj.on("click", function() {
    elem.modalBackground.hide();
    elem.modalWindow.hide();
  });
};

var initModule = function() {
  showModalEvent();
  closeModalEvent(elem.closeButton);
  closeModalEvent(elem.mobileClose);
  closeModalEvent(elem.modalBackground);
};

initModule();
