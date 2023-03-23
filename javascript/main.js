var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "w":
           
            var tom1 = new Audio("https://od.lk/s/ODBfNDIzMDI0Mzdf/tom-1.mp4");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("https://od.lk/s/ODBfNDIzMDI0Mzhf/tom-2.mp4");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('https://od.lk/s/ODBfNDIzMDI0Mzlf/tom-3.mp4');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("https://od.lk/s/ODBfNDIzMDI0NDBf/tom-4.mp4");
            tom4.play();
            break;

        case "j":
            var snare = new Audio('https://od.lk/s/ODBfNDIzMDI0MzZf/snare.mp4');
            snare.play();
            break;

        case "k":
            var crash = new Audio('https://od.lk/s/ODBfNDIzMDI0MzRf/crash.mp4');
            crash.play();
            break;

        case "l":
            var kick = new Audio("https://od.lk/s/ODBfNDIzMDI0MzVf/kick-bass.mp4");
            kick.play();
            break;


        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}