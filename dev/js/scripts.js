import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {fordAnimation} from "./sequences/ford.js";
import {topAnimation} from "./sequences/top.js";
import {speedAnimation} from "./sequences/speed.js";
import {buttonsAnimation} from "./sequences/buttons.js";
import {rpmAnimation} from "./sequences/right.js";
import {musicAnimation} from "./sequences/music.js";
import {startAnimation} from "./sequences/start.js";
import {speedCounter} from "./sequences/musictime.js";
import {speedCounter2} from "./sequences/musictime2.js";

const mainTL = gsap.timeline()
mainTL.add(fordAnimation())
        .add(topAnimation())
        .add(speedAnimation(), "up")
        .add(buttonsAnimation(), "+=0.3")
        .add(rpmAnimation(), "up")
        .add(musicAnimation(), "+=1")
        .add(startAnimation(), "-=11")
        .add(speedCounter(), "count")
        .add(speedCounter2(), "count");

GSDevTools.create();