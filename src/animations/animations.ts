export const textLeftAnimation = {
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

export const textAnimationRight = {
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

export const textOpacityAnimation = {
	hidden: { opacity: 0 },
	visible: (delay = 0) => ({
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const textTopAnimation = {
	hidden: { opacity: 0, y: 30 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: delay,
		},
	}),
};

export const imageAnimationRight = {
	hidden: { x: 100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
		},
	},
};

export const imageAnimationLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: (delay = 0) => ({
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			delay: delay,
		},
	}),
};

export const containerListAnimation = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 1,
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
