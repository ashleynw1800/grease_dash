import{gsap}from"gsap";import{DrawSVGPlugin}from"gsap/DrawSVGPlugin";gsap.registerPlugin(DrawSVGPlugin),gsap.set("#bbbb",{transformOrigin:"center"});const buttonsTL=gsap.timeline();buttonsTL.from("#white-speed",{duration:1.5,drawSVG:"0",visibility:"visible"}).to("#white-speed",{visibility:"visible"});export function buttonsAnimation(){return buttonsTL}