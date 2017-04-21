var CardFormView = Backbone.View.extend({

	model : CardModel,
 
  events: {
      'change input': 'onDataChange'
  },
  
  render: function(){
    return this;
  },
  
	initialize: function(options){    
    this.serializeData();
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

    console.log(data);
    
    this.model.set('arguments',data);
    
  }

});
