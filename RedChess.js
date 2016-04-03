function RedChess(){
    Chess.apply(this,arguments)
}
RedChess.prototype=Object.create(Chess.prototype)
RedChess.prototype.colorName='red'
