window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Funkcja rysująca przebieg prostokątny
    function drawRectangleWave(startX, startY, width, height, waveCount, waveHeight) {
        context.beginPath();
        context.moveTo(startX, startY);

        for (var i = 0; i < waveCount; i++) {
            var x = startX + (width / waveCount) * i;
            var y = startY + (i % 2 === 0 ? -waveHeight : waveHeight);

            context.lineTo(x, y);
            context.lineTo(x + (width / waveCount), y);
        }

        context.strokeStyle = "blue";
        context.stroke();
        context.closePath();
    }

    // Funkcja rysująca wykres kołowy
    function drawPieChart(centerX, centerY, radius, values) {
        var total = values.reduce((a, b) => a + b, 0);
        var startAngle = 0;

        for (var i = 0; i < values.length; i++) {
            var percent = values[i] / total;
            var angle = percent * 2 * Math.PI;
            var endAngle = startAngle + angle;

            var gradient = context.createLinearGradient(centerX, centerY, canvas.width, 0);
            gradient.addColorStop(0, getRandomColor());
            gradient.addColorStop(1, getRandomColor());

            context.beginPath();
            context.moveTo(centerX, centerY);
            context.arc(centerX, centerY, radius, startAngle, endAngle);
            context.fillStyle = gradient;
            context.fill();
            context.closePath();

            startAngle = endAngle;
        }
    }

    // Funkcja rysująca prostokąt z zaokrąglonymi rogami
function drawRoundedRectangle(x, y, width, height, cornerRadius) {
    context.beginPath();
    context.moveTo(x + cornerRadius, y);
    context.arcTo(x + width, y, x + width, y + height, cornerRadius);
    context.arcTo(x + width, y + height, x, y + height, cornerRadius);
    context.arcTo(x, y + height, x, y, cornerRadius);
    context.arcTo(x, y, x + width, y, cornerRadius);
    context.closePath();
}

// Tworzenie gradientu liniowego dla prostokąta
var rectangleGradient = context.createLinearGradient(0, 0, canvas.width*1.5, 0);
rectangleGradient.addColorStop(0, 'orange'); // Kolor początkowy
rectangleGradient.addColorStop(1, 'blue'); // Kolor końcowy

// Rysowanie prostokąta z zaokrąglonymi rogami z wypełnieniem liniowym
context.fillStyle = rectangleGradient;
drawRoundedRectangle(700, 100, 300, 150, 20); // startX = 20, startY = 400, width = 300, height = 150, cornerRadius = 20
context.fill();


// Funkcja rysująca koło zębate z zadanymi parametrami
function drawGear(centerX, centerY, teeth, innerRadius, toothSize) {
    var angleIncrement = (Math.PI * 2) / teeth;
    var holeRadius = 10; // Promień okrągłych otworów
    var holeDistanceFromCenter = innerRadius * 0.6; // Odległość otworów od środka
    var toothAngle = angleIncrement / 4; // Kąt pomiędzy krawędziami zębów

    context.beginPath();
    
    // Rysowanie zębów koła zębatego
    for (var i = 0; i < teeth; i++) {
        var angle = angleIncrement * i;
        var x1 = centerX + Math.cos(angle) * innerRadius;
        var y1 = centerY + Math.sin(angle) * innerRadius;
        var x2 = centerX + Math.cos(angle + toothAngle) * (innerRadius + toothSize);
        var y2 = centerY + Math.sin(angle + toothAngle) * (innerRadius + toothSize);
        var x3 = centerX + Math.cos(angle + angleIncrement - toothAngle) * (innerRadius + toothSize);
        var y3 = centerY + Math.sin(angle + angleIncrement - toothAngle) * (innerRadius + toothSize);
        var x4 = centerX + Math.cos(angle + angleIncrement) * innerRadius;
        var y4 = centerY + Math.sin(angle + angleIncrement) * innerRadius;
        
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.lineTo(x4, y4);
 
    }
    
    // Rysowanie okrągłych otworów
    var holeAngleIncrement = (Math.PI * 2) / 5; // Kąt pomiędzy otworami
    for (var j = 0; j < 5; j++) {
        var holeAngle = holeAngleIncrement * j;
        var holeX = centerX + Math.cos(holeAngle) * holeDistanceFromCenter;
        var holeY = centerY + Math.sin(holeAngle) * holeDistanceFromCenter;
        
        context.moveTo(holeX + holeRadius, holeY);
        context.arc(holeX, holeY, holeRadius, 0, Math.PI * 2);
    }
    
    context.stroke();
}

// Rysowanie koła zębatego
drawGear(800,400, 15, 80, 20); // centerX = 200, centerY = 600, teeth = 15, innerRadius = 80, toothSize = 20



    // Funkcja zwracająca losowy kolor w formacie RGB
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Rysowanie przebiegu prostokątnego
    drawRectangleWave(50, 100, 300, 150, 10, 30);

    // Rysowanie wykresu kołowego
    drawPieChart(250, 300, 100, [10, 30, 50, 120]);
};
