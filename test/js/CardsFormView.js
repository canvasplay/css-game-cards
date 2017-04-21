var CardsFormView = Backbone.View.extend({

	model : CardsModel,
 
  events: {
      'change input': 'onDataChange',
      'click .button-count': 'onCountChange'
  },
  
	initialize: function(options){

		//this.listenTo(this.model, "change", this.render);
    
    this.serializeData();

	},

	render : function() {

		//this.el.innerHTML = '<h1>'+this.model.get('name')+'</h1>';
		this.el.innerHTML = this.model.get('name');

		return this;

	},
  
  onCountChange: function(e){
    var min = 1, max = 50;
    var value = parseInt($(e.currentTarget).attr('data-value')) || 0;
    var input = this.$el.find('input[name="count"]');
    var currentValue = parseInt($(input).attr('value')) || 0;
    var targetValue = currentValue+value;
    if(targetValue<min) targetValue = min;
    if(targetValue>max) targetValue = max;
    $(input).attr('value',targetValue);
    $(input).trigger('change');
  },
  
  onDataChange: function(e){
    this.serializeData();
  },
  
  serializeData: function(){

    var $el = this.$el;
    console.log($el.serializeArray());
    var data = _.map(_.groupBy($el.serializeArray(),'name'), function(o){
      return { name: o[0].name, value: _.map(o,'value').join(',') }
    });

    //console.log(data);
    
    this.model.set('arguments',data);
    
  }

});