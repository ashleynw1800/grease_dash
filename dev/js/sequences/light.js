import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const lightTL = gsap.timeline();
lightTL.from("#light-1", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-2", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-3", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-4", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-7", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .from("#light-8", {duration:0.7, delay:0.5, drawSVG:"0%", visibility:"visible"}, {drawSVG:"100%", ease:"linear"})
        .to("#white", {duration:0.1, visibility:"visible"})
        .to("#white", {duration:0.1, visibility:"hidden"}, "hide")
        .to("#ford-fill-stroke-lg", {visibility:"hidden"}, "hide")
        .to("#ford-fill-lg", {visibility:"hidden"}, "hide")
        .to("#ford-in-ring-lg", {visibility:"hidden"}, "hide")
        .to("#ford-name-lg", {visibility:"hidden"}, "hide");

export function lightAnimation() {

    return lightTL;
}