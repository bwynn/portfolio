var model = (function() {

  var gallry = {
    id: "gallry",
    imgId: "gallry-modal-img",
    title: "gallry.js",
    content: "Gallry.js is a lightweight javascript image gallery slider library. Written in vanilla JavaScript, gallry.js is fully responsive and customizable, giving control over individual slide presentation, timing and easing control, and the ability to add as many instances of the gallery on the page as is desired.",
    tools: ["javascript", "", "", ""],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10", "IE 11/Win 8.1"],
    links: ["http://www.brianwynndesign.com/sites/gallry/", "https://github.com/bwynn/gallery"]
  };

  var ndProject = {
    id: "norgren-design",
    imgId: "nd-modal-img",
    title: "Norgren Design",
    content: "A scalable portfolio site built for a Mechanical Engineering venture by Erik Norgren. Erik is recruiting for his design firm, and wanted the ability to engage potential business partners using a connect feature. The page's content is stored as json data, and passed down into a single page application. Form validation and content templates all handled using Angular's extensible framework.",
    tools: ["css3", "json", "javascript/jQuery", "Angular JS"],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10"],
    links: ["http://www.norgrendesigns.com", "https://github.com/bwynn/Norgren-Designs"]
  };

  var wavesProject = {
    id: "waves",
    imgId: "waves-modal-img",
    title: "Waves",
    content: "An ongoing personal project, this single page application gathers weather data from the WorldWeatherOnline API and passes it into the page. You can check the waves at 3 of the most consistent waves in California, as well as your current weather conditions. This app is built in jQuery/js as a single page application.",
    tools: ["AJAX", "JSON", "js/jQuery", "css"],
    browsers: ["Chrome 44", "Firefox 39", "Safari 8", "IE 11"],
    links: ["http://www.brianwynndesign.com/sites/waves/", "https://github.com/bwynn/waves_js/"]
  };

  var sandboxProject = {
    id: "sandbox",
    imgId: "sandbox-modal-img",
    title: "Sandbox",
    content: "A working development sandbox featuring smaller projects. The Memory Game is a small memory game written in js/jQuery. The Gear Inch Calculator utilizes Twitter's Bootstrap css framework, and is written using js/jQuery. The Flexible Layout project is a template layout using css3's flexbox. I'm big into responsive design and the power that flexbox offers over traditional floats and relative widths makes for quick and sleek layouts, using minimal code. The Clip Path project is intended as a working example of the clip-path property in css used as a css navigation tool.",
    tools: ["html", "css", "javascript/jQuery", "Bootstrap"],
    browsers: ["Chrome 44", "Firefox 39", "Safari 8"],
    links: ["http://www.brianwynndesign.com/sites/sandbox/", "https://github.com/bwynn/sandbox/"]
  };

  // create an element map object to hold all values within the page.
  var elem = {
    modalTitle: $(".modal-header"),
    modalCopy: $(".modal-copy"),
    modalTools: $(".tools li"),
    modalWindow: $(".prt-shell-modal"),
    modalBrowsers: $(".browsers li span"),
    modalLinks: $(".project-links li"),
    modalImage: $(".modal-featured-project > figure")
  };

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
    // loop through class assignments
    elem.modalImage.each(function(i) {
      $(this).attr("id", obj.imgId);
    });

    elem.modalWindow.each(function(i) {
      $(this).attr("id", obj.id);
    });
  };

  projectSwitcher = function( elem ) {
  switch ( elem.attr("class") ) {
    case "prj prt-shell-prj-1":
      // Modal content propagation
      modalBuilder(wavesProject);
      break;
    case "prj prt-shell-prj-2":
      modalBuilder(ndProject);
      break;
    case "prj prt-shell-prj-3":
      modalBuilder(gallry);
      break;
    case "prj prt-shell-prj-4":
      modalBuilder(sandboxProject);
      break;
    }
  };

  return {
    projectSwitcher : projectSwitcher
  }

}());
