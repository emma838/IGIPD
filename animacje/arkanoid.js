var w=400, h=600, ballSize=10, brickW=30, brickH=20, batW=100, batH=20
  var ballX, ballY, dx, dy, bricks=[], batX=w/2, batY=h-50
  var c = document.getElementById("arkanoidCanvas")
  var ctx = canvas.getContext("2d")
  c.width = w; c.height = h

  function init() {
    bricks=[], ballX=w/2, ballY=h-100, dx=1, dy=-1
    for (var y = 0; y < 4; y++) {
      for (var x = y; x < 10-y; x++) {
        bricks.push({x: 50+x*brickW, y: 50+y*brickH, active: true})
      }
    }
  }

  function drawRect(color, x, y, w, h) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.rect(x, y, w, h)
    ctx.fill()
    ctx.stroke()
  }

  function drawCircle(color, x, y, r) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI, false)
    ctx.fill()
  }

  function draw() {
    drawRect('#eee', 0, 0, w, h)
    drawCircle('#f00', ballX, ballY, ballSize)
    for (var i = 0; i < bricks.length; i++) {
      var b = bricks[i]
      if (!b.active) continue
      drawRect('#0f0', b.x, b.y, brickW, brickH)
    }
    drawRect('#00f', batX-batW/2, batY, batW, batH)
  }

  function move() {
    if (ballX-ballSize+dx < 0 || ballX+ballSize+dx > w) dx = -dx
    if (ballY-ballSize+dy < 0) dy = -dy
    if (ballY-ballSize> batY) return false
    if (ballY+ballSize > batY && ballX+ballSize > batX-batW/2 && ballX-ballSize < batX+batW/2) dy = -dy
    ballX += dx
    ballY += dy
    for (var i = 0; i < bricks.length; i++) {
      var b = bricks[i]
      if (!b.active) continue
      if (b.x < ballX+ballSize && ballX-ballSize < b.x+brickW && b.y < ballY+ballSize && ballY-ballSize < b.y+brickH) {
        b.active = false
        dy = -dy
        break
      }
    }
    return true
  }

  function game() {
    if (!move()) {
      alert('Game over!')
      init()
    }
    draw()
  }

  document.addEventListener("keydown", function(e) {
    switch (e.keyCode) {
      case 37: if (batX > batW) batX-=20; break
      case 39: if (batX < w-batW) batX+=20; break
    }
  })
  init()
  setInterval(game, 1)