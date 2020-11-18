import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#ford-fill-stroke-lg",{transformOrigin:"top center"});

const fordTL = gsap.timeline();
fordTL.from("#ford-fill-stroke-lg", {duration:1, drawSVG: "1", visibility:"visible"})
        .to("#ford-fill-stroke-lg", {visibility:"visible"})
        .from("#ford-fill-lg", {duration:0.5, alpha:0, visibility:"visible"}, "stay")
        .to("#ford-fill-lg", {visibility:"visible"}, "stay")
        .from("#ford-in-ring-lg", {duration:0.5, alpha:0, visibility:"visible"}, "stay")
        .to("#ford-in-ring-lg", {visibility:"visible"}, "stay")
        .from("#ford-name-lg", {duration:0.5, alpha:0, visibility:"visible"}, "stay")
        .to("#ford-name-lg", {visibility:"visible"}, "stay");

export function fordAnimation() {

    return fordTL;
}