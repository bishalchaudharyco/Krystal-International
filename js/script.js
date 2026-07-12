// =====================================
// KRYSTAL INTERNATIONAL WEBSITE SCRIPT
// =====================================


console.log(
    "Krystal International Website Loaded"
);





// =====================================
// MOBILE MENU
// =====================================


const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector("#navbar");



if(menuBtn && navbar){


    menuBtn.addEventListener(
        "click",
        ()=>{


            navbar.classList.toggle("active");


            menuBtn.classList.toggle("open");


            if(menuBtn.classList.contains("open")){


                menuBtn.innerHTML = "✕";


            }

            else{


                menuBtn.innerHTML = "☰";


            }


        }
    );


}







// =====================================
// CLOSE MENU AFTER CLICK
// =====================================


const navLinks = document.querySelectorAll(
    "#navbar a"
);



navLinks.forEach(
    link=>{


        link.addEventListener(
            "click",
            ()=>{


                if(navbar){


                    navbar.classList.remove(
                        "active"
                    );


                }


                if(menuBtn){


                    menuBtn.classList.remove(
                        "open"
                    );


                    menuBtn.innerHTML="☰";


                }


            }
        );


    }
);









// =====================================
// CLOSE MENU WHEN CLICK OUTSIDE
// =====================================


document.addEventListener(
"click",
(e)=>{


if(
navbar &&
menuBtn &&
!navbar.contains(e.target) &&
!menuBtn.contains(e.target)

){


navbar.classList.remove(
"active"
);


menuBtn.classList.remove(
"open"
);


menuBtn.innerHTML="☰";


}



});









// =====================================
// CLOSE MENU ON WINDOW RESIZE
// =====================================


window.addEventListener(
"resize",
()=>{


if(window.innerWidth > 768){


if(navbar){


navbar.classList.remove(
"active"
);


}



}


});









// =====================================
// HEADER SCROLL EFFECT
// =====================================


const header =
document.querySelector(
".header"
);



window.addEventListener(
"scroll",
()=>{


if(!header)
return;



if(window.scrollY > 50){


header.classList.add(
"scrolled"
);


}

else{


header.classList.remove(
"scrolled"
);


}


});









// =====================================
// AUTO COPYRIGHT YEAR
// =====================================


const year =
new Date().getFullYear();



const copyright =
document.querySelector(
".copyright"
);



if(copyright){


copyright.innerHTML =

`© ${year} Krystal International All Rights Reserved.`;



}









// =====================================
// SMOOTH SCROLL
// =====================================


document.querySelectorAll(
'a[href^="#"]'
)

.forEach(
anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();



target.scrollIntoView({

behavior:"smooth",

block:"start"

});


}



});


});









// =====================================
// IMAGE LOADING ANIMATION
// =====================================


const images =
document.querySelectorAll(
"img"
);



images.forEach(
img=>{


if(img.complete){


img.classList.add(
"loaded"
);


}


else{


img.addEventListener(
"load",
()=>{


img.classList.add(
"loaded"
);


});


}



});









// =====================================
// CONTACT FORM VALIDATION
// =====================================


const contactForm =
document.querySelector(
".contact-form form"
);



if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


const inputs =
contactForm.querySelectorAll(
"input, textarea"
);



let valid=true;



inputs.forEach(
input=>{


if(
input.hasAttribute("required")
&&
input.value.trim()===""
){


valid=false;


}


});




if(!valid){


e.preventDefault();


alert(
"必須項目を入力してください。"
);


}



});


}








// =====================================
// PAGE LOAD ANIMATION
// =====================================


window.addEventListener(
"load",
()=>{


document.body.classList.add(
"loaded"
);


});