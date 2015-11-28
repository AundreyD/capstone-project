(function($) {
	'use strict';

  // Tumblr API var delcarations

	var tumblrUri = 'http://api.tumblr.com/v2/blog/phantogrammusic.tumblr.com/posts?limit=5&api_key=9ZGNKylKIP5o9I4VE87PrG2EkgQDeEugaUOV2K24w8s5uvgsy3',
			tumblrFeed = $('#tumblr-feed'),
			tumblrHb = Handlebars.compile(document.getElementById('tumblr-template').innerHTML);

	// Moment.js Helper
  Handlebars.registerHelper('moment', function(context) {
    return window.moment ? moment(context, 'YYYY-MM-DD hh:mm:ss ZZZ').fromNow() : context;
  });

	var loadTumblr = function() {
    $.ajax({
      url: tumblrUri,
      type: 'GET',
      dataType: 'jsonp',
      success: function(result) {
        tumblrFeed.append(tumblrHb(result));
      }
    });
  };

  loadTumblr();

})(jQuery);
