function Game(){
    this.board=new Board
    this.div=document.createElement('div')
    this.div.appendChild(this.board.div)
    this.chessWidth=48
    this.chesses=[
        new BlackSoldier(this),
        new BlackSoldier(this),
        new BlackSoldier(this),
        new BlackSoldier(this),
        new BlackSoldier(this),
        new BlackCannon(this),
        new BlackCannon(this),
        new BlackHorse(this),
        new BlackHorse(this),
        new BlackChariot(this),
        new BlackChariot(this),
        new BlackElephant(this),
        new BlackElephant(this),
        new BlackAdvisor(this),
        new BlackAdvisor(this),
        new BlackGeneral(this),
    ]
    this.chesses.forEach(chess=>{
        this.div.appendChild(chess.div)
    })
}
