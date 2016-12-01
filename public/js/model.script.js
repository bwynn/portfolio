var model = (function() {

  var gallry = {
    id: "gallry",
    imgId: "gallry-modal-img",
    title: "gallry.js",
    content: "Gallry.js is a lightweight javascript image gallery slider library. Written in vanilla JavaScript, gallry.js is fully responsive and customizable, giving control over individual slide presentation, timing and easing control, and the ability to add as many instances of the gallery on the page as is desired.",
    tools: ["javascript", "", "", ""],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10", "IE 11/Win 8.1"],
    links: ["https://gallry-js.herokuapp.com/", "https://github.com/bwynn/gallery"]
  };

  var ndProject = {
    id: "norgren-design",
    imgId: "nd-modal-img",
    title: "Norgren Design",
    content: "A full stack CMS application for Mechanical Engineer consultant, Erik Norgren. This application gives the client full content management, and handles messaging/contact service. Norgren Designs features Passport authentication for admin management, nodemailer node module for admin notification on the back end, a variety of Angular modules to handle states and animations, and is mobile driven on the front end.",
    tools: ["MongoDB", "Express", "Angular", "Node"],
    browsers: ["Chrome 44/Mac OS X 10.10", "Firefox 39/Mac OS X 10.10", "Safari 8/Mac OS X 10.10"],
    links: ["http://norgrendesigns.heroku.com", "https://github.com/bwynn/Norgren-Designs"]
  };

  var wavesProject = {
    id: "waves",
    imgId: "waves-modal-img",
    title: "Waves",
    content: "An ongoing personal project, this single page application gathers weather data from the WorldWeatherOnline API and passes it into the page. You can check the waves at 3 of the most consistent waves in California, as well as your current weather conditions. This app is built in jQuery/js as a single page application.",
    tools: ["AJAX", "JSON", "js/jQuery", "css"],
    browsers: ["Chrome 44", "Firefox 39", "Safari 8", "IE 11"],
    links: ["/waves", "https://github.com/bwynn/waves_js/"]
  };

  var superCalcProject = {
    id: "super-calc",
    imgId: "super-calc-img",
    title: "Super Calculator",
    content: "This is a basic Angular application, deployed through Heroku on a Node server. While Super Calculator may be fairly rudimentary in it's programattic abilities, it serves as a good example of my test driven development process, using Karma/Jasmine for unit testing. It is fully responsive, and modular for future enhancements.",
    tools: ["Angular.js", "Node.js", "Express", "Karma/Jasmine"],
    browsers: ["All Modern Browsers supported"],
    links: ["http://bwynn-super-calc.herokuapp.com", "https://github.com/bwynn/super-calculator/"]
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
      modalBuilder(superCalcProject);
      break;
    }
  };

  return {
    projectSwitcher : projectSwitcher
  }

}());
