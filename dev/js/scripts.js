import {gsap} from "gsap";
import {fordAnimation} from "./logos/ford.js";

const mainTL = gsap.timeline()
mainTL.add(fordAnimation());