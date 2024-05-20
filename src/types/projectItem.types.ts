import { StaticImageData } from "next/image";

export interface IProjectItem {
	imageSrc: StaticImageData;
	projectName: string;
	url: string;
}
