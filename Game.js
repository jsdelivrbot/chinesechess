exports.wait()
require([
    'Game.prototype.initGameState',
    'Board',
    'https://cdn.rawgit.com/anliting/Vector/008eefc93dfa768427d26b44c2856b80a02e7c3e/Vector',
    'https://cdn.rawgit.com/anliting/require/068921387c07a17e36248c3823fec24c05d667f2/node/events',
],(
    initGameState,
    Board,
    Vector,
    events
)=>{
exports(Game)
function Game(){
    events.call(this)
    this.lineWidth=1
    this.blockWidth=48
    this.chessWidth=this.blockWidth
    this.board=new Board(this)
    this.initGameState
}
Game.prototype=Object.create(events.prototype)
Object.defineProperty(Game.prototype,'initGameState',{
    get:initGameState
})
Game.prototype.moveChess=function(i,v){
    this.positionOfChesses[i]=v
    this.emit('chessmove',{
        which:i
    })
}
Game.prototype.createDiv=function(player){
    var
        game=this,
        div=document.createElement('div'),
        divOfChess=[]
    div.style.position='relative'
    div.appendChild(this.board.createDiv(player))
    this.chesses.forEach((chess,i)=>{
        var
            chessDiv=chess.createDivBySize(this.chessWidth)
        divOfChess.push(chessDiv)
        chessDiv.style.position='absolute'
        if(player==0){
            chessDiv.style.left=this.blockWidth*(
                1+this.positionOfChesses[i].x-0.5
            )+'px'
            chessDiv.style.top=this.blockWidth*(
                1+(9-this.positionOfChesses[i].y)-0.5
            )+'px'
            if(16<=i)
                chessDiv.style.webkitTransform='rotate(180deg)'
        }else{
            chessDiv.style.left=this.blockWidth*(
                1+(8-this.positionOfChesses[i].x)-0.5
            )+'px'
            chessDiv.style.top=this.blockWidth*(
                1+this.positionOfChesses[i].y-0.5
            )+'px'
            if(i<16)
                chessDiv.style.webkitTransform='rotate(180deg)'
        }
        setupDrag()
        div.appendChild(chessDiv)
        function setupDrag(){
            var offset
            chessDiv.addEventListener('mousedown',mousedown)
            function mousedown(e){
                if(e.which!=1)
                    return
                e.stopPropagation()
                e.preventDefault()
                offset=Vector.to(chessDiv,e)
                addEventListener('mousemove',mousemove)
                addEventListener('mouseup',mouseup)
            }
            function mousemove(e){
                var client=Vector.to(div,e).sub(offset),v
                v=client.div(game.blockWidth).sub(0.5)
                if(player==0)
                    v=new Vector(v.x,9-v.y)
                else
                    v=new Vector(8-v.x,v.y)
                game.moveChess(i,v)
            }
            function mouseup(){
                removeEventListener('mousemove',mousemove)
                removeEventListener('mouseup',mouseup)
            }
        }
    })
    game.on('chessmove',e=>{
        var
            i=e.which,
            chessDiv=divOfChess[i]
        div.appendChild(chessDiv)
        if(player==0){
            chessDiv.style.left=
                this.blockWidth*(1+game.positionOfChesses[i].x-0.5)+'px'
            chessDiv.style.top=
                this.blockWidth*(1+(9-game.positionOfChesses[i].y)-0.5)+'px'
        }else{
            chessDiv.style.left=
                this.blockWidth*(1+(8-game.positionOfChesses[i].x)-0.5)+'px'
            chessDiv.style.top=
                this.blockWidth*(1+game.positionOfChesses[i].y-0.5)+'px'
        }
    })
    return div
}
})
