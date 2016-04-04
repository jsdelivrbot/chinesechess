exports.wait()
require([
    'Board',
    'Chess',
    'Vector',
],(
    Board,
    Chess,
    Vector
)=>{
exports(Game)
function Game(){
    this.lineWidth=1
    this.blockWidth=64
    this.chessWidth=64
    this.chuHanWidth=48
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
    this.div=document.createElement('div')
    this.div.style.position='relative'
    this.div.appendChild(this.board.div)
    this.chesses.forEach((chess,i)=>{
        var
            div=chess.createDivBySize(this.chessWidth)
        div.style.position='absolute'
        if(this.positionOfChesses[i]){
            console.log(this.positionOfChesses[i])
            div.style.top=
                this.blockWidth*(1+(9-this.positionOfChesses[i].y)-0.5)+'px'
            div.style.left=
                this.blockWidth*(1+(8-this.positionOfChesses[i].x)-0.5)+'px'
        }
        this.div.appendChild(div)
    })
}
})
