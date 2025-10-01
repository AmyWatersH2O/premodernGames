(function(window, _) {
  window.premodernGames = window.premodernGames || {
    numz: {
        calculateDistance(pointA, pointB){
            var diffX = Math.abs(pointA.x - pointB.x);
            var diffY = Math.abs(pointA.y - pointB.y);
            return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            
        }
    },
    phyz: {},
  };
}(window, window._));