import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {fordAnimation} from "./sequences/ford.js";
import {lightAnimation} from "./sequences/light.js";
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
        .add(lightAnimation())
        .add(topAnimation(), "-=0.2")
        .add(speedAnimation(), "up")
        .add(rpmAnimation(), "-=0.4")
        .add(buttonsAnimation(), "+=0.3")
        .add(musicAnimation(), "+=1")
        .add(startAnimation(), "-=11.7")
        .add(speedCounter(), "count")
        .add(speedCounter2(), "count");

GSDevTools.create();
