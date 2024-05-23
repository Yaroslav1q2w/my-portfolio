export interface ITech {
	name: string;
	Icon: React.ComponentType;
	variants?: {
		hidden: { y: number; opacity: number };
		visible: { y: number; opacity: number };
	};
}
