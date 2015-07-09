var Luigi = function(top, left){
  Dancer.call(this, top, left)
  this.$node = $('<span class="luigi"></span>');
  this.setPosition(top, left);
}