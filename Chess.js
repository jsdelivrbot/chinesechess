var textOfColorType=[
    '卒包馬車象士將',
    '兵炮傌俥相仕帥',
]
function Chess(game,color,type){
    this.game=game
    this.color=color
    this.type=type
}
Chess.prototype.createDivBySize=function(){
    var
        chess=this,
        div=document.createElement('div')
    div.style.color=this.color==0?'black':'red'
    div.style.fontSize=0.5*Math.sqrt(2)*chess.game.chessWidth+'px'
    div.appendChild(canvas())
    return div
    function canvas(){
        var
            canvas=document.createElement('canvas'),
            context=canvas.getContext('2d'),
            width=2+chess.game.chessWidth+2
        canvas.width=width
        canvas.height=width
        context.beginPath()
        context.fillStyle='white'
        context.arc(width/2,width/2,chess.game.chessWidth/2,0,2*Math.PI)
        context.fill()
        context.fillStyle=chess.color==0?'black':'red'
        context.strokeStyle=chess.color==0?'black':'red'
        context.arc(width/2,width/2,chess.game.chessWidth/2,0,2*Math.PI)
        context.stroke()
        context.font=width/2+'px sans-serif'
        context.textAlign='center'
        context.textBaseline='middle'
        context.fillText(
            textOfColorType[chess.color][chess.type],
            width/2,
            width/2,
            width
        )
        return canvas
    }
}
Chess.black=0
Chess.red=1
Chess.soldier=0
Chess.cannon=1
Chess.horse=2
Chess.chariot=3
Chess.elephant=4
Chess.advisor=5
Chess.general=6
