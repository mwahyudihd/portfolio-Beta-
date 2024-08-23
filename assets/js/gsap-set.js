document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin);
    gsap.from('#title',{
        x: -100, duration: 3
    });
    gsap.from('#blob', {
        scale: -0,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: 'svg',
            start: "top 70%",
            end: "top 15%",
            toggleActions: "restart reverse restart reverse",
            // markers: {
            //     startColor: '#252525',
            //     endColor: 'red',
            //     fontSize: '4rem',
            //     indent: 200
            // }
        }
    });
    gsap.from('#profile', {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: 'img',
            start: "top 70%",
            end: "top 15%",
            toggleActions: "restart reverse restart reverse",
            // markers: {
            //     startColor: '#252525',
            //     endColor: 'red',
            //     fontSize: '4rem',
            //     indent: 200
            // }
        }
    })
});