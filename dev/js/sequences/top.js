import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#right-die",{transformOrigin:"center"});
gsap.set("#left-die",{transformOrigin:"center"});
gsap.set("#grease-logo",{transformOrigin:"center"});
gsap.set("#ford-logo",{transformOrigin:"center"});

const topTL = gsap.timeline();
topTL.from("#right-die", {duration:1.5, x:-10, y:40, alpha:0, visibility:"visible"},"dice")
.to("#right-die", {visibility:"visible"},"seen")
.from("#left-die", {duration:1.5, x:10, y:40, alpha:0, visibility:"visible"},"dice")
.to("#left-die", {visibility:"visible"},"seen")
.from("#time", {duration:0.7, y:10, alpha:0, visibility:"visible"}, "-=0.7")
.to("#time", {visibility:"visible"})
.from("#grease-logo", {duration:0.7, y:10, alpha:0, visibility:"visible"}, "logos")
.to("#grease-logo", {visibility:"visible"}, "logos-seen")
.from("#ford-logo", {duration:0.7, y:10, alpha:0, visibility:"visible"}, "logos")
.to("#ford-logo", {visibility:"visible"}, "logos-seen");

export function topAnimation() {

    return topTL;
}