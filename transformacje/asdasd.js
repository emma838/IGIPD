window.onload = function(){
    var canvas = document.getElementById("zd3");
    var context = canvas.getContext("2d");
  
    // Deklaracja zmiennych podlegających zmianie podczas całej animacji
    var last_time, stop, linear_speed;
  
    // Inicjalizacja stanu początkowego animacji
    function InitAnimation() {
      stop = false;
      var date = new Date();
      last_time = date.getTime();
      // Inicjalizacja zmiennych opisujących animację
  
      // Uruchomienie animacji
      window.requestAnimationFrame(drawAnimation);
    }
  
    // Właściwa funkcja rysująca kolejne klatki animacji
    function drawAnimation() {
      // Czyszczenie płótna
      context.clearRect(0, 0, 500, 100);
  
      // Wyznaczenie upływu czasu od ostatniej klatki
      var date = new Date();
      var time_interval = date.getTime() - last_time;
  
      // Wyznaczenie nowego stanu rysowanych obiektów
      var distance = linear_speed * time_interval / 1000;
  
      // Rysowanie obiektów
  
      // Zapamiętanie stanu płótna
      context.save();
      context.beginPath();
  
      // Rysowanie obiektów
      context.closePath();
      context.restore();
  
      // Ponowne wywołanie pętli animacji
      if (!stop) window.requestAnimationFrame(draw);
    }
  
    InitAnimation();
  }
  