import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const itemVariants = {
	closed: {
		x: [null, -300, 50],
		opacity: [null, 0, 0],
		transition: {
			duration: 0.2,
			times: [0, 0.99, 1],
			ease: [0.69, 0.3, 0.59, 0.58],
		},
	},

	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

const lineVariants = {
	closed: {
		scaleY: 0,
		transition: {
			delay: 1,
			duration: 0.3,
		},
	},
	open: {
		scaleY: 1,
		transition: {
			delay: 1,
			duration: 0.1,
		},
	},
};

const MenuItem = ({ setShowMenu, href, text }) => {
	const router = useRouter();

	return (
		<motion.li
			className="font-title text-8xl text-white origin-center cursor-pointer list-none select-none relative"
			style={{ letterSpacing: "0em" }}
			variants={itemVariants}
			whileHover={{
				letterSpacing: "0.1em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}
			whileTap={{
				letterSpacing: "0.06em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}>
			<motion.div
				className={`w-0 h-full ${
					router.pathname === href ? "border-l-[2px]" : ""
				} absolute -left-4`}
				variants={lineVariants}
				// animate={router.pathname === href ? "visible" : "hidden"}
				style={{ originY: 0 }}
			/>
			<Link href={href} scroll={false}>
				<a>{text}</a>
			</Link>
		</motion.li>
	);
};

export default MenuItem;
