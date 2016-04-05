require.css('style.css')
require.css('main.css')
require('Game',Game=>{
var
    game=new Game,
    gameDiv
gameDiv=game.createDiv(0)
gameDiv.style.display='inline-block'
document.getElementById('left').appendChild(gameDiv)
gameDiv=game.createDiv(1)
gameDiv.style.display='inline-block'
document.getElementById('right').appendChild(gameDiv)
})
