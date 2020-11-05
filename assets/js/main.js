(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

		$(window).scroll(function() {     
			var scroll = $(window).scrollTop();
			if (scroll > 0) {
				$("#nav").addClass("active");
			}
			else {
				$("#nav").removeClass("active");
			}
		});


})(jQuery);


function worldclock() {
    var date = new Date();
    var h = date.getHours();  // 0-23
    var m = date.getMinutes(); // 0-59
    var s = date.getSeconds(); // 0-59
    var session = "AM";

    if(h == 0) {
      h = 12;
    }
    if(h > 12) {
      h = h -12;
      session = "PM";
    }
    
    h=(h<10) ? "0" +h:h;
    m=(m<10) ? "0" +m:m;
    s=(s<10) ? "0" +s:s;

    var time = h + " : " + m + " : " + s +" "+ session;

    document.getElementById("showTime").innerText = time;
    document.getElementById("showTime").textContent = time;
    setTimeout(worldclock, 1000);
    }
    worldclock();