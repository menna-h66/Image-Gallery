
let container = document.querySelector('.container');
let slideImg = document.querySelectorAll('.slide');
let pre = document.querySelector('.pre');
let next = document.querySelector('.next');
let dot = document.querySelectorAll('.dots li');
let dots = document.querySelector('.dots');
let index = 0; 
let selfMove;


function showSlide(){

       let check = slideImg[index].offsetLeft;
       container.style.left = -check + 'px';
       container.style.transition= '1s';
       
;
       slideImg.forEach((slide, i) => {
        if (i === index +1) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });


       let ActiveDot = document.querySelector(".dots li.active")
       ActiveDot.classList.remove("active")
       dot[index].classList.add("active")
}



next.addEventListener("click", function(){
        if(index + 1 > slideImg.length - 1){
                index = 0
        }else{
                index += 1
        }
        showSlide()
})


pre.addEventListener("click", function(){
        if(index < 0 ){
                index = slideImg.length
        }else{
                index -= 1
        }
        showSlide()
})

dot.forEach((li , i) =>{
      li.addEventListener('click' , function(){
        index = i
        showSlide()
      })
})


slideImg.forEach((img , i)=>{
        img.addEventListener('click', function(){
                index = i -1
                showSlide()
        })
})

slideImg.forEach((img , i)=>{
        img.addEventListener('touchstart', function(){
                index = i -1
                showSlide()
        })
})


function setSlideInterval(){
        selfMove = setInterval(() => {
                next.click()
        }, 3000);
}

function stopSlideInterval(){
        clearInterval(selfMove)
}

container.addEventListener("mouseover" , stopSlideInterval)
container.addEventListener("mouseout" , setSlideInterval)

window.onload = () =>{
        setSlideInterval()
}