require.css('style.css')
require.css('main.css')
require('Game',Game=>{
var
    game=new Game,
    gameDiv
gameDiv=game.createDiv()
gameDiv.style.display='inline-block'
document.getElementById('left').appendChild(gameDiv)
gameDiv=game.createDiv()
gameDiv.style.display='inline-block'
document.getElementById('right').appendChild(gameDiv)
})
