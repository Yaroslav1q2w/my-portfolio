import { StaticImageData } from "next/image";

export interface IProjectItem {
	imageSrc: StaticImageData | string;
	projectName: string;
	url: string;
	id: string;
	technologies: string[];
	features: string[];
}
