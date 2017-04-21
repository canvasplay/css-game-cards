var CardsView = Backbone.View.extend({
  
  model : CardsModel,
  
  template: _.template($('#cards-template').html()),
  
  events: {
      'click .card': 'onCardClick'
  },
  
  initialize: function(){
     this.listenTo(this.model, 'change', this.render);
  },
  
  render: function(){
    var data = this.model.toJSON();
    console.log(data);
    this.$el.html(this.template(data));
    return this;
  },
  
  onCardClick: function(e){
    
    $(e.currentTarget).toggleClass('flip');
    
  }
                                     
});