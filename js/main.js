// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// gsap animation - windows 1 rotation
gsap.to("#demo",{
    rotation: 360,
    duration: 2,
})
gsap.to("#objet1",{
    scrollTrigger:{
        target:"#section1",
        //markers: true,
        id: "#section1",
        start:"top 0%",
        end:"bottom 50%",
        toggleAction: "play none reverse none ",
        //scrub:1,

    },
    rotation:360,
    duration:2,
})
// gsap animation - windows 2 apparition

gsap.from("#objet2",{
    
    scrollTrigger: {
        target:"#section2",
        triggers:"#section2",
        //markers:true,
        start: "top 80%",
        end: "botton 50%",
        toggleAction: "none none reset",
        //scrub1
    }
})

gsap.to("#objet3", {
    duration: 5,
    motionPath: {
        path: "M69 1L58 45C56.3333 62.6667 61 92 93 68C133 38 -54 55 30 141C97.2 209.8 118.667 165.667 121 135C37 196.6 30 248 37 266L115 231L88 218H12L5 306L69 338",
    }
})
// GSAP animation - objet 4 timeline//
let timelineobjet4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#section4",
        //scrub: 1,
        markers:true,
        toggleAction: "play none reverse reset",

        start: "top 80%",
        end: "botton 60%",
        scrub: 1,
    },
});



timelineobjet4.to("#objet4", {x:100,})
.to("#objet4", {y:100,})
.to("#objet4", {x:-100,})
.to("#objet4", {y:-100,})