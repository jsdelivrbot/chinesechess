function Window(){
    var window=this
    this.div=document.createElement('div')
    this.div.style.position='absolute'
    this.div.style.top='128px'
    this.div.style.left='128px'
    this.div.style.background='white'
    this.div.style.border='1px solid lightgray'
    this.div.style.minWidth='320px'
    this.div.appendChild(titlebarDiv())
    this.div.appendChild(contentDiv())
    function titlebarDiv(){
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
    function contentDiv(){
        var div=document.createElement('div')
        return div
    }
}
Window.prototype.appendChild=function(){
}
