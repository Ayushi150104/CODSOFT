const btn=document.getElementById('btn');
const cancel=document.getElementById('cancel');
let slide=document.querySelector('.slide');
let skills = document.querySelector('.skills');
let sb = document.getElementById('skill')

slide.style.display="none";

function unhide(){
    slide.classList.remove('slideh')
    slide.classList.add('slideuh');
    setTimeout(()=>{
        slide.style.display="block"
    },300)
    btn.style.display = "hidden"
}

function hide(){
    slide.classList.remove('slideuh')
    slide.classList.add('slideh');
    setTimeout(()=>{
        slide.style.display="none"
    },300)
    btn.style.display="block"
}

btn.addEventListener('click', ()=>{
    unhide()
});

cancel.addEventListener('click', ()=>{
    hide()
})

function down(){
    window.scrollBy({
        top: 850,
        left: 0,
        behavior: "smooth"
    })
}

sb.addEventListener('click',()=>{
    down()
})
