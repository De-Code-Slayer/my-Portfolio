function signOnFunction() {
    document.getElementById("dropSign").classList.toggle("show");    
}

function appendSignOn() {
    if(window.matchMedia("(max-width: 850px)").matches) {
        $("#dropDiv").appendTo("#navbar");
        $(document).ready(function() {
            $(".nav-seg").css({
                'width': ($(".navbar").width() + 'px')
            });
        });
    }
}
appendSignOn();

$('.dropbtn').click(function() {
    $(this).toggleClass('active');
});

function changeSignOn() {
    if (document.getElementById("signOnButton").innerHTML == "Sign On") {
        document.getElementById("signOnButton").innerHTML = "Close";
    } else if (document.getElementById("signOnButton").innerHTML == "Close") {
        document.getElementById("signOnButton").innerHTML = "Sign On"
    }
}
function changeMenu(x) {
    x.classList.toggle("change");
}

// var mBtn = document.getElementByClassName("");

var kBtn = document.getElementsByClassName("kservices");
for (var i = 0; i < kBtn.length; i++) {
    kBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });    
}
