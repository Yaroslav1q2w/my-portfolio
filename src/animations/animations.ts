export const leftAnimation = {
	hidden: { x: -100, opacity: 0 },
	visible: (delay = 0) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const rightAnimation = {
	hidden: { opacity: 0, x: 100 },
	visible: (delay = 0) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const opacityAnimation = {
	hidden: { opacity: 0 },
	visible: (delay = 0) => ({
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const topAnimation = {
	hidden: { opacity: 0, y: 30 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const bottomAnimation = {
	hidden: { opacity: 0, y: -20 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			delay: delay,
		},
	}),
};

export const containerListAnimation = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

export const listAnimation = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const formAnimations = {
	hidden: { opacity: 1, scale: 0 },
	visible: (delay = 0) => ({
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.3,
			delay: delay,
		},
	}),
};
