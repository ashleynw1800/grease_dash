import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#speed-rings",{transformOrigin:"center"});
gsap.set("#speed-center",{transformOrigin:"center"});
gsap.set("#speed-hand",{transformOrigin:"right center"});
gsap.set("#miles",{transformOrigin:"center"});
gsap.set("#speed-middle",{transformOrigin:"right top"});

const speedTL = gsap.timeline();
speedTL.from("#white-speed", {duration:1, drawSVG: "0", visibility:"visible"})
        .to("#white-speed", {visibility:"visible"})
        .from("#speed-rings", {duration:0.4, scale:0.5, alpha:0, visibility:"visible"})
        .to("#speed-rings", {visibility:"visible"})
        .from("#speed-numbers", {duration:0.3, alpha:0, visibility:"visible"}, "-=0.2")
        .to("#speed-numbers", {visibility:"visible"})
        .from("#speed-center", {duration:0.3, scale:0.5, alpha:0, visibility:"visible"}, "-=0.3")
        .to("#speed-center", {visibility:"visible"})
        .from("#speed-hand", {duration:0.2, scale:0.5, alpha:0, visibility:"visible"}, "last-speed", "-=0.2")
        .to("#speed-hand", {visibility:"visible"}, "last-speed-stay")
        .from("#miles", {duration:0.2, scale:0.5, alpha:0, visibility:"visible"}, "last-speed", "-=0.2")
        .to("#miles", {visibility:"visible"}, "last-speed-stay");

export function speedAnimation() {

    return speedTL;
}