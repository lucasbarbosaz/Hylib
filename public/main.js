console.log("%cAVISO IMPORTANTE", "font: bold 40px sans-serif;color: rgb(237, 28, 28);text-shadow: 2px 0 0 rgb(0, 0, 0), -2px 0 0 rgb(0, 0, 0), 0 2px 0 rgb(0, 0, 0), 0 -2px 0 rgb(0, 0, 0), 1px 1px rgb(0, 0, 0), -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0)");
console.log("%cO console, é uma ferramenta de desenvolvimento. Caso alguém peça para que você cole algo aqui dizendo que você pode ganhar qualquer tipo de moeda, não acredite, do contrário você vai estar comprometendo o acesso da sua conta através de algo que você colou aqui.\n\nTudo que você fizer através do console, será de total responsabilidade sua!\n\Lella Hotel\n", "bold 20px sans-serif");

var html = $("html"),
head = $("head"),
body  = $("body"),
container = $(".container"),
content = $(".content"),
loader = $(".loader"),
client = $(".client");

var URL = document.location.origin,
API = URL + '/api',
CDN = URL + '/cdn',
HOTELNAME = 'Lella Hotel';



/* --------------------------------------------------------------- */

$(document).on('mousemove', '[habbo-tooltip]', function(e) {
	var tooltip = $('.tooltip');

	if ($(this).is(':hover')) {
		tooltip.html($(this).attr('habbo-tooltip')).css({
			'left': e.pageX += 20,
			'top': e.pageY += 20,
			'display': 'block'
		});
	}
}).on('mouseout', '[habbo-tooltip]', function() {
	var tooltip = $('.tooltip');

	tooltip.attr('style', null);
	tooltip.empty();
});

/* --------------------------------------------------------------- */

$(document).on('click', '.general-box.vip button.benefits', function() {
	var benefits = $(this).parent().parent().parent().find('.general-box-header > .vip-benefits'),
	button = $(this);

	if (benefits.hasClass('show')) {
		benefits.slideUp(500);
		benefits.removeClass('show');
		button.find('label > h5 > span').text('Ver');
	} else {
		benefits.slideDown(500);
		benefits.addClass('show');
		button.find('label > h5 > span').text('Esconder');
	}
}).on('change', 'form.register-form input[name="gender"]', function() {
	var genderName = ($(this).val() == 'female') ? 'female' : 'male';

	$('form.register-form').find('.result-register-card > .habbo-result.default').removeClass('default').removeClass('default');

	if (genderName == 'female' && $('form.register-form').find('.result-register-card > .habbo-result').hasClass('male')) {
		$('form.register-form').find('.result-register-card > .habbo-result').removeClass('male').addClass('female');
	} else {
		$('form.register-form').find('.result-register-card > .habbo-result').removeClass('female').addClass('male');
	}
}).on('click', '[data-open-modal]', function() {
	var dataModal = $(this).attr('data-open-modal');

	if ($('.modal-container[data-modal="' + dataModal + '"]').length > 0) {
		html.css('overflow', 'hidden');

		if (!$('.modal-container[data-modal="' + dataModal + '"]').hasClass('transition')) {
			$('.modal-container[data-modal="' + dataModal + '"]').addClass('transition');
		}

		setTimeout(function() {
			$('.modal-container[data-modal="' + dataModal + '"]').toggleClass('show');
		}, 100);
	}
});

/* --------------------------------------------------------------- */



$(document).on('click', '.header-menu.dropdown > label', function(e) {
	$(this).parent().find('.dropdown-content').slideUp(200)
	if ($(this).parent().hasClass('active')) {
		$(this).parent().removeClass('active');
	} else {
		$(this).parent().addClass('active');
		$(this).parent().find('.dropdown-content').first().slideDown(300);
		$(this).parent().siblings().find('.dropdown-content').slideUp(200);
		$(this).parent().siblings().removeClass('active');
	}
}).on('click', function(e) {
	if (!e.target.matches('.header-menu.dropdown > .dropbtn')) {
		var dropmenu = $('.header-menu.dropdown'),
		dropdown = dropmenu.find('.dropdown-content');

		if (dropmenu.hasClass('active')) {
			dropmenu.removeClass('active');
			dropdown.slideUp(200);
		}
	}

	if ($('.modal-container.show').length > 0) {
		if (!$('.modal-container.show > .modal-container-box').is(':hover')) {
			$('.modal-container.show').removeClass('show');

			setTimeout(function() {
				html.css('overflow', 'auto');
			}, 300);
		}
	}
}).on('click', '.payment-method', function() {
	if ($(this).attr('data-method') == 'picpay') {
		$(this).parent().parent().find('.payment-warns').html($('<div class="payment-warn picpay color-1"></div>').html('Para comprar através do picpay, você deve entrar em contato através do discord com <b>joaotaffas#0355</b> para conseguir utilizar este metodo de pagamento.').hide().fadeIn(250, function() {
			var paymentWarn = $(this);

			setTimeout(function() {
				paymentWarn.remove();
			}, 10000);
		}));
	}
});


function setBirthDays() {
	for (i = 1; i < 32; i++){
		if (i < 10) {
			i = "0" + i;
		}

		$(".days").append($('<option />').val(i).html(i));
	}

	for (i = 1; i < 13; i++){
		if (i < 10) {
			i = "0" + i;
		}

		$(".months").append($('<option />').val(i).html(i));
	}

	for (i = new Date().getFullYear(); i > 1944; i--) {
		$(".years").append($('<option />').val(i).html(i));
	}
}




$(function() {
	setBirthDays();


})
