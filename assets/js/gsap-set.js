document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,TextPlugin);
    gsap.from('#title',{
        x: -100, duration: 2,
        scrollTrigger: {
            trigger: '#title',
            start: "top 75%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
        }
    });
    gsap.to("#icon",{
        text: 'Wellcome',
        repeat: 1,
        yoyo: true,
        duration: 2,
        delay: 1
    });
    gsap.to('#child-title', {
        text: `<span class="text-base md:text-xl lg:text-2xl text-primary">I'm</span>Wahyudi`,
        duration: 2,
        delay: 2,
        scrollTrigger: {
            trigger: '#child-title',
            start: "top 80%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
        }
    });
    gsap.from('#blob', {
        scale: -0,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: '#blob',
            start: "top 70%",
            end: "top 15%",
            toggleActions: "restart reverse restart reverse"
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
            toggleActions: "restart reverse restart reverse"
            // markers: {
            //     startColor: '#252525',
            //     endColor: 'red',
            //     fontSize: '4rem',
            //     indent: 200
            // }
        }
    });
    gsap.from('#first', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '#first',
            start: "top 70%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
        }
    });
    gsap.from('#middle', {
        scale: -0,
        duration: 2,
        scrollTrigger: {
            trigger: '#middle',
            start: "top 70%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
        }
    })
    gsap.from('#last', {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '#last',
            start: "top 70%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
            
        }
    });
    gsap.to('#motto',{
        text: `Live is a<span class="text-primary font-bold"> Code</span>, Break Down Complexities, Find the Patterns, and Build Solutions.`,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '#motto',
            start: "top 81%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
            
        }
    });
    gsap.from('#btn-contact-me', {
        opacity: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '#btn-contact-me',
            start: "top 85%",
            end: "top 10%",
            toggleActions: "restart reverse restart reverse"
        }
    });
    gsap.from('#about-description', {
        y: -100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: '#about',
            start: "40% 70%",
            end: "70% 40%",
            toggleActions: "restart reverse restart reverse"
        }
    })
});