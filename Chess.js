function Chess(game){
    this.game=game
    this.div=document.createElement('div')
    this.div.style.width=game.chessWidth+'px'
    this.div.style.height=game.chessWidth+'px'
    this.div.style.color=this.colorName
    this.div.style.fontSize=0.5*Math.sqrt(2)*game.chessWidth+'px'
    this.div.textContent=this.text
    function canvas(){
    }
}
