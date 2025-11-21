document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('img').forEach(function(img){
    img.onerror = function(){ this.src = 'images/placeholder.jpg'; }
  });
});