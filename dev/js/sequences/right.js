import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

gsap.set("#rpm-rings",{transformOrigin:"center"});
gsap.set("#rpm-middle",{transformOrigin:"90% 12%"});
gsap.set("#RPMx1000",{transformOrigin:"center"});
gsap.set("#VOLTS-label",{transformOrigin:"center"});
gsap.set("#fuel-rings",{transformOrigin:"center"});

const rpmTL = gsap.timeline();
rpmTL.to("#fuel-gauge", {x:580, y:235})
.from("#fuel-out", {duration:1, drawSVG: "0", visibility:"visible"})
.to("#fuel-out", {visibility:"visible"})
.from("#fuel-rings", {duration:0.4, scale:0.5, alpha:0, visibility:"visible"})
.to("#fuel-rings", {visibility:"visible"})
.from("#FUEL", {duration:0.4, alpha:0, visibility:"visible"}, "appear-1", "-=0.2")
.to("#FUEL", {visibility:"visible"}, "appear-1-stay")
.from("#fuel-tick", {duration:0.4, alpha:0, visibility:"visible"}, "appear-1", "-=0.2")
.to("#fuel-tick", {visibility:"visible"}, "appear-1-stay")
.to("#fuel-tick", {duration:1, y:-206})
.to("#fuel-gauge", {duration:1, x:900, y:235}, "+=0.2")

.from("#white-rpm", {duration:1, drawSVG: "0", visibility:"visible"}, "right-start")
.to("#white-rpm", {visibility:"visible"}, "right-start-stay")
.from("#bolt", {duration:1, drawSVG: "0", visibility:"visible"}, "right-start")
.to("#bolt", {visibility:"visible"}, "right-start-stay")
.from("#rpm-rings", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#rpm-rings", {visibility:"visible"}, "appear-stay")
.from("#rpm-middle", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#rpm-middle", {visibility:"visible"}, "appear-stay")
.from("#RPMx1000", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#RPMx1000", {visibility:"visible"}, "appear-stay")
.from("#bolt-lines", {duration:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#bolt-lines", {visibility:"visible"}, "appear-stay")
.from("#VOLTS-label", {duration:0.5, scale:0.5, alpha:0, visibility:"visible"}, "appear")
.to("#VOLTS-label", {visibility:"visible"}, "appear-stay")
.from("#rpm-numbers", {duration:0.2, alpha:0, visibility:"visible"})
.to("#rpm-numbers", {visibility:"visible"})
.to("#volt-fill", {visibility:"visible", alpha:0.5})
.to("#volt-fill", {duration:1, y:-152}, "load-up")
.to("#rpm-middle", {duration:1, rotation:150}, "load-up");

export function rpmAnimation() {

    return rpmTL;
}