exports.wait()
require([
    'https://cdn.rawgit.com/anliting/require/068921387c07a17e36248c3823fec24c05d667f2/node/events',
],(
    events
)=>{
exports(Chess)
var textOfColorType=[
    '卒包馬車象士將',
    '兵炮傌俥相仕帥',
]
function Chess(color,type){
    events.call(this)
    this.color=color
    this.type=type
}
Chess.prototype=Object.create(events.prototype)
Chess.prototype.createDivBySize=function(size){
    var
        chess=this,
        div=document.createElement('div')
    div.className='chess'
    div.style.color=this.color==0?'black':'red'
    div.style.fontSize=0.5*Math.sqrt(2)*size+'px'
    div.appendChild(canvas())
    return div
    function canvas(){
        var
            canvas=document.createElement('canvas'),
            context=canvas.getContext('2d'),
            width=size
        canvas.width=width
        canvas.height=width
        // start draw background
        context.beginPath()
        context.fillStyle='white'
        context.arc(width/2,width/2,size/2-1,0,2*Math.PI)
        context.fill()
        // end draw background
        // start draw border
        context.fillStyle=chess.color==0?'black':'red'
        context.strokeStyle=chess.color==0?'black':'red'
        // start draw outer border
        context.lineWidth=2
        context.beginPath()
        context.arc(width/2,width/2,size/2-1,0,2*Math.PI)
        context.stroke()
        // end draw outer border
        // start draw inner border
        context.lineWidth=1
        context.beginPath()
        context.arc(width/2,width/2,size/2-4-1,0,2*Math.PI)
        context.stroke()
        // end draw inner border
        // end draw border
        context.beginPath()
        context.font=`bold ${width/1.6}px kai`
        context.textAlign='center'
        context.textBaseline='middle'
        context.fillText(
            textOfColorType[chess.color][chess.type],
            width/2,
            width/2,
            width
        )
        return canvas
    }
}
Chess.black=0
Chess.red=1
Chess.soldier=0
Chess.cannon=1
Chess.horse=2
Chess.chariot=3
Chess.elephant=4
Chess.advisor=5
Chess.general=6
})
