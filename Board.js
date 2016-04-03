function Board(){
    var board=this
    this.lineWidth=1
    this.blockWidth=64
    this.chessWidth=64
    this.chuHanWidth=48
    this.width=2+8*this.blockWidth+2
    this.height=2+9*this.blockWidth+2
    this.div=document.createElement('div')
    this.div.style.padding=this.chessWidth+'px'
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
            drawHalfBoardAt(2,2)
            context.setTransform(
                -1,0,0,-1,
                2+8*board.blockWidth+2,
                2+9*board.blockWidth+2
            )
            drawHalfBoardAt(2,2)
            context.setTransform(1,0,0,1,0,0)
            context.stroke()
            context.font=board.chuHanWidth+'px sans-serif'
            context.fillText(
                '楚   河',
                2+1*board.blockWidth,
                2+5*board.blockWidth-board.chuHanWidth/3.25
            )
            context.setTransform(
                -1,0,0,-1,
                2+8*board.blockWidth+2,
                2+9*board.blockWidth+2
            )
            context.fillText(
                '漢   界',
                2+1*board.blockWidth,
                2+5*board.blockWidth-board.chuHanWidth/3.25
            )
            context.setTransform(1,0,0,1,0,0)
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
    }
}
