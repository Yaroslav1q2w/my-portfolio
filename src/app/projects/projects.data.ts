import { IProjectItem } from "@/types/projectItem.types";
import gameStore from "../../../public/game-store-min.png";
import georgianMenu from "../../../public/georgian-menu-min.png";
import lendVita from "../../../public/lend-vita-min.png";
import onlineShop from "../../../public/online-shop-min.png";
import tarot from "../../../public/tarot-min.png";
import vueUsers from "../../../public/vue-users-min.png";
import angularUsers from "../../../public/angular-users-min.png";
import jadwalin from "../../../public/jadwalin-min.png";
import forkApp from "../../../public/forkApp-min.png";
import theHum from "../../../public/theHum-min.png";

export const projects: IProjectItem[] = [
	{
		imageSrc: gameStore,
		projectName: "Game store",
		url: "https://game-store-s.vercel.app/",
	},
	{
		imageSrc: georgianMenu,
		projectName: "Georgian menu",
		url: "https://geogrian-menu-gulp.vercel.app/",
	},
	{
		imageSrc: lendVita,
		projectName: "Landing page",
		url: "https://genuine-babka-434b6b.netlify.app/",
	},
	{
		imageSrc: onlineShop,
		projectName: "Сlothing store",
		url: "https://online-shop-react-nine.vercel.app/",
	},
	{
		imageSrc: tarot,
		projectName: "Tarot cards",
		url: "https://starlit-starburst-6e6599.netlify.app/",
	},
	{
		imageSrc: vueUsers,
		projectName: "Vue users",
		url: "https://jocular-alfajores-57de3d.netlify.app/",
	},
	{
		imageSrc: angularUsers,
		projectName: "Angular users",
		url: "https://users-app-angular-rose.vercel.app/angular-test-pages/",
	},
	{
		imageSrc: jadwalin,
		projectName: "Jadwalin",
		url: "https://grand-dolphin-830d8b.netlify.app/",
	},
	{
		imageSrc: forkApp,
		projectName: "Fork App",
		url: "https://tranquil-medovik-b374bd.netlify.app/",
	},
	{
		imageSrc: theHum,
		projectName: "The Hum",
		url: "https://yaroslav1q2w.github.io/project-hum/",
	},
];
