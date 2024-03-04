var elements=document.getElementsByClassName("fadeIn");
for(let i=0;i<elements.length;i++){
    var observer=new IntersectionObserver(function(entries){
        if(entries[0].intersectionRatio==0)return;
        elements[i].classList.add("fadeInDo");
    });
    observer.observe(elements[i]);
}
var elementsZoom=document.getElementsByClassName("zoom");
for(let i=0;i<elementsZoom.length;i++){
    var observer=new IntersectionObserver(function(entries){
        if(entries[0].intersectionRatio==0)return;
        elementsZoom[i].classList.add("zoomDo");
    });
    observer.observe(elementsZoom[i]);
}