// fixed nav started
window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if(scrollY > 10) {
        nav.classList.add("active")
    } else{
        nav.classList.remove("active")
    }
});
// fixed nav finished


// active link started
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(i => {
        const sectionHeight = i.offsetHeight;
        const sectionTop = i.offsetTop - 150;

        let sectionId = i.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector("nav ul li a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navbar a[href*=" + sectionId + "]").classList.remove("active");
        }

    });
}
window.addEventListener("scroll", scrollActive);
// active link finished


// toggle nav started 
$(".bars").click(() => {
    $("nav .navbar > ul").addClass("active");
});

$(".close").click(() => {
    $("nav .navbar > ul").removeClass("active");
})
// toggle nav finished