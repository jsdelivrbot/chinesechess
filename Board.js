function Board(game){
    var board=this
    this.game=game
    this.lineWidth=this.game.lineWidth
    this.blockWidth=this.game.blockWidth
    this.chessWidth=this.game.chessWidth
    this.chuHanWidth=this.game.chuHanWidth
    this.width=10*this.blockWidth
    this.height=11*this.blockWidth
    this.div=document.createElement('div')
    this.div.appendChild(canvas())
    function canvas(){
        var
            canvas=document.createElement('canvas'),
            context=canvas.getContext('2d')
        canvas.width=board.width
        canvas.height=board.height
        draw()
        return canvas
        function draw(){
            context.beginPath()
            drawHalfBoardAt(board.blockWidth,board.blockWidth)
            rotate()
            drawHalfBoardAt(board.blockWidth,board.blockWidth)
            rotate()
            context.stroke()
            context.font=board.chuHanWidth+'px sans-serif'
            context.fillText(
                '楚   河',
                2+2*board.blockWidth,
                2+6*board.blockWidth-board.chuHanWidth/3.25
            )
            rotate()
            context.fillText(
                '漢   界',
                2+2*board.blockWidth,
                2+6*board.blockWidth-board.chuHanWidth/3.25
            )
            rotate()
        }
        function drawHalfBoardAt(x,y){
            for(let i=0;i<5;i++){
                context.moveTo(x,y+i*board.blockWidth)
                context.lineTo(
                    x+8*board.blockWidth,
                    y+i*board.blockWidth
                )
            }
            for(let i=0;i<9;i++){
                context.moveTo(x+i*board.blockWidth,y)
                context.lineTo(
                    x+i*board.blockWidth,
                    y+4*board.blockWidth
                )
            }
            context.moveTo(x+3*board.blockWidth,y)
            context.lineTo(
                x+5*board.blockWidth,
                y+2*board.blockWidth
            )
            context.moveTo(x+5*board.blockWidth,y)
            context.lineTo(
                x+3*board.blockWidth,
                y+2*board.blockWidth
            )
        }
        function rotate(){
            context.transform(
                -1,0,0,-1,
                board.width,
                board.height
            )
        }
    }
}
