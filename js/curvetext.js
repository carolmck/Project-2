var $curve1	= $('#curve1').hide();
var $curve2	= $('#curve2').hide();


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

  $curve1.show().arctext({radius: 300});
  $curve2.show().arctext({radius: 600});


};
