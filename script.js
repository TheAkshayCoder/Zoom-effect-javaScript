const container=document.getElementById("container")

const img=document.querySelector("img")

img.addEventListener("mousemove",(event)=>{
    const x=event.clientX-event.target.offsetLeft;
    const y=event.clientY-event.target.offsetTop;
    console.log(x-y)

    img.style.transformOrigin=`${x}px ${y}px`
    img.style.transform="scale(2)"
})

img.addEventListener("mouseleave",()=>{
    img.style.transformOrigin="center center";
    img.style.transform="scale(1)"
})