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

const mainTL = gsap.timeline()
mainTL.add(fordAnimation())
        .add(topAnimation())
        .add(speedAnimation(), "-=0.3")
        .add(buttonsAnimation(), "-=0.5")
        .add(rpmAnimation())
        .add(musicAnimation(), "+=1")
        .add(startAnimation(), "-=119");

GSDevTools.create();