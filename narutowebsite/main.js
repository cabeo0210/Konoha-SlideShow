let hashirama = document.getElementById("one");
let tobirama = document.getElementById("two");
let hiruzen = document.getElementById("three");
let minato = document.getElementById("four");
let tsunade = document.getElementById("five");
let kakashi = document.getElementById("six");
let naruto = document.getElementById("seven");
let HClicked, TClicked, HiClicked, MClicked, TsuClicked, KClicked, NClicked = false;
let butt = document.getElementsByClassName("back");
let stats = document.getElementsByClassName("stats");
const NoHaShi = [tobirama, hiruzen, minato, tsunade, kakashi, naruto];
const NoTobi = [hashirama, hiruzen, minato, tsunade, kakashi, naruto];
const NoHiru = [tobirama, hashirama, minato, tsunade, kakashi, naruto];
const NoMina = [tobirama, hiruzen,hashirama, tsunade, kakashi, naruto];
const NoTsuna = [tobirama, hiruzen, minato, hashirama, kakashi, naruto];
const NoKakashi = [tobirama, hiruzen, minato, tsunade, hashirama, naruto];
const NoNaru = [tobirama, hiruzen, minato, tsunade, kakashi, hashirama];
const AllKage = [hashirama,tobirama, hiruzen, minato, tsunade, kakashi, naruto];

function reveal() {
    if(HClicked === true){
        NoHaShi.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        hashirama.style.width = "100vw";
        hashirama.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[0].style.visibility = "visible";
    }
    else if(TClicked === true){
        NoTobi.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        tobirama.style.width = "100vw";
        tobirama.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[1].style.visibility = "visible";
    }
    else if(HiClicked === true){
        NoHiru.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        hiruzen.style.width = "100vw";
        hiruzen.style.backgroundSize = "contain";
        hiruzen.style.backgroundPosition = "center";
        butt[0].style.visibility = "visible";
        stats[2].style.visibility = "visible";
    }
    else if(MClicked === true){
        NoMina.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        minato.style.width = "100vw";
        minato.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[3].style.visibility = "visible";
    }
    else if(TsuClicked === true){
        NoTsuna.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        tsunade.style.width = "100vw";
        tsunade.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[4].style.visibility = "visible";
    }
    else if(KClicked === true){
        NoKakashi.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        kakashi.style.width = "100vw";
        kakashi.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[5].style.visibility = "visible";
    }
    else if(NClicked === true){
        NoNaru.forEach(Element => {
            Element.style.width = "0vw";
            Element.style.visibility = "hidden";

        });
        naruto.style.width = "100vw";
        naruto.style.backgroundSize = "contain";
        butt[0].style.visibility = "visible";
        stats[6].style.visibility = "visible";
    }

    HClicked = false;
   TClicked = false;
    HiClicked = false;
    MClicked = false;
    TsuClicked = false;
    KClicked = false;
    NClicked = false;
}

function GoBack() {
    AllKage.forEach(Element => {
        Element.removeAttribute("style");
    });
    Array.from(stats).forEach(Element => {
        Element.style.visibility = "hidden";
    });
    butt[0].style.visibility = "hidden";
}
