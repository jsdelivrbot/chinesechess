function Game(){
    this.board=new Board
    this.div=document.createElement('div')
    this.div.style.position='relative'
    this.div.appendChild(this.board.div)
    this.chessWidth=48
    this.chesses=[
        new Chess(this,0,0),
        new Chess(this,0,0),
        new Chess(this,0,0),
        new Chess(this,0,0),
        new Chess(this,0,0),
        new Chess(this,0,1),
        new Chess(this,0,1),
        new Chess(this,0,2),
        new Chess(this,0,2),
        new Chess(this,0,3),
        new Chess(this,0,3),
        new Chess(this,0,4),
        new Chess(this,0,4),
        new Chess(this,0,5),
        new Chess(this,0,5),
        new Chess(this,0,6),
        new Chess(this,1,0),
        new Chess(this,1,0),
        new Chess(this,1,0),
        new Chess(this,1,0),
        new Chess(this,1,0),
        new Chess(this,1,1),
        new Chess(this,1,1),
        new Chess(this,1,2),
        new Chess(this,1,2),
        new Chess(this,1,3),
        new Chess(this,1,3),
        new Chess(this,1,4),
        new Chess(this,1,4),
        new Chess(this,1,5),
        new Chess(this,1,5),
        new Chess(this,1,6),
    ]
    this.chesses.forEach(chess=>{
        var
            div=chess.createDivBySize(this.chessWidth)
        div.style.position='absolute'
        div.style.top=0
        this.div.appendChild(div)
    })
}
