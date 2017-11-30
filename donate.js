$(function(){

// quick search regex
var qsRegex = '';
var counter = 0;


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',

  masonry: {
    columnWidth: '.element-item',
    isFitWidth: true
  },

  filter: function() {
    if (qsRegex == '') {
      return ".organization"
    }
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});


$('#filters').on( 'change', 'input', function() {
  counter= counter +1;

  if (counter%2 != 0) {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('switch-text_after').css( 'font-weight', '700' );
  }
  else {
    $grid.isotope({ filter: '.organization' });
    $('switch-text_before').css( 'font-weight', '700' );
  }
});

var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );


// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
     fn();
     timeout = null;
   }
   timeout = setTimeout( delayed, threshold || 100 );
 }
}


});


function load() {
var qsRegex;

  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',

    masonry: {
      columnWidth: '.element-item',
      isFitWidth: true
    },

    filter: function() {
      if (qsRegex == '') {
        return ".organization"
      }
      return qsRegex ? $(this).text().match( qsRegex ) : true;
    }
  });
  $grid.isotope({ filter: '.organization' });
}


function boldbtn() {  
  console.log("hit")
  $('switch-text_after').css('font-weight', '700' );
  console.log("hit 2")
  $('switch-text_before').css('font-weight', '700' );
}


