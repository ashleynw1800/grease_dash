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
.to("#button-4", {visibility:"visible"}, "buttons-stay")
.to("#button-4", {duration:0.3, scale:0.7})
.to("#button-4", {duration:0.7, scale:1}, "colors")
.to("#button-outside-4", {duration:0.7, fill:"#AA0707", stroke:"#AA0707"}, "colors")
.to("#music-icon-copy", {duration:0.7, fill:"#FFF"}, "colors")
.from("#play-button", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#play-button", {visibility:"visible"}, "song-stay")
.from("#play", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#play", {visibility:"visible"}, "song-stay")
.from("#song-line-red", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#song-line-red", {visibility:"visible"}, "song-stay")
.from("#song-line-white", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#song-line-white", {visibility:"visible"}, "song-stay")
.from("#song-bolt", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#song-bolt", {visibility:"visible"}, "song-stay")
.from("#time-start", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#time-start", {visibility:"visible"}, "song-stay")
.from("#time-end", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#time-end", {visibility:"visible"}, "song-stay")
.from("#GREASELIGHTNING", {duration:1, y:30, alpha:0, visibility:"visible"}, "song")
.to("#GREASELIGHTNING", {visibility:"visible"}, "song-stay")
.from("#song-line-down", {duration:0.5, drawSVG: "0", visibility:"visible"}, "-=0.3")
.to("#song-line-down", {visibility:"visible"});

export function buttonsAnimation() {

    return buttonsTL;
}