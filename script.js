window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {




    if (window.matchMedia("(max-width: 576px)").matches) {
        console.log("hello");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            console.log("hello again");
            document.getElementById("navbar").style.padding = "8px 24px";
            document.getElementById("logo").style.maxWidth = "180px";
        } else {
            document.getElementById("navbar").style.padding = "36px 24px";
            document.getElementById("logo").style.maxWidth = "200px";
        }
    }


    if (window.matchMedia("(min-width: 577px)").matches) {
        console.log("hello");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            console.log("hello again");
            document.getElementById("navbar").style.padding = "8px 24px";
            document.getElementById("logo").style.maxWidth = "320px";
        } else {
            document.getElementById("navbar").style.padding = "60px 24px";
            document.getElementById("logo").style.maxWidth = "400px";
        }
    }


    if (window.matchMedia("(max-height: 600px)").matches) {
        console.log("hello");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            console.log("hello again");
            document.getElementById("navbar").style.padding = "8px 24px";
            document.getElementById("logo").style.maxWidth = "180px";
        } else {
            document.getElementById("navbar").style.padding = "36px 24px";
            document.getElementById("logo").style.maxWidth = "200px";
        }
    }

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("mainInfo").style.opacity = "0";
    } else {
        document.getElementById("mainInfo").style.opacity = "1";
    }

    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.getElementById("firstHalf").style.opacity = "0";
    } else {
        document.getElementById("firstHalf").style.opacity = "1";
    }

    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        document.getElementById("secondHalf").style.opacity = "0";
    } else {
        document.getElementById("secondHalf").style.opacity = "1";
    }


}