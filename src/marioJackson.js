var MarioJackson = function(bottom, left){
  Dancer.call(this, bottom, left);
  this.$node = $('<span class="dancer marioJackson"></span>');
  this.setPosition(bottom, left);
}
MarioJackson.prototype = Object.create(Dancer.prototype);
MarioJackson.prototype.constructor = MarioJackson;