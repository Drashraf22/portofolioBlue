let menu=document.getElementById("nav-bar");
let bar=document.getElementById("bar");


bar.onclick=function(){
    menu.classList.toggle('active');
    bar.classList.toggle('fa-times');
}
window.onscroll=function(){
    menu.classList.remove('active');
    bar.classList.remove('fa-times');
}

/*========= top btn =========*/
function topUp(){
        let top=document.getElementById("top");
        top.onclick=function(){
            window.scrollTo({
                top:0,
                left:0,
                behavior:"smooth"
            })
        };
    }
    topUp();
/*========= animation =========*/

ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
    });

    ScrollReveal().reveal('.home-info, .main-heading', { origin:'top' });
    ScrollReveal().reveal('.minor-title, .about-img', { origin:'left' });
    ScrollReveal().reveal('.para , .about-info', { origin:'right' });
    ScrollReveal().reveal('.home-img, .ser-box', { origin:'bottom' });

    /*========= typed js =========*/

var typed= new Typed('#multiple-text', {
    strings:['Frontend Developer','Youtuber',  'Ashraf Hendawi'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/*=================== scroll active ==================*/

const sections =document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeigth = current.offsetHeight,
                sectionTop = current.offsetTop- 58,
                sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
                document.querySelector('.nav-bar a[href*='+ sectionId +']').classList.add("active");
            }else{
                document.querySelector('.nav-bar a[href*='+ sectionId +']').classList.remove("active");
            }
    })
}
window.addEventListener('scroll', scrollActive);







