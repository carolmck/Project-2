var $crust1	= $('#crust1').hide();
var $crust2	= $('#crust2').hide();
var $crust3	= $('#crust3').hide();
var $crust4	= $('#crust4').hide();
var $mantle1	= $('#mantle1').hide();
var $mantle2	= $('#mantle2').hide();
var $mantle3	= $('#mantle3').hide();
var $outerCore1	= $('#outerCore1').hide();
var $outerCore2	= $('#outerCore2').hide();
var $innerCore1	= $('#innerCore1').hide();



google.load('webfont','1');

google.setOnLoadCallback(function() {
  WebFont.load({
    google		: {
      families	: ['Lobster']
    },
    fontactive	: function(fontFamily, fontDescription) {
      init();
    }
  });
});

function init() {

  $crust1.show().arctext({radius: 500});
  $crust2.show().arctext({radius: 500});
  $crust3.show().arctext({radius: 500});
  $crust4.show().arctext({radius: 500});
  $mantle1.show().arctext({radius: 500});
  $mantle2.show().arctext({radius: 500});
  $mantle3.show().arctext({radius: 500});
  $outerCore1.show().arctext({radius: 500});
  $outerCore2.show().arctext({radius: 500});
  $innerCore1.show().arctext({radius: 500});




};
