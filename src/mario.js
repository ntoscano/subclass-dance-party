var Mario = function (top, left){
  Dancer.call(this, top, left);
  this.$node = $('<span class="mario"></span>');  
  this.setPosition(top, left);
}
Mario.prototype = Object.create(Dancer.prototype);
Mario.prototype.constructor = Mario;