import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#right-dice",{transformOrigin:"center"});
gsap.set("#right-dice-dot-TL",{transformOrigin:"center"});
gsap.set("#right-dice-dot-TR",{transformOrigin:"center"});
gsap.set("#right-dice-dot-BL",{transformOrigin:"center"});
gsap.set("#right-dice-dot-BR",{transformOrigin:"center"});
gsap.set("#left-dice",{transformOrigin:"center"});
gsap.set("#left-dice-dot",{transformOrigin:"center"});
gsap.set("#grease-logo",{transformOrigin:"center"});
gsap.set("#ford-logo",{transformOrigin:"center"});

const topTL = gsap.timeline();
topTL.from("#right-dice", {duration:1, x:-80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#right-dice", {visibility:"visible"},"seen")
.from("#right-dice-dot-TL", {duration:1, x:-80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#right-dice-dot-TL", {visibility:"visible"},"seen")
.from("#right-dice-dot-BL", {duration:1, x:-80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#right-dice-dot-BL", {visibility:"visible"},"seen")
.from("#right-dice-dot-TR", {duration:1, x:-80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#right-dice-dot-TR", {visibility:"visible"},"seen")
.from("#right-dice-dot-BR", {duration:1, x:-80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#right-dice-dot-BR", {visibility:"visible"},"seen")
.from("#left-dice", {duration:1, x:80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#left-dice", {visibility:"visible"},"seen")
.from("#left-dice-dot", {duration:1, x:80, y:20, alpha:0, visibility:"visible"},"dice")
.to("#left-dice-dot", {visibility:"visible"},"seen")
.from("#time", {duration:0.5, y:10, alpha:0, visibility:"visible"}, "-=0.45")
.to("#time", {visibility:"visible"})
.from("#grease-logo", {duration:0.4, y:10, alpha:0, visibility:"visible"}, "logos")
.to("#grease-logo", {visibility:"visible"}, "logos-seen")
.from("#ford-logo", {duration:0.4, y:10, alpha:0, visibility:"visible"}, "logos")
.to("#ford-logo", {visibility:"visible"}, "logos-seen")
.from("#PRNDL", {duration:0.4, y:10, alpha:0, visibility:"visible"}, "logos")
.to("#PRNDL", {visibility:"visible"}, "logos-seen");

export function topAnimation() {

    return topTL;
}