import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#song-line-down",{transformOrigin:"center"});
gsap.set("#button-4",{transformOrigin:"center"});


const musicTL = gsap.timeline();
musicTL.to("#button-4", {duration:0.3, scale:0.7})
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
.to("#song-line-down", {visibility:"visible"})
.to("#song-line-white", {duration:120, x:460});

export function musicAnimation() {

    return musicTL;
}