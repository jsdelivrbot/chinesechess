exports(function createDivBySize(size){
    var
        div=document.createElement('div'),
        canvas=canvas()
    if(this.player==1)
        canvas.style.webkitTransform='rotate(180deg)'
    div.appendChild(canvas)
    return div
    function canvas(){
        var
            canvas=document.createElement('canvas'),
            context=canvas.getContext('2d'),
            width=10*size,
            height=11*size
        canvas.width=width
        canvas.height=height
        strokeBoardGrid()
        fillText()
        return canvas
        // level 2
        function strokeBoardGrid(){
            context.beginPath()
            drawHalfBoardAt(size,size)
            rotate()
            drawHalfBoardAt(size,size)
            rotate()
            context.moveTo(size,5*size)
            context.lineTo(size,6*size)
            context.moveTo(9*size,5*size)
            context.lineTo(9*size,6*size)
            context.stroke()
            context.strokeRect(size-4,size-4,4+8*size+4,4+9*size+4)
        }
        function fillText(){
            context.font=`bold ${0.6*size}px kai`
            context.textBaseline='middle'
            context.textAlign='center'
            context.fillText('楚  河',2+3*size,2+5.5*size)
            writeRight('觀棋不語真君子')
            rotate()
            context.fillText('漢  界',2+3*size,2+5.5*size)
            writeRight('起手無回大丈夫')
            rotate()
        }
        // level 1
        function drawHalfBoardAt(x,y){
            for(let i=0;i<5;i++){
                context.moveTo(x,y+i*size)
                context.lineTo(x+8*size,y+i*size)
            }
            for(let i=0;i<9;i++){
                context.moveTo(x+i*size,y)
                context.lineTo(x+i*size,y+4*size)
            }
            context.moveTo(x+3*size,y)
            context.lineTo(x+5*size,y+2*size)
            context.moveTo(x+5*size,y)
            context.lineTo(x+3*size,y+2*size)
            drawRightCrossAt(x+0*size,y+3*size)
            drawCrossAt(x+2*size,y+3*size)
            drawCrossAt(x+4*size,y+3*size)
            drawCrossAt(x+6*size,y+3*size)
            drawLeftCrossAt(x+8*size,y+3*size)
            drawCrossAt(x+1*size,y+2*size)
            drawCrossAt(x+7*size,y+2*size)
        }
        function writeRight(s){
            context.textAlign='center'
            for(let i=0;i<s.length;i++)
                context.fillText(
                    s[i],
                    2+9.5*size,
                    2+(2+i)*size,
                    size
                )
        }
        // level 0
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
            for(let i of a)for(let j of b){
                context.moveTo(x+i*4,y+j*(4+0.2*size))
                context.lineTo(x+i*4,y+j*4)
                context.lineTo(x+i*(4+0.2*size),y+j*4)
            }
        }
        function rotate(){
            context.transform(-1,0,0,-1,width,height)
        }
    }
})
