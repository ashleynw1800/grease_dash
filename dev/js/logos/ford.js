import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const fordTL = gsap.timeline();

fordTL.from("#ford-out-ring", {
    duration: 1,
    drawSVG: "0"
})

export function fordAnimation() {

    return fordTL;
}