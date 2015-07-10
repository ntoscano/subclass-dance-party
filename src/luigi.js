var Luigi = function(bottom, left, timeBetweenSteps){
  Dancer.call(this, bottom, left, timeBetweenSteps)
  this.$node = $('<span class="dancer luigi"></span>');
  this.setPosition(bottom, left);
  this.step();

}
Luigi.prototype = Object.create(Dancer.prototype);
Luigi.prototype.constructor = Luigi;
Luigi.prototype.oldStep = Dancer.prototype.step;

Luigi.prototype.step = function(){
  this.oldStep();
  console.log("ran");
  this.$node.animate({'right': '20px'});
};

