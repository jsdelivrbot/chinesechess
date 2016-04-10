exports.wait()
require([
    'https://cdn.rawgit.com/anliting/Vector/dad78878926d7445f82acba15056e19e379d61ca/Vector',
],(
    Vector
)=>{
exports(Window)
function Window(){
    var window=this
    this.contentDiv=createContentDiv()
    this.div=document.createElement('div')
    this.div.style.position='absolute'
    this.div.style.top='128px'
    this.div.style.left='128px'
    this.div.style.background='white'
    this.div.style.border='1px solid lightgray'
    this.div.style.minWidth='320px'
    this.div.appendChild(createTitlebarDiv())
    this.div.appendChild(this.contentDiv)
    function createTitlebarDiv(){
        var div=document.createElement('div')
        div.style.width='100%'
        div.style.textAlign='right'
        div.appendChild(closeA())
        return div
        function closeA(){
            var a=document.createElement('a')
            a.textContent='X'
            a.onclick=function(){
                window.div.parentNode.removeChild(window.div)
            }
            return a
        }
    }
    function createContentDiv(){
        var div=document.createElement('div')
        return div
    }
}
Window.prototype.appendChild=function(e){
    this.contentDiv.appendChild(e)
}
})
