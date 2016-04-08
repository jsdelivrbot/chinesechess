exports.wait()
require([
    'Chess',
    'GameChess',
    'https://cdn.rawgit.com/anliting/Vector/008eefc93dfa768427d26b44c2856b80a02e7c3e/Vector',
],(
    Chess,
    GameChess,
    Vector
)=>{
exports(initGameState)
function initGameState(){
    this.chesses=[
        new GameChess(Chess.black,Chess.soldier,new Vector(0,3)),
        new GameChess(Chess.black,Chess.soldier,new Vector(2,3)),
        new GameChess(Chess.black,Chess.soldier,new Vector(4,3)),
        new GameChess(Chess.black,Chess.soldier,new Vector(6,3)),
        new GameChess(Chess.black,Chess.soldier,new Vector(8,3)),
        new GameChess(Chess.black,Chess.cannon,new Vector(1,2)),
        new GameChess(Chess.black,Chess.cannon,new Vector(7,2)),
        new GameChess(Chess.black,Chess.horse,new Vector(1,0)),
        new GameChess(Chess.black,Chess.horse,new Vector(7,0)),
        new GameChess(Chess.black,Chess.chariot,new Vector(0,0)),
        new GameChess(Chess.black,Chess.chariot,new Vector(8,0)),
        new GameChess(Chess.black,Chess.elephant,new Vector(2,0)),
        new GameChess(Chess.black,Chess.elephant,new Vector(6,0)),
        new GameChess(Chess.black,Chess.advisor,new Vector(3,0)),
        new GameChess(Chess.black,Chess.advisor,new Vector(5,0)),
        new GameChess(Chess.black,Chess.general,new Vector(4,0)),
        new GameChess(Chess.red,Chess.soldier,new Vector(0,6)),
        new GameChess(Chess.red,Chess.soldier,new Vector(2,6)),
        new GameChess(Chess.red,Chess.soldier,new Vector(4,6)),
        new GameChess(Chess.red,Chess.soldier,new Vector(6,6)),
        new GameChess(Chess.red,Chess.soldier,new Vector(8,6)),
        new GameChess(Chess.red,Chess.cannon,new Vector(1,7)),
        new GameChess(Chess.red,Chess.cannon,new Vector(7,7)),
        new GameChess(Chess.red,Chess.horse,new Vector(1,9)),
        new GameChess(Chess.red,Chess.horse,new Vector(7,9)),
        new GameChess(Chess.red,Chess.chariot,new Vector(0,9)),
        new GameChess(Chess.red,Chess.chariot,new Vector(8,9)),
        new GameChess(Chess.red,Chess.elephant,new Vector(2,9)),
        new GameChess(Chess.red,Chess.elephant,new Vector(6,9)),
        new GameChess(Chess.red,Chess.advisor,new Vector(3,9)),
        new GameChess(Chess.red,Chess.advisor,new Vector(5,9)),
        new GameChess(Chess.red,Chess.general,new Vector(4,9)),
    ]
}
})
