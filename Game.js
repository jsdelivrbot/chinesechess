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
    this.size=48
    this.blockWidth=this.size
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
        div=document.createElement('div'),
        game=this,
        board=new Board(player),
        divOfChess=[]
    div.style.position='relative'
    div.appendChild(
        board.createDivBySize(this.blockWidth)
    )
    this.chesses.forEach((chess,i)=>{
        var
            chessDiv=chess.createDivBySize(this.blockWidth)
        divOfChess.push(chessDiv)
        chessDiv.style.position='absolute'
        board.chessViewingVectorOfSize(
            this.positionOfChesses[i],
            this.size
        ).style(chessDiv)
        if(player==0?16<=i:i<16)
            chessDiv.style.webkitTransform='rotate(180deg)'
        setupDrag()
        div.appendChild(chessDiv)
        function setupDrag(){
            var chessId=i,offset
            chessDiv.addEventListener('mousedown',mousedown)
            chessDiv.addEventListener('touchstart',touchstart)
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
                e.stopPropagation()
                e.preventDefault()
                moveChess(e)
            }
            function mouseup(e){
                e.stopPropagation()
                e.preventDefault()
                removeEventListener('mousemove',mousemove)
                removeEventListener('mouseup',mouseup)
            }
            function touchstart(e){
                e.stopPropagation()
                e.preventDefault()
                for(let i=0;i<e.changedTouches.length;i++)
                    offset=Vector.to(chessDiv,e.changedTouches[i])
                addEventListener('touchmove',touchmove)
                addEventListener('touchend',touchend)
            }
            function touchmove(e){
                e.stopPropagation()
                e.preventDefault()
                for(let i=0;i<e.changedTouches.length;i++)
                    moveChess(e.changedTouches[i])
            }
            function touchend(e){
                e.stopPropagation()
                e.preventDefault()
                removeEventListener('touchmove',touchmove)
                removeEventListener('touchend',touchend)
            }
            function moveChess(event){
                game.moveChess(chessId,board.chessVectorOfSize(
                    Vector.to(div,event).sub(offset),
                    game.size
                ))
            }
        }
    })
    this.on('chessmove',e=>{
        var
            i=e.which,
            chessDiv=divOfChess[i]
        if(div.lastChild!=chessDiv)
            div.appendChild(chessDiv)
        board.chessViewingVectorOfSize(
            this.positionOfChesses[i],
            this.size
        ).style(chessDiv)
    })
    return div
}
})
