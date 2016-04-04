exports.wait()
require([
    'Board',
    'Chess',
    'https://cdn.rawgit.com/anliting/Vector/fbf1661b2e5724eea40359a11197a873d918d3ae/Vector',
],(
    Board,
    Chess,
    Vector
)=>{
exports(Game)
function Game(){
    this.lineWidth=1
    this.blockWidth=48
    this.chessWidth=this.blockWidth
    this.board=new Board(this)
    this.chesses=[
        new Chess(this,Chess.black,Chess.soldier),
        new Chess(this,Chess.black,Chess.soldier),
        new Chess(this,Chess.black,Chess.soldier),
        new Chess(this,Chess.black,Chess.soldier),
        new Chess(this,Chess.black,Chess.soldier),
        new Chess(this,Chess.black,Chess.cannon),
        new Chess(this,Chess.black,Chess.cannon),
        new Chess(this,Chess.black,Chess.horse),
        new Chess(this,Chess.black,Chess.horse),
        new Chess(this,Chess.black,Chess.chariot),
        new Chess(this,Chess.black,Chess.chariot),
        new Chess(this,Chess.black,Chess.elephant),
        new Chess(this,Chess.black,Chess.elephant),
        new Chess(this,Chess.black,Chess.advisor),
        new Chess(this,Chess.black,Chess.advisor),
        new Chess(this,Chess.black,Chess.general),
        new Chess(this,Chess.red,Chess.soldier),
        new Chess(this,Chess.red,Chess.soldier),
        new Chess(this,Chess.red,Chess.soldier),
        new Chess(this,Chess.red,Chess.soldier),
        new Chess(this,Chess.red,Chess.soldier),
        new Chess(this,Chess.red,Chess.cannon),
        new Chess(this,Chess.red,Chess.cannon),
        new Chess(this,Chess.red,Chess.horse),
        new Chess(this,Chess.red,Chess.horse),
        new Chess(this,Chess.red,Chess.chariot),
        new Chess(this,Chess.red,Chess.chariot),
        new Chess(this,Chess.red,Chess.elephant),
        new Chess(this,Chess.red,Chess.elephant),
        new Chess(this,Chess.red,Chess.advisor),
        new Chess(this,Chess.red,Chess.advisor),
        new Chess(this,Chess.red,Chess.general),
    ]
    this.positionOfChesses=[
        new Vector(0,3),
        new Vector(2,3),
        new Vector(4,3),
        new Vector(6,3),
        new Vector(8,3),
        new Vector(1,2),
        new Vector(7,2),
        new Vector(1,0),
        new Vector(7,0),
        new Vector(0,0),
        new Vector(8,0),
        new Vector(2,0),
        new Vector(6,0),
        new Vector(3,0),
        new Vector(5,0),
        new Vector(4,0),
        new Vector(0,6),
        new Vector(2,6),
        new Vector(4,6),
        new Vector(6,6),
        new Vector(8,6),
        new Vector(1,7),
        new Vector(7,7),
        new Vector(1,9),
        new Vector(7,9),
        new Vector(0,9),
        new Vector(8,9),
        new Vector(2,9),
        new Vector(6,9),
        new Vector(3,9),
        new Vector(5,9),
        new Vector(4,9),
    ]
}
Game.prototype.createDiv=function(){
    div=document.createElement('div')
    div.style.position='relative'
    div.appendChild(this.board.div)
    this.chesses.forEach((chess,i)=>{
        var
            chessDiv=chess.createDivBySize(this.chessWidth)
        chessDiv.style.position='absolute'
        chessDiv.style.left=
            this.blockWidth*(1+(8-this.positionOfChesses[i].x)-0.5)+'px'
        chessDiv.style.top=
            this.blockWidth*(1+(9-this.positionOfChesses[i].y)-0.5)+'px'
        if(16<=i)
            chessDiv.style.WebkitTransform='rotate(180deg)'
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
                div.appendChild(chessDiv)
                offset=Vector.to(chessDiv,e)
                addEventListener('mousemove',mousemove)
                addEventListener('mouseup',mouseup)
            }
            function mousemove(e){
                Vector.to(div,e).sub(offset).style(chessDiv)
            }
            function mouseup(){
                removeEventListener('mousemove',mousemove)
                removeEventListener('mouseup',mouseup)
            }
        }
    })
    return div
}
})
