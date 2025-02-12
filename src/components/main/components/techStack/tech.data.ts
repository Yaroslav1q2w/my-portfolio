import { ITech } from "@/types/tech.types";
import { FaReact, FaGulp, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiRedux,
	SiTypescript,
	SiBem,
	SiMui,
	SiStyledcomponents,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";

export const technologies: ITech[] = [
	{ name: "JavaScript", Icon: IoLogoJavascript },
	{ name: "React", Icon: FaReact },
	{ name: "Redux", Icon: SiRedux },
	{ name: "Next.js", Icon: RiNextjsFill },
	{ name: "TypeScript", Icon: SiTypescript },
	{ name: "React Native", Icon: TbBrandReactNative },
	{ name: "SCSS", Icon: BsFiletypeScss },
	{ name: "BEM", Icon: SiBem },
	{ name: "Gulp", Icon: FaGulp },
	{ name: "MUI", Icon: SiMui },
	{ name: "styled-components", Icon: SiStyledcomponents },
	{ name: "Bootstrap", Icon: FaBootstrap },
];
