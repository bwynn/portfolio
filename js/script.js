// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.

// create a modal object to hold property and animation properties
var modal = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  time_open_bckgd: 400,
  time_open_window: 600,
  time_closed: 300
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

var showModalEvent = function(obj1, obj2, obj3, obj4) {
  obj1.on("click", function() {
    obj2.scrollTop(0);
    obj3.fadeIn(modal.time_open_bckgd);
    obj4.fadeIn(modal.time_open_window);
  });
};

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

var initModule = function() {
  showModalEvent(elem.projectLinks, elem.body, elem.modalBackground, elem.prtShellModal);
  closeModalEvent(elem.closeButton, elem.modalBackground, elem.modalWindow);
  closeModalEvent(elem.mobileClose, elem.modalBackground, elem.modalWindow);
  closeModalEvent(elem.modalBackground, elem.modalBackground, elem.modalWindow);
};

initModule();
