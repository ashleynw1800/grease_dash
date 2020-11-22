import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#song-line-down",{transformOrigin:"center"});


const buttonsTL = gsap.timeline();
buttonsTL.from("#button-1", {duration:1, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-1", {visibility:"visible"}, "buttons-stay")
.from("#button-2", {duration:1.2, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-2", {visibility:"visible"}, "buttons-stay")
.from("#button-3", {duration:1.4, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-3", {visibility:"visible"}, "buttons-stay")
.from("#button-4", {duration:1.5, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-4", {visibility:"visible"}, "buttons-stay")
.from("#song", {duration:1, y:-3, alpha:0, visibility:"visible"})
.to("#song", {visibility:"visible"})
.from("#song-line-down", {duration:0.5, drawSVG: "0", visibility:"visible"}, "-=0.3")
.to("#song-line-down", {visibility:"visible"});

export function buttonsAnimation() {

    return buttonsTL;
}