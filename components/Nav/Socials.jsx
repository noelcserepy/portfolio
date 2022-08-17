import { motion } from "framer-motion";
import { useEffect } from "react";

const socialsVariants = {
	hidden: {
		opacity: 1,
	},
	open: {
		opacity: 1,
		fill: "#FFFFFF",
		transition: {
			delayChildren: 2,
			staggerChildren: 0.3,
			ease: "easeInOut",
		},
	},
	closed: {
		opacity: 1,
		fill: "#0D1823",
		transition: {
			delayChildren: 2,
			staggerChildren: 0.3,
			ease: "easeInOut",
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.02,
			ease: "easeIn",
		},
	},
};

const iconVariants = {
	hidden: {
		opacity: 0,
	},
	open: {
		opacity: 1,
	},
	closed: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.02,
			delay: 0.14,
		},
	},
};

const lineVariants = {
	hidden: {
		scaleY: 0,
	},
	open: {
		scaleY: 1,
		transition: {
			type: "spring",
			duration: 0.3,
			bounce: 0.5,
		},
	},
	closed: {
		scaleY: 1,
	},
	exit: {
		scaleY: 0,
		transition: {
			duration: 0.14,
			ease: "easeIn",
		},
	},
};

function Socials({ showMenu }) {
	const iconSize = 15;

	return (
		<motion.div
			className={`fixed ${
				showMenu ? "flex" : "hidden"
			} lg:flex flex-col-reverse justify-end items-center bottom-4 left-16 w-min h-1/6 z-40 space-y-3 space-y-reverse`}
			variants={socialsVariants}
			initial="hidden"
			exit="exit"
			animate={showMenu ? "open" : "closed"}>
			<motion.div
				style={{ originY: "100%" }}
				className={`w-0 h-full mx-auto border-l-[1px] transition-all duration-300 ${
					showMenu ? "border-white" : "border-primary"
				}`}
				variants={lineVariants}
			/>

			<motion.div className="w-fill h-min">
				<a
					href="https://github.com/noelcserepy"
					target="_blank"
					rel="noreferrer">
					<motion.svg
						className="cursor-pointer fill-inherit"
						variants={iconVariants}
						width={iconSize}
						height={iconSize}
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						whileHover={{
							scale: 1.1,
							transition: {
								duration: 0.2,
							},
						}}>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
						/>
					</motion.svg>
				</a>
			</motion.div>

			<motion.div className="w-fill h-min">
				<a
					href="https://www.linkedin.com/in/no%C3%ABl-cser%C3%A9py-73319a177/"
					target="_blank"
					rel="noreferrer">
					<motion.svg
						className="cursor-pointer fill-inherit"
						variants={iconVariants}
						width={iconSize}
						height={iconSize}
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						whileHover={{
							scale: 1.1,
							transition: {
								duration: 0.2,
							},
						}}>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0.625 1.77375C0.625 1.46908 0.746029 1.1769 0.961461 0.961463C1.17689 0.74603 1.46908 0.625002 1.77375 0.625002H13.225C13.376 0.624755 13.5255 0.654291 13.6651 0.711918C13.8046 0.769546 13.9315 0.854133 14.0383 0.960837C14.1451 1.06754 14.2298 1.19427 14.2876 1.33376C14.3454 1.47325 14.3751 1.62277 14.375 1.77375V13.225C14.3752 13.376 14.3456 13.5256 14.2879 13.6651C14.2302 13.8047 14.1455 13.9315 14.0388 14.0383C13.932 14.1451 13.8052 14.2298 13.6657 14.2876C13.5262 14.3454 13.3766 14.3751 13.2256 14.375H1.77375C1.62284 14.375 1.47341 14.3453 1.334 14.2875C1.19458 14.2297 1.06792 14.1451 0.96124 14.0383C0.854561 13.9316 0.769957 13.8049 0.712264 13.6654C0.654571 13.526 0.624918 13.3765 0.625 13.2256V1.77375ZM6.0675 5.8675H7.92938V6.8025C8.19813 6.265 8.88563 5.78125 9.91875 5.78125C11.8994 5.78125 12.3688 6.85188 12.3688 8.81625V12.455H10.3644V9.26375C10.3644 8.145 10.0956 7.51375 9.41313 7.51375C8.46625 7.51375 8.0725 8.19438 8.0725 9.26375V12.455H6.0675V5.8675ZM2.63 12.3694H4.635V5.78125H2.63V12.3688V12.3694ZM4.92188 3.6325C4.92566 3.80417 4.89511 3.97487 4.83203 4.13457C4.76894 4.29428 4.6746 4.43977 4.55452 4.56252C4.43445 4.68527 4.29106 4.7828 4.13278 4.84938C3.97451 4.91596 3.80453 4.95026 3.63281 4.95026C3.4611 4.95026 3.29112 4.91596 3.13284 4.84938C2.97456 4.7828 2.83118 4.68527 2.71111 4.56252C2.59103 4.43977 2.49668 4.29428 2.4336 4.13457C2.37052 3.97487 2.33997 3.80417 2.34375 3.6325C2.35117 3.29554 2.49024 2.97487 2.73118 2.73918C2.97212 2.50349 3.29577 2.37151 3.63281 2.37151C3.96986 2.37151 4.29351 2.50349 4.53445 2.73918C4.77538 2.97487 4.91446 3.29554 4.92188 3.6325Z"
						/>
					</motion.svg>
				</a>
			</motion.div>

			<motion.div className="w-fill h-min">
				<a
					href={`mailto:hello@noelcserepy.com?subject=Hi Noël, let\'s work together`}
					target="_blank"
					rel="noreferrer">
					<motion.svg
						variants={iconVariants}
						className="cursor-pointer fill-inherit"
						width={iconSize}
						height={(iconSize / 15) * 12}
						viewBox="0 0 15 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						whileHover={{
							scale: 1.1,
							transition: {
								duration: 0.2,
							},
						}}>
						<path d="M14.25 0.750055C14.1861 0.743471 14.1217 0.743471 14.0578 0.750055H0.932764C0.848644 0.751351 0.765081 0.763964 0.684326 0.787555L7.45776 7.53287L14.25 0.750055Z" />
						<path d="M14.9438 1.40137L8.11875 8.19824C7.9431 8.37285 7.70549 8.47086 7.45781 8.47086C7.21014 8.47086 6.97253 8.37285 6.79688 8.19824L0.0328125 1.45293C0.0120185 1.52936 0.000993134 1.60811 0 1.6873V11.0623C0 11.3109 0.0987721 11.5494 0.274587 11.7252C0.450403 11.901 0.68886 11.9998 0.9375 11.9998H14.0625C14.3111 11.9998 14.5496 11.901 14.7254 11.7252C14.9012 11.5494 15 11.3109 15 11.0623V1.6873C14.9963 1.58964 14.9773 1.49317 14.9438 1.40137ZM1.57969 11.0623H0.928125V10.392L4.33594 7.0123L4.99687 7.67324L1.57969 11.0623ZM14.0531 11.0623H13.3969L9.97969 7.67324L10.6406 7.0123L14.0484 10.392L14.0531 11.0623Z" />
					</motion.svg>
				</a>
			</motion.div>
		</motion.div>
	);
}

export default Socials;
