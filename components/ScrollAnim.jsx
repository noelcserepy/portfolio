import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const presets = {
	none: {
		hidden: {
			opacity: 1,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0,
			},
		},
	},
	fadeIn: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	},

	slideInLeft: {
		hidden: {
			opacity: 0,
			x: -40,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	},

	slideInRight: {
		hidden: {
			opacity: 0,
			x: 40,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	},

	slideInUp: {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	},
	slideInDown: {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	},
};

function ScrollAnim({ preset, delay, hidden, visible, children }) {
	let mainVariant = presets.fadeIn;

	if (preset) {
		mainVariant = presets[preset];
	}

	if (hidden) {
		mainVariant.hidden = hidden;
	}
	if (visible) {
		mainVariant.visible = visible;
	}
	if (delay) {
		mainVariant.visible.transition.delay = delay;
	}

	const ref = useRef(null);
	const isInView = useInView(ref, { once: "true" });
	const mainControls = useAnimationControls();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			variants={mainVariant}
			animate={mainControls}
			initial="hidden">
			{children}
		</motion.div>
	);
}

export default ScrollAnim;
