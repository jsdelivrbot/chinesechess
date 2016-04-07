exports.wait()
require([
    'Board.prototype.createDivBySize',
    'https://cdn.rawgit.com/anliting/Vector/008eefc93dfa768427d26b44c2856b80a02e7c3e/Vector',
],(
    createDivBySize,
    Vector
)=>{
exports(Board)
function Board(player){
    this.player=player
}
Board.prototype.createDivBySize=
    createDivBySize
Board.prototype.chessViewingVectorOfSize=function(v,size){
    if(this.player==0)
        v=new Vector(
            v.x,
            9-v.y
        )
    else
        v=new Vector(
            8-v.x,
            v.y
        )
    v=v.add(1-0.5).mul(size)
    return v
}
Board.prototype.chessVectorOfSize=function(v,size){
    v=v.div(size).sub(1-0.5)
    if(this.player==0)
        v=new Vector(
            v.x,
            9-v.y
        )
    else
        v=new Vector(
            8-v.x,
            v.y
        )
    return v
}
})
