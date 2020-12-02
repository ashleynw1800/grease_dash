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
        .to("#ford-name-lg", {visibility:"visible"}, "stay")
        
        .from("#light-1", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"}, "+=3")
        .from("#light-2", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-3", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-4", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        // .from("#light-5", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        // .from("#light-6", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-7", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-8", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        // .from("#light-9", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        // .from("#light-10", {duration:0.7, delay:2, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .to("#white", {duration:0.3, visibility:"visible"})
        .to("#white", {duration:0.5, visibility:"hidden"}, "hide")
        .to("#ford-fill-stroke-lg", {visibility:"hidden"}, "hide")
        .to("#ford-fill-lg", {visibility:"hidden"}, "hide")
        .to("#ford-in-ring-lg", {visibility:"hidden"}, "hide")
        .to("#ford-name-lg", {visibility:"hidden"}, "hide");

export function fordAnimation() {

    return fordTL;
}