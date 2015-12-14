(function () {
  if (typeof(window.Asteroids) === "undefined"){
    window.Asteroids = {};
  };

  var GameOver = Asteroids.GameOver = function (options) {
    this.image = new Image();
    this.src = './assets/img/gameover.jpg';
  };


  GameOver.prototype.draw = function(ctx){
    this.image.src = this.src;
    ctx.clearRect(0, 0, 667, 100);
    ctx.drawImage(this.image, 0, 100, 667, 533);
  };

})();