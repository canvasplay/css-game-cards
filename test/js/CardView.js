var CardView = Backbone.View.extend({
  
  model : CardModel,

  events: {
    'change input': 'toggleDebug'
  },

  initialize: function(){
     this.listenTo(this.model, 'change', this.update);
     this.debug = true;
  },
  
  update: function(){
    
    var data = this.model.toJSON().arguments;

    var $card = this.$el.find('.card');
    var $classes = this.$el.find('.class-inspector');
    
    var classes = ['card'];
    
    var flip = _.find(data,function(i){ return i.name=="flip" });
    if(flip) classes.push('flip');
    
    var spin = _.find(data,function(i){ return i.name=="spin" });
    if(spin) classes.push('spin');
    
    var flipX = _.find(data,function(i){ return i.name=="flipX" });
    if(flipX) classes.push('flip-x');
    
    var spinX = _.find(data,function(i){ return i.name=="spinX" });
    if(spinX) classes.push('spin-x');

    var turn = _.find(data,function(i){ return i.name=="turn" });
    if(turn && turn.value!=='default') classes.push('turn-'+turn.value);
    
    var twist = _.find(data,function(i){ return i.name=="twist" });
    if(twist) classes.push('twist');
    
    $card[0].className = 'card '+ classes.join(' ');
    $classes.text('.'+classes.join(' .'));
    
    

    
    return;
  },

  toggleDebug: function(){

    this.debug = !this.debug;
    
    if(this.debug) this.$el.addClass('cards--debug');
    else this.$el.removeClass('cards--debug');

  }

                                     
});