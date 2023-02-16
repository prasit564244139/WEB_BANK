//กำหนกตัวแปรเลือก ออเจทชื่อ nav-toggle
const navToggoleBtn = document.querySelector('.nav-toggle');
//กำหนกตัวแปรเลือก ออเจทชื่อ test-nav
const navigation = document.querySelector('.test-nav');

// console.log(navToggoleBtn,navigation);
navToggoleBtn.addEventListener('click',() =>{
    const visibility = navigation.getAttribute("data-visible");

    // console.log(visibility)
    if(visibility === 'false'){
        navigation.setAttribute("data-visible","true");
    }else{
        navigation.setAttribute("data-visible","false");
    }
});

window.addEventListener("scroll",function(){
    var header =document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})






