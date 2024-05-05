function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotiveAnimation();

function navbarAnimation() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0%",
      end: "top -5%",
      scrub: true,
    },
  });

  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0%",
      end: "top -5%",
      scrub: true,
    },
  });
}

navbarAnimation();

function videoconAnimation() {
  var videocon = document.querySelector("#video-container");
  var playBtn = document.querySelector("#play");

  videocon.addEventListener("mousemove", function () {
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 80,
      top: dets.y - 80,
    });

    console.log(dets.x, dets.y);
  });
}

videoconAnimation();

function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 300,
    opacity: 0,
    delay: 0.5,
    duration: 0.4,
    stagger: 0.4,
  });

  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    delay: 1.8,
  });
}

loadinganimation();

function cursorAnimation() {
  var childs = document.querySelectorAll(".child");
  var cursor = document.querySelector("#cursor");

  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x,
      top: dets.y,
    });
  });

  childs.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        transform: "translate(-50%, -50%) scale(1)",
      });
    });

    val.addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        transform: "translate(-50%, -50%) scale(0)",
      });
    });
  });
}

cursorAnimation();

function page22() {
  var tl22 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page22 #page22-left h2",
      scroller: "#main",
      // markers: true,
      start: "top 75%",
      end: "top 60%",
      scrub: 2,
    },
  });

  tl22.from(
    "#page22 #page22-left h2",
    {
      y: 50,
      opacity: 0,
      stagger: 0.3,
    },
    "yashu"
  );

  tl22.from(
    "#page22 #page22-right p",
    {
      opacity: 0,
      stagger: 0.3,
    },
    "yashu"
  );
}

page22();

gsap.from("#page4-cont #child-cont", {
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page4-cont",
    scroller: "#main",
    // markers: true,
    start: "top 65%",
    end: "top 35%",
    scrub: 2,
  },
});

gsap.from("#page4-details h2 ", {
  scale: 0,
  scrollTrigger: {
    trigger: "#page4-details",
    scroller: "#main",
    // markers: true,
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#page6 #logo-circle", {
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page6 #logo-circle",
    scroller: "#main",
    // markers: true,
    start: "top 50%",
    end: "top 40%",
    scrub: 2,
  },
});

gsap.from("#page6 #cross h1", {
  opacity: 0,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page6 #cross h1",
    scroller: "#main",
    // markers: true,
    start: "top 50%",
    end: "top 45%",
    scrub: 2,
  },
});
