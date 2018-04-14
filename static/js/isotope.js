
  // init Isotope
  var $container = $('.isotope-classes').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        name: '.name',
        section: '.section',
        type: '.type'
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'li', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });

     // Change icon.
  });

  $('#sorts li a i').each(function() {
      $(this).addClass('fa fa-check');
  });

