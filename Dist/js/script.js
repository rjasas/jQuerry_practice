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
    //duomenu ivedimas
    $("#submit").click(function(e){
        e.preventDefault();
        let firstName = $("input[name=firstName]").val();
        let email = $("input[name=email]").val();
        if(!firstName || !email){
            return alert("Suveskite duomenis");
        }
        // console.log(firstName+", " + email)
        let user = firstName + ", " + email;
        // console.log(user)
        data.push(user);
        $("input[name=firstName]").val("");
        $("input[name=email]").val("");
        // console.log(data)
        $("#list").empty();
        for(let i = 0; i<data.length; i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
       
        // $("#list").append("<li>"+data[data.length-1]+"</li>")
    });
    //duomenu slepimas/rodymas
    $("#clearList").click(function(){
        $("#list").empty();
    });
    $("#showArray").click(function(){
        if(data.length==0){
            alert("Duomenu nera")
        }
        $("#list").empty();
        for(let i = 0; i<data.length; i++){
            $("#list").append("<li>"+data[i]+"</li>");
        }
    })

    //duomenu istrynimas

    $("#clearArray").click(function(){
        alert("Duomenys bus istrinti!")
        data.splice(0, data.length);
        $("#list").empty();
    })
});

//dropdown

$(document).ready(function(){
    $("#menuMain").hover(function(){
        $("#Main").toggleClass("show")
    });
    $("#aboutMenu").hover(function(){
        $("#about").toggleClass("show")
    });
    $("#contactMenu").hover(function(){
        $("#contacts").toggleClass("show")
    });
    $("#formMenu").hover(function(){
        $("#formMe").toggleClass("show")
    });
});


