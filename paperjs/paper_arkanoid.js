// Inicjalizacja Canvas przy użyciu Paper.js
paper.install(window);
paper.setup('myCanvas');

// Rozmiary ekranu
const screenWidth = view.size.width;
const screenHeight = view.size.height;

// Tworzenie paletki
const paddleWidth = 100;
const paddleHeight = 10;
const paddleSpeed = 10;
const paddleColor = 'black';
const paddle = new Path.Rectangle(screenWidth / 2 - paddleWidth / 2, screenHeight - paddleHeight - 20, paddleWidth, paddleHeight);
paddle.fillColor = paddleColor;

// Obsługa ruchu paletki
function movePaddle(event) {
    if (event.key === 'left') {
        if (paddle.bounds.left > 0) {
            paddle.position.x -= paddleSpeed;
        }
    } else if (event.key === 'right') {
        if (paddle.bounds.right < screenWidth) {
            paddle.position.x += paddleSpeed;
        }
    }
}

// Obsługa ruchu paletki po naciśnięciu klawiszy
function onKeyDown(event) {
    movePaddle(event);
}

// Uruchomienie obsługi ruchu paletki po załadowaniu strony
function init() {
    view.onKeyDown = onKeyDown;
}

init();