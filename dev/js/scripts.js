import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {fordAnimation} from "./sequences/ford.js";
import {topAnimation} from "./sequences/top.js";

const mainTL = gsap.timeline()
mainTL.add(fordAnimation())
        .add(topAnimation());

GSDevTools.create();