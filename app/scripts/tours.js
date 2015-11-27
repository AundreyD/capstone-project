(function($) {
	'use strict';

	// "bit" = "Bands In Town"
	// Bands in Town API var delcarations

	var bitUri = 'http://api.bandsintown.com/artists/Phantogram/events.json?api_version=2.0&app_id=capstone_proj_bc',
		  bitFeed = $('#bit-feed'),
		  bitHb = Handlebars.compile(document.getElementById('bit-template').innerHTML);

	// Moment.js Helper
  Handlebars.registerHelper('moment', function(context) {
    return window.moment ? moment(context).format('lll') : context;
  });

	var loadBit = function() {
    $.ajax({
      url: bitUri,
      type: 'GET',
      dataType: 'jsonp',
      success: function(result) {
        bitFeed.append(bitHb(result));
      }
    });
  };

  loadBit();

})(jQuery);