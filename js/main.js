$(document).ready(function() {
    var e=new ScrollMagic.Controller, o=(new ScrollMagic.Scene( {
        triggerElement: "#main", triggerHook: 0, duration: "130%"
    }
    ).setPin(".serviceHeading", {
        pushFollowers: !1
    }
    ).addTo(e), new ScrollMagic.Scene( {
        triggerElement: "#highlights", triggerHook: 0, duration: "200%"
    }
    ).setPin(".highlightsHeading", {
        pushFollowers: !1
    }
    ).addTo(e), new ScrollMagic.Scene( {
        triggerElement: "#highlights", triggerHook: 0, duration: "10%"
    }
    ).setClassToggle(".highlightsHeading", ".turn-white").setTween(TweenMax.to(".highlightsHeading", 1, {
        y: 70, alpha: .02
    }
    )).addTo(e), new ScrollMagic.Scene( {
        triggerElement: "#main", triggerHook: -.9, duration: "40%"
    }
    ).setClassToggle(".serviceHeading", ".turn-white").setTween(TweenMax.to(".serviceHeading", 1.5, {
        y: 140, alpha: .02, ease: SlowMo.easeIn
    }
    )).addTo(e), new TimelineMax);
    o.staggerFrom(".highlightsCard", .92, {
        y: 200, opacity: 0, ease: SlowMo.easeIn
    }
    , .3), o.play();
    var t=new TimelineMax;
    t.staggerFrom(".card img", 1, {
        y: 230, opacity: 0, ease: SlowMo.easeIn
    }
    , .1), t.play(), 

    new ScrollMagic.Scene( {
        triggerElement: "#main", triggerHook: .6
    }
    ).setTween(t).addTo(e);
    var n=new TimelineMax;
    n.staggerFrom("#aboutUs",.6, {
        x: "-100%", opacity: 0, ease: SlowMo.easeIn
    }
    , .01), n.staggerFrom("#aboutUs div", .3, {
        x: -200, opacity: 0, ease: SlowMo.easeIn
    }
    , .02), n.staggerFrom("#aboutUs p", .5, {
        x: -200, opacity: 0, ease: SlowMo.easeIn
    }
    , .04), n.play(), new ScrollMagic.Scene( {
        triggerElement: "#aboutUs", triggerHook: .6
    }
    ).setTween(n).addTo(e),
    new ScrollMagic.Scene( {
        triggerElement: "#intro", triggerHook: 0, duration: "20%"
    }
    ).setTween(TweenMax.to(".toggle-btn", 1, {css:{
        backgroundColor:"#FF9070"
    } ,ease: SlowMo.easeIn
}
)).addTo(e), new ScrollMagic.Scene({
        triggerElement:"#intro",triggerHook:0 ,duration:"20%"
    }).setTween(TweenMax.to(".toggle-btn i",1,{css:{
        color:"#fff"},ease:SlowMo.easeIn})
    ).addTo(e), 

    new ScrollMagic.Scene( {
        triggerElement: "#aboutUs", triggerHook: .1, duration:"20%"
    }
    ).setTween(TweenMax.to(".toggle-btn", 1, {css:{
        backgroundColor:"#fff"
    } ,ease: SlowMo.easeIn
}
)).addTo(e), new ScrollMagic.Scene({
        triggerElement:"#aboutUs",triggerHook:.1,duration:"20%"
    }).setTween(TweenMax.to(".toggle-btn i",1,{css:{
        color:"#FF9070"},ease:SlowMo.easeIn})
    ).addTo(e),

    new ScrollMagic.Scene( {
        triggerElement: ".beforeHl", triggerHook: .2, duration:"20%"
    }
    ).setTween(TweenMax.to(".toggle-btn", 1, {css:{
        backgroundColor:"#FF9070"
    } ,ease: SlowMo.easeIn
}
)).addTo(e), new ScrollMagic.Scene({
        triggerElement:".beforeHl",triggerHook:.2,duration:"20%"
    }).setTween(TweenMax.to(".toggle-btn i",1,{css:{
        color:"#fff"},ease:SlowMo.easeIn})
    ).addTo(e)
    , new ScrollMagic.Scene({
        triggerElement:"#intro",triggerHook:0,duration:"20%"
    }).setTween(TweenMax.to(".arrow-btn i",1,{css:{
        color:"#FF9070"},ease:SlowMo.easeIn})
    ).addTo(e), new ScrollMagic.Scene({
        triggerElement:"#aboutUs",triggerHook:.2,duration:"20%"
    }).setTween(TweenMax.to(".arrow-btn i",1,{css:{
        color:"#fff"},ease:SlowMo.easeIn})
    ).addTo(e), new ScrollMagic.Scene({
        triggerElement:".beforeHl",triggerHook:.2,duration:"20%"
    }).setTween(TweenMax.to(".arrow-btn i",1,{css:{
        color:"#FF9070"},ease:SlowMo.easeIn})
    ).addTo(e), new ScrollMagic.Scene( {
        triggerElement: "#intro", triggerHook: 0, duration: "20%"
    }
    ).setTween(TweenMax.to(".arrow-btn", 1, {css:{
        borderColor:"#FF9070",backgroundColor:"#fff"
    } ,ease: SlowMo.easeIn
}
)).addTo(e), 

    new ScrollMagic.Scene( {
        triggerElement: "#aboutUs", triggerHook: .2, duration:"20%"
    }
    ).setTween(TweenMax.to(".arrow-btn", 1, {css:{
        borderColor:"#fff",backgroundColor:"#FF9070"
    } ,ease: SlowMo.easeIn
}
)).addTo(e),new ScrollMagic.Scene( {
        triggerElement: ".beforeHl", triggerHook: .2, duration:"20%"
    }
    ).setTween(TweenMax.to(".arrow-btn", 1, {css:{
        borderColor:"#FF9070",backgroundColor:"#fff"
    } ,ease: SlowMo.easeIn
}
)).addTo(e);


}
);

const elem = document.querySelector('#intro')
const duration = window.innerHeight

let scrollTarget = 0
let scrollCurrent = 0

const ease = 0.15

const tl = new TimelineLite()
tl.fromTo(elem, 1, { alpha: 1, scale: 1, yPercent: 0 }, { alpha: 0, scale: 0.5, yPercent: 50 })

window.addEventListener('scroll', () => {
    scrollTarget = window.scrollY
})

function normalize(val, max, min) { 
  return (val - min) / (max - min) 
}

function render() {
  scrollCurrent += (scrollTarget - scrollCurrent) * ease
  
    const progress = normalize(scrollCurrent, duration, 0)
    tl.progress(progress)

    requestAnimationFrame(render)

}

requestAnimationFrame(render);


lctl= new TimelineMax;
lctl.to(".data", .5, {
    css: {
        left: "0"
    }
    , ease:SlowMo.easeIn,delay:-1
}

),
lctl.reverse();
$(document).on("click", "#lctl", ()=> {
    lctl.reversed(!lctl.reversed())

});

//chat button

var h=Math.floor(.01*window.innerHeight),
w=Math.floor(.1*window.innerWidth),

menubgtl= new TimelineMax;
menubgtl.to(".menubg", 1.2, {
    css: {
        scale: "500%", opacity: 1,display:"block", top: "0%", right: "0%", borderRadius:0, backgroundColor: "#fff"
    }
    , ease:Expo.easeInOut, delay:-1
}),menubgtl.to(".data", .5, {
    css: {
        left: "0"
    }
    , ease:SlowMo.easeIn,delay:-1
}

),
menubgtl.reverse();

navtl=new TimelineMax;
navtl.to(".menubg", .4, {
    opacity: 1
})
navtl.reverse();


var bodytl = new TimelineMax();
bodytl.to("body", .5, {
    css: {
        overflow: "hidden"
    }
    , ease:SlowMo.easeIn})
bodytl.reverse();

$(document).on("click", ".closebtn", ()=> {
navtl.reverse();
menubgtl.reverse();
bodytl.reverse();
lctl.reverse();

});
$(document).on("click", ".toggle-btn", ()=> {
    navtl.reversed(!navtl.reversed()),
    menubgtl.reversed(!menubgtl.reversed()),
    bodytl.reversed(!bodytl.reversed())


});


$(document).ready(function() {
    var cbController=new ScrollMagic.Controller;

    var tlcb=new TimelineMax;
    tlcb.staggerFromTo(".colorBlock", 1.0, {
        y: "-550%", opacity: 1, ease: SlowMo.easeIn
    },{
        y: "100%", opacity: 1, ease: SlowMo.easeIn
    },.5) 
    tlcb.play();

    var imgScene = new ScrollMagic.Scene( {
        triggerElement: "#highlights", triggerHook: 0.9
    }
    ).setTween(tlcb)
    .addTo(cbController);
});

$(document).ready(function() {
    var cbController=new ScrollMagic.Controller;

    var tlimg=new TimelineMax;
    tlimg.staggerFrom(".highlightsCard .imgcard",1.0, {
        y: "-650%", opacity: 1, ease: SlowMo.easeIn
    },.5) 
    tlimg.play();
    var cbScene = new ScrollMagic.Scene( {
        triggerElement: "#highlights", triggerHook: 0.9
    }
    // ).setTween(TweenMax.from(".colorBlock",1,{y:-400,opacity:0,ease:SlowMo.easeIn},.01))
    ).setTween(tlimg)
    .addTo(cbController);

    var mctl=new TimelineMax;
    mctl.staggerFrom(".miniContact",1.0, {
        y: 750, opacity: 1, ease: SlowMo.easeIn
    },.5) 
    mctl.play();
    var cbScene = new ScrollMagic.Scene( {
        triggerElement: "#highlights", triggerHook: 0.9
    }
    // ).setTween(TweenMax.from(".colorBlock",1,{y:-400,opacity:0,ease:SlowMo.easeIn},.01))
    ).setTween(mctl)
    .addTo(cbController);
});






let links= document.querySelectorAll(".aLinks")
let arr = Array.apply(null, links);
let goingtop = document.querySelector("#top");

var cl = 0;
    function myFunction() {
            if (cl == 0){
                
                zenscroll.intoView(arr[cl]);
                    // arr[cl].scrollIntoView();
                    console.log(arr[cl])
                console.log(cl)
            }
            if (cl == 1) {
zenscroll.intoView(arr[cl]);
                    // arr[cl].scrollIntoView();
                console.log(cl)
            }
            if (cl == 2) {
zenscroll.intoView(arr[cl]);
                    // arr[cl].scrollIntoView();
                console.log(cl)
            }
            if (cl == 3) {
zenscroll.intoView(arr[cl]);
                // arr[cl].scrollIntoView();
                console.log(cl)
            }
            cl++;

            if (cl == 4) {
                cl =0;
            } 
        }

        function toTop(){
zenscroll.intoView(goingtop);

        }
