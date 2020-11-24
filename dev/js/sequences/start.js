import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#speed-center",{transformOrigin:"center"});
gsap.set("#speed-hand",{transformOrigin:"right center"});
gsap.set("#speed-middle",{transformOrigin:"90% 11%"});

const startTL = gsap.timeline();
startTL.to("#prndl-line", {duration:0.5, x:107})
        .to("#fuel-tick", {duration:1, y:-206}, "load-up")
        .to("#rpm-middle", {duration:1, rotation:150}, "load-up")
        .to("#speed-middle", {duration:2, rotation:140})
        .to("#speed-middle", {duration:1, rotation:0}, "+=2");

export function startAnimation() {

    return startTL;
}