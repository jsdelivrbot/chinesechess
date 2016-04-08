exports.wait()
require('Chess',Chess=>{
exports(GameChess)
function GameChess(color,type,position){
    Chess.call(this,color,type)
    this._position=position
}
GameChess.prototype=Object.create(Chess.prototype)
Object.defineProperty(GameChess.prototype,'position',{
    set(position){
        this._position=position
        this.emit('move')
    },
    get(){
        return this._position
    }
})
GameChess.prototype.createDivBySize=function(size){
    var div=Chess.prototype.createDivBySize.call(this,size)
    return div
}
})
