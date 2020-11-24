import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#song-line-down",{transformOrigin:"center"});
gsap.set("#button-4",{transformOrigin:"center"});


const buttonsTL = gsap.timeline();
buttonsTL.from("#button-1", {duration:1, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-1", {visibility:"visible"}, "buttons-stay")
.from("#button-2", {duration:1.2, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-2", {visibility:"visible"}, "buttons-stay")
.from("#button-3", {duration:1.4, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-3", {visibility:"visible"}, "buttons-stay")
.from("#button-4", {duration:1.5, y:30, alpha:0, visibility:"visible"}, "buttons")
.to("#button-4", {visibility:"visible"}, "buttons-stay");

export function buttonsAnimation() {

    return buttonsTL;
}