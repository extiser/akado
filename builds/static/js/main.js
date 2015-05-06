$(window).load(function() {

  $('.table').fadeIn();
});

jQuery(document).ready(function($) {

	$('#click-modal').click(function() {

		$('.tablet__hover, .tablet__list, .tablet__action-title, .tablet__action-counter, .tablet__phone').addClass('visible');
		$('.tablet__header, .tablet__cost, .tablet__click').hide(400);
	});

	var endMonth = 5,
		endDay = 31,
		today = new Date(),
		end = new Date(today.getFullYear(), endMonth - 1, endDay),
		oneDay = 1000 * 60 * 60 * 24;

		if (today.getDate() < endDay) {
			var days = Math.ceil((end.getTime() - today.getTime()) / oneDay);
		} else {
			var days = 0;
		}

		$('#daysOff span').html(days);
		function DigitsOfNum(n) {
			var A = [], k = 0;
			while (n >= 1) {
				A[k++] = (n - n % 1) % 10; n /= 10;
			}
			return A[0];
		}

		var recently = DigitsOfNum(days);

		if (recently == 1) {
			$('.tablet__action-counter__elem__before').html('остался');
			$('.tablet__action-counter__elem__after').html('день');
		} else {
			if (recently < 5) {
				$('.tablet__action-counter__elem__before').html('осталось');
				$('.tablet__action-counter__elem__after').html('дня');
			} else {
				$('.tablet__action-counter__elem__before').html('осталось');
				$('.tablet__action-counter__elem__after').html('дней');
			}
		}

});
