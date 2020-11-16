import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#ford-logo",{transformOrigin:"center"});

const fordTL = gsap.timeline();
//fordTL.to("#ford-logo", {duration:1, alpha:100, scale:6, x:450, y:300})
    //.from("#ford-out-ring", {duration: 3, drawSVG: "1"});

export function fordAnimation() {

    return fordTL;
}