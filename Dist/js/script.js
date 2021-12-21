$(document).ready(function(){
    console.log("test")
})

//Hide navbar
$(document).ready(function(){
    $(".button").click(function(){
        $(".navbar").toggleClass("hidden");
        $(".menuItems").toggle();
        $("#arrow").toggleClass("down");
    })
})

//Scroll event


window.addEventListener("scroll", function(){
    //reikia zinoti scroll pozicija
    // console.log(this.scrollY)
    let scrollPos = this.scrollY;
    // 166.39999389648438

    //elemento pozicija
    let text = document.querySelector(".container");
    let textPos = text.getBoundingClientRect().top;

    if(scrollPos>=166.39999389648438){
        text.style.opacity = 1;
    }

});

//scroll to section

$(document).ready(function(){
    $("#toSection2").click(function(){
        $("html, body").animate({
            scrollTop: $("#section2").offset().top
        }, 700);
    })
})


//form control

$(document).ready(function(){
    const data = [];
    $("#submit").click(function(e){
        e.preventDefault();
        let firstName = $("input[name=firstName]").val();
        let email = $("input[name=email]").val();
        console.log(firstName + email)
    })
});