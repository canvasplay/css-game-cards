

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



})
