// for events, create a constructor function that takes objects and callbacks
// that handle the different function properties as an event.

// ---------------------------- PROJECT SCOPE VARIABLES --------------------- */
// create a modal object to hold property and animation properties
var modal = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  time_open_bckgd: 400,
  time_open_window: 600,
  time_closed: 300,
  content: {
    item_link_length: -4
  }
};

var swProject = {
  title: "Southwest Roadtrip",
  content: "A project that features big, bold retina pictures from a road trip I took with my wife in the fall of 2014. This project features a responsive gallery slider. The Southwest Roadtrip project is hand coded from the ground up, using javascript and utilizing the jQuery javascript library. Mobile touch events handled using the jQuery mobile framework.",
  tools: ["html", "css", "javascript", "next"],
  browsers: ["Chrome 44", "Firefox 39", "Safari 8", "another"],
  links: ["http://www.brianwynndesign.com/southwest/", "https://github.com/bwynn/southwest"]
};

var ndProject = {
  title: "Norgren Design",
  content: "Description of the norgren design project scope",
  tools: ["html", "css", "javascript/jquery", "uriAnchor"],
  browsers: ["Chrome 44", "Firefox 39", "Safari 8", "Opera"],
  links: ["http://www.norgrendesign.com", "https://github.com/bwynn/norgren-design"]
};

var wavesProject = {
  title: "Waves",
  content: "Description of the waves project, api call, json content, etc.",
  tools: ["html", "css", "javascript/jquery", "json", "ajax"],
  browsers: ["Chrome 44", "Firefox 39", "Safari 8", "IE11"],
  links: ["http://www.brianwynndesign.com/waves/", "https://github.com/bwynn/waves_js/"]
};

var sandboxProject = {
  title: "Sandbox",
  content: "A memory game, a flexbox layout project, gear inch calculator",
  tools: ["html", "css", "javascript", "bootstrap", "ajax"],
  browsers: ["Chrome 44", "Firefox 39", "Safari 8"],
  links: ["http://www.brianwynndesign.com/sandbox/", "https://github.com/bwynn/sandbox/"]
};

// create an element map object to hold all values within the page.
var elem = {
  body: $("body"),
  projectLinks: $(".prt-shell-nav > div"),
  modalBackground: $(".modal-background"),
  prtShellModal: $(".prt-shell-modal"),
  closeButton: $("#closeBtn"),
  mobileClose: $("#mobileClose"),
  modalWindow: $(".prt-shell-modal"),
  modalTitle: $(".modal-header"),
  modalCopy: $(".modal-copy"),
  modalTools: $(".tools li"),
  modalBrowsers: $(".browsers li"),
  modalLinks: $(".project-links li")
};
// ------------------------- END PROJECT SCOPE VARIABLES -------------------- */

// ------------------------- BEGIN UTILITY METHODS -------------------------- */
// ------------------------- END UTILITY METHODS ---------------------------- */

// ------------------------- BEGIN DOM METHODS ------------------------------ */
var modalBuilder = function( obj ) {
  var obj;
  elem.modalTitle.text(obj.title);
  elem.modalCopy.text(obj.content);
  // loop through each iteration of list items
  elem.modalTools.each(function(i) {
    $(this).text(obj.tools[i]);
  });
  // loop through all browsers
  elem.modalBrowsers.each(function(i) {
    $(this).text(obj.browsers[i]);
  });
  elem.modalLinks.each(function(i) {
    var anchor = $(this).children();

    anchor.attr("href", obj.links[i]);
  });
};

var projectSwitcher = function( elem ) {
  switch ( elem.attr("class") ) {
    case "prt-shell-prj-1":
      // Modal content propagation
      modalBuilder(wavesProject);
      break;
    case "prt-shell-prj-2":
      modalBuilder(ndProject);
      break;
    case "prt-shell-prj-3":
      modalBuilder(swProject);
      break;
    case "prt-shell-prj-4":
      modalBuilder(sandboxProject);
      break;
  }
};

// ------------------------- END DOM METHODS -------------------------------- */

// ------------------------- BEGIN EVENT HANDLERS --------------------------- */
// This function displays the modal window when a project tile has been clicked on
var showModalEvent = function(obj1, obj2, obj3, obj4) {
  obj1.on("click", function() {
    projectSwitcher( $(this) );
    obj2.scrollTop(0);
    obj3.fadeIn(modal.time_open_bckgd, function(){
      obj3.css("opacity", 0.85);
    });
    obj4.fadeIn(modal.time_open_window);
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

// ------------------------- BEGIN CALLBACKS -------------------------------- */
// ------------------------- END CALLBACKS ---------------------------------- */

// ------------------------- BEGIN PUBLIC METHODS --------------------------- */
var initModule = function() {
  // Modal display initialization
  showModalEvent(elem.projectLinks, elem.body, elem.modalBackground, elem.prtShellModal);
  closeModalEvent(elem.closeButton, elem.modalBackground, elem.modalWindow);
  closeModalEvent(elem.mobileClose, elem.modalBackground, elem.modalWindow);
  closeModalEvent(elem.modalBackground, elem.modalBackground, elem.modalWindow);
};
// ------------------------- END PUBLIC METHODS ----------------------------- */

initModule();
