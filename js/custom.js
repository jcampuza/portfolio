$(document).ready(function() {
  
  $("#goto-projects").click(function() {
    var loc= $("#projects").offset();
    $("body, html").animate({scrollTop: loc.top}, 1000);
  });
  
  //Image gallery
  var galleryActive = false;
  $(".image-choice").click(function() {

  	if (galleryActive == true) {
  		return;
  	}
  	galleryActive == true;
  	self = $(this);

  	var gallery = self.closest('div').siblings('.image-wrapper').children();
  	var direction = self.attr('value');
  	if (direction == "next") {
  		var success = nextImage(gallery);
  		if (success) {
  			galleryActive = false;
  			return;
  		} else alert('something went wrong!');
  	} else if (direction == "prev") {
  		var success = prevImage(gallery);
  		if (success) {
  			galleryActive = false;
  		} else alert('something went wrong!');
  	}

  	function prevImage(images) {
  		for (var i = 0; i < images.length; i++) {
  			var image = $(images[i]);
  			active = image.attr('value')
  			if (active == 'active') {
  				if(i-1 < 0) {
  					image.attr('value', '');
  					image.addClass('hide')
  					var newImage = $(images[images.length - 1]);
  					newImage.attr('value', 'active');
  					newImage.removeClass('hide');
  					self.siblings('p').children('span').html(images.length);
  					return 1;
  				} else {
  					image.attr('value', '');
  					image.addClass('hide')
  					var newImage = $(images[i - 1]);
  					newImage.attr('value', 'active');
  					newImage.removeClass('hide');
  					self.siblings('p').children('span').html(i);
  					return 1;
  				}
  			}
  		}
  		return 0; // We haven't returned so something failed
  	}

  	function nextImage(images) {
  		for (var i = 0; i < images.length; i++) {
  			var image = $(images[i]);
  			active = image.attr('value')
  			if (active == 'active') {
  				if (i+1 >= images.length) {
  					image.attr('value', '');
  					image.addClass('hide');
  					var newImage = $(images[0]);
  					newImage.attr('value', 'active');
  					newImage.removeClass('hide')
  					self.siblings('p').children('span').html(1);
  					return 1;
  				} else {
  					console.log('changing image');
  					image.attr('value', '');
  					image.addClass('hide');
  					var newImage = $(images[i+1]);
  					newImage.attr('value', 'active');
  					newImage.removeClass('hide');
  					self.siblings('p').children('span').html(i + 2);
  					return 1
  				}
  			}
  		}
  		return 0; // We haven't returned, so something failed
  	};
  });
});
