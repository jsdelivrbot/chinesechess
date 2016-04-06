function Board(game){
    var board=this
    this.lineWidth=game.lineWidth
    this.blockWidth=game.blockWidth
    this.chessWidth=game.chessWidth
    this.chuHanWidth=game.chuHanWidth
    this.width=10*this.blockWidth
    this.height=11*this.blockWidth
}
Board.prototype.createDiv=function(player){
    var
        board=this,
        div=document.createElement('div')
    div.appendChild(canvas())
    if(player==1)
        div.style.webkitTransform='rotate(180deg)'
    return div
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
            context.moveTo(board.blockWidth,5*board.blockWidth)
            context.lineTo(board.blockWidth,6*board.blockWidth)
            context.moveTo(9*board.blockWidth,5*board.blockWidth)
            context.lineTo(9*board.blockWidth,6*board.blockWidth)
            context.stroke()
            context.font=`bold ${0.6*board.blockWidth}px kai`
            context.textBaseline='middle'
            context.fillText(
                '楚  河',
                2+2*board.blockWidth,
                2+5.5*board.blockWidth
            )
            rotate()
            context.fillText(
                '漢  界',
                2+2*board.blockWidth,
                2+5.5*board.blockWidth
            )
            rotate()
            context.font=`bold ${0.6*board.blockWidth}px kai`
            writeRight('觀棋不語真君子')
            rotate()
            writeRight('起手無回大丈夫')
            rotate()
            context.strokeRect(
                board.blockWidth-4,
                board.blockWidth-4,
                8*board.blockWidth+8,
                9*board.blockWidth+8
            )
        }
        function writeRight(s){
            context.textAlign='center'
            for(let i=0;i<s.length;i++)
                context.fillText(
                    s[i],
                    2+9.5*board.blockWidth,
                    2+(2+i)*board.blockWidth,
                    board.blockWidth
                )
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
            drawRightCrossAt(x+0*board.blockWidth,y+3*board.blockWidth)
            drawCrossAt(x+2*board.blockWidth,y+3*board.blockWidth)
            drawCrossAt(x+4*board.blockWidth,y+3*board.blockWidth)
            drawCrossAt(x+6*board.blockWidth,y+3*board.blockWidth)
            drawLeftCrossAt(x+8*board.blockWidth,y+3*board.blockWidth)
            drawCrossAt(x+1*board.blockWidth,y+2*board.blockWidth)
            drawCrossAt(x+7*board.blockWidth,y+2*board.blockWidth)
        }
        function drawCrossAt(x,y){
            drawCrossAtBy(x,y,[-1,1],[-1,1])
        }
        function drawLeftCrossAt(x,y){
            drawCrossAtBy(x,y,[-1],[-1,1])
        }
        function drawRightCrossAt(x,y){
            drawCrossAtBy(x,y,[1],[-1,1])
        }
        function drawCrossAtBy(x,y,a,b){
            for(let i of a)
                for(let j of b){
                    context.moveTo(
                        x+i*4,
                        y+j*(4+0.2*board.blockWidth)
                    )
                    context.lineTo(
                        x+i*4,
                        y+j*4
                    )
                    context.lineTo(
                        x+i*(4+0.2*board.blockWidth),
                        y+j*4
                    )
                }
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
