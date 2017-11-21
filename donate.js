
$(function(){
   //your code here

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

$grid.isotope();


$('#filters').on( 'change', 'input', function() {
  counter= counter +1;

  if (counter%2 != 0) {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  }
  else {
    $grid.isotope({ filter: '.organization' });
  }
});
// use value of search field to filter
// var $quicksearch = $('.quicksearch').keyup( debounce( function() {
//   qsRegex = new RegExp( $quicksearch.val(), 'gi' );
//   $grid.isotope();
// }, 200 ) );

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