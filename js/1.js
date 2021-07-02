$(function () {
    const nav1 = document.querySelector('nav')
    document.addEventListener('scroll',()=>{
        var scroll_postition = window.scrollY;
        console.log(scroll_postition);
        if(scroll_postition >= 300){
            nav1.style.backgroundColor = "#3a6f94";
            if(scroll_postition >=600){
                //Viet hieu ung hien len khi scroll den
                TweenMax.staggerTo($('.col-lg-3'),1,{top:0,opacity:1},1);
            }
        }else{
            nav1.style.backgroundColor = "#3a6f9400";
        }
    })
    
});