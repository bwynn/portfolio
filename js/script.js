// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.

var projectLinks = $(".prt-shell-nav > div");

projectLinks.on("click", function() {
  var modalBackground = $(".modal-background");
  var prtShellModal = $(".prt-shell-modal");

  modalBackground.show();
  prtShellModal.show();
});

// get modal background
var modalBackground = $(".modal-background");
// get desktop close button
var closeButton = $("#closeBtn");
// get mobile close button
var mobileClose = $("#mobileClose");
// get modal window
var modalWindow = $(".prt-shell-modal");

var eventHandler = function(obj) {
  obj.on("click", function() {
    modalBackground.hide();
    modalWindow.hide();
  });
};

eventHandler(closeButton);
eventHandler(mobileClose);
eventHandler(modalBackground);
