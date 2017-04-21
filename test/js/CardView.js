var CardView = Backbone.View.extend({
  
  model : CardModel,

  initialize: function(){
     this.listenTo(this.model, 'change', this.update);
  },
  
  update: function(){
    
    var data = this.model.toJSON().arguments;

    var $card = this.$el.find('.card');
    
    var classes = ['card'];
    
    var flip = _.find(data,function(i){ return i.name=="flip" });
    if(flip) classes.push('flip');
    
    var spin = _.find(data,function(i){ return i.name=="spin" });
    if(spin) classes.push('spin');
    
    var turn = _.find(data,function(i){ return i.name=="turn" });
    if(turn && turn.value!=='default') classes.push('turn-'+turn.value);
    
    var twist = _.find(data,function(i){ return i.name=="twist" });
    if(twist) classes.push('twist');
    
    $card[0].className = classes.join(' ');
    
    var _3d = _.find(data,function(i){ return i.name=="3d" });
    if(_3d) this.$el.addClass('cards--debug');
    else this.$el.removeClass('cards--debug');
    
    return;
  }
                                     
});