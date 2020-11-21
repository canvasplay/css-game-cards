

var cm,cv,cfv;
var csm,csv,csfv;

$(window).ready(function(){

	cm = new CardModel();

	cv = new CardView({
	  'el': $('.card-view'),
	  'model': cm
	});

	cfv = new CardFormView({
	  'el': $('form.card-form'),
	  'model': cm
	});


	csm = new CardsModel();

	csv = new CardsView({
	  'el': $('.cards-view'),
	  'model': csm
	});

	csfv = new CardsFormView({
	  'el': $('form.cards-form'),
	  'model': csm
	});

  $('.card-view .card').on('click', function(){
    $('form.card-form input[name="flip"]').click();
  });

  $('.cards-theme--uno .card').on('click', function(){$(this).toggleClass('flip')});
  $('.cards-theme--poker .card').on('click', function(){$(this).toggleClass('flip')});
  $('.cards-theme--cuatro .card').on('click', function(){$(this).toggleClass('flip')});


})
