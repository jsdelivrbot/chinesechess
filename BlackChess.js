function BlackChess(){
    Chess.apply(this,arguments)
}
BlackChess.prototype=Object.create(Chess.prototype)
BlackChess.prototype.colorName='black'
