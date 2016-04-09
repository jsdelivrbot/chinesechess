exports.wait()
require([
    'Game.prototype.initGameState',
    'Board',
    'Window',
    'https://cdn.rawgit.com/anliting/Vector/dad78878926d7445f82acba15056e19e379d61ca/Vector',
    'https://cdn.rawgit.com/anliting/require/068921387c07a17e36248c3823fec24c05d667f2/node/events',
],(
    initGameState,
    Board,
    Window,
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
    this.useHelper=true
}
Game.prototype=Object.create(events.prototype)
Object.defineProperty(Game.prototype,'initGameState',{
    get:initGameState
})
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
            this.chesses[i].position,
            this.size
        ).style(chessDiv)
        if(player==0?16<=i:i<16)
            chessDiv.style.webkitTransform='rotate(180deg)'
        setupDrag()
        div.appendChild(chessDiv)
        function setupDrag(){
            var offset
            chessDiv.addEventListener('mousedown',mousedown)
            chessDiv.addEventListener('touchstart',touchstart)
            function mousedown(e){
                if(e.which!=1||game.size/2<Vector.page(e).to(
                    Vector.page(chessDiv).add(new Vector(game.size/2))
                ).abs)
                    return
                e.stopPropagation()
                e.preventDefault()
                if(div.lastChild!=chessDiv)
                    div.appendChild(chessDiv)
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
                if(game.useHelper)
                    chess.position=new Vector(
                        Math.round(chess.position.x),
                        Math.round(chess.position.y)
                    )
                removeEventListener('mousemove',mousemove)
                removeEventListener('mouseup',mouseup)
            }
            function touchstart(e){
                let touch=e.changedTouches[0]
                if(game.size/2<Vector.page(touch).to(
                    Vector.page(chessDiv).add(new Vector(game.size/2))
                ).abs)
                    return
                e.stopPropagation()
                e.preventDefault()
                offset=Vector.to(chessDiv,touch)
                addEventListener('touchmove',touchmove)
                addEventListener('touchend',touchend)
            }
            function touchmove(e){
                e.stopPropagation()
                e.preventDefault()
                moveChess(e.changedTouches[0])
            }
            function touchend(e){
                e.stopPropagation()
                e.preventDefault()
                if(game.useHelper)
                    chess.position=new Vector(
                        Math.round(chess.position.x),
                        Math.round(chess.position.y)
                    )
                removeEventListener('touchmove',touchmove)
                removeEventListener('touchend',touchend)
            }
            function moveChess(event){
                chess.position=board.chessVectorOfSize(
                    Vector.to(div,event).sub(offset),
                    game.size
                )
            }
        }
        chess.on('move',()=>{
            if(div.lastChild!=chessDiv)
                div.appendChild(chessDiv)
            board.chessViewingVectorOfSize(
                chess.position,
                game.size
            ).style(chessDiv)
        })
    })
    return div
}
Game.prototype.createSettingsA=function(player){
    var a=document.createElement('a')
    a.href='javascript:'
    a.textContent='Settings'
    a.onclick=()=>{
        var window=new Window
        document.body.appendChild(window.div)
    }
    return a
}
})
