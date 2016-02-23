
$(document).ready(function() {
$('#fullpage').fullpage({
//Navigation
  menu: "#myMenu",
  lockAnchors: false,
  anchors:['Home','Crust', 'Mantle', 'Outer Core', 'Inner Core'],
  navigation: true,
  navigationPosition: 'right',
  showActiveTooltip: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: true,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize : false,
    sectionsColor : ['#fff'],
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',
});

});
var quiz = jQuery('#quiz').quiz('1O8Qyc9sBFfVRol0HnrHyc5XUNQlBWmHY966s78dVCpc');
var quiz2 = jQuery('#quiz2').quiz('1mdrZNWw8ojPSMCKqCGrzgEM1cLb6hQ0PpsMJTE8Sg9o');
var quiz3 = jQuery('#quiz3').quiz('1MWbWYWJZVE7n6nozbO0y2h_bSxesigDfn-pkXni5tkk');
var quiz4 = jQuery('#quiz4').quiz('1qQhYN0OVARhPKzbX6D7gdAlbP0OZIbARHMSsYXWS3Cw')
