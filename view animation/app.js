$(document).ready(function(){
    $('html').animate({scrollTop:0}, 1);
    $('body').animate({scrollTop:0}, 1);
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });
    const allAnimatedElements = document.querySelectorAll('.entryShow');

    allAnimatedElements.forEach((element) => observer.observe(element));
});