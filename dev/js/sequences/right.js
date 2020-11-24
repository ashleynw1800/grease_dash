import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#rpm-rings",{transformOrigin:"center"});
gsap.set("#rpm-middle",{transformOrigin:"90% 12%"});
gsap.set("#RPMx1000",{transformOrigin:"center"});
gsap.set("#VOLTS-label",{transformOrigin:"center"});
gsap.set("#fuel-rings",{transformOrigin:"center"});

const rpmTL = gsap.timeline();
rpmTL.from("#white-rpm", {duration:1.5, drawSVG: "0", visibility:"visible"}, "right-start")
.to("#white-rpm", {visibility:"visible"}, "right-start-stay")
.from("#rpm-rings", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#rpm-rings", {visibility:"visible"}, "appear-stay")
.from("#rpm-numbers", {duration:0.3, alpha:0, visibility:"visible"}, "right-labels")
.to("#rpm-numbers", {visibility:"visible"}, "right-labels-stay")
.from("#rpm-middle", {duration:0.3, scale:0.5, alpha:0, visibility:"visible"}, "right-labels")
.to("#rpm-middle", {visibility:"visible"}, "right-labels-stay")
.from("#RPMx1000", {duration:0.3, scale:0.5, alpha:0, visibility:"visible"}, "right-labels")
.to("#RPMx1000", {visibility:"visible"}, "right-labels-stay")
.from("#bolt", {duration:1.5, drawSVG: "0", visibility:"visible"}, "right-start")
.to("#bolt", {visibility:"visible"}, "right-start-stay")
.from("#bolt-lines", {duration:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#bolt-lines", {visibility:"visible"}, "appear-stay")
.from("#VOLTS-label", {duration:0.3, scale:0.5, alpha:0, visibility:"visible"}, "right-labels")
.to("#VOLTS-label", {visibility:"visible"}, "right-labels-stay")
.from("#fuel-out", {duration:1.5, drawSVG: "0", visibility:"visible"}, "right-start")
.to("#fuel-out", {visibility:"visible"}, "right-start-stay")
.from("#fuel-rings", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#fuel-rings", {visibility:"visible"}, "appear-stay")
.from("#FUEL", {duration:0.3, alpha:0, visibility:"visible"}, "right-labels")
.to("#FUEL", {visibility:"visible"}, "right-labels-stay")
.from("#fuel-tick", {duration:0.3, alpha:0, visibility:"visible"}, "right-labels")
.to("#fuel-tick", {visibility:"visible"}, "right-labels-stay");

export function rpmAnimation() {

    return rpmTL;
}