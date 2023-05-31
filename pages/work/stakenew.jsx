import Nav from "../../components/Nav/Nav";
import Image from "next/image";
import img1 from "../../public/img/work/stakenew/stakenew1.png";
import img2 from "../../public/img/work/stakenew/stakenew2.png";
import img3 from "../../public/img/work/stakenew/stakenew3.png";
import img4 from "../../public/img/work/stakenew/stakenew4.png";
import img5 from "../../public/img/work/stakenew/stakenew5.png";
import img6 from "../../public/img/work/stakenew/stakenew6.png";
import img7 from "../../public/img/work/stakenew/stakenew7.png";
import img8 from "../../public/img/work/stakenew/stakenew8.png";
import { motion, useMotionValue } from "framer-motion";
import MyH1 from "../../components/ui/MyH1";

export const images = [img1, img2, img3, img4, img5, img6, img7, img8];
import P from "../../components/ui/P";
import UpperTitle from "../../components/ui/UpperTitle";

const hoverImgVariants = {
	hidden: {
		opacity: 0,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
		},
	},
};

export default function About({ showMenu, setShowMenu, url }) {
	const hoverImg = useMotionValue(0);

	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<div className="relative mt-24 flex h-screen w-screen flex-col gap-y-8 px-44">
				{/* <motion.div
					className="pointer-events-none fixed  z-10 flex h-screen w-screen items-center justify-center"
					variants={hoverImgVariants}
					initial="hidden"
					animate="visible">
					<div className="h-[80vh] w-[80vw]">
						<Image
							src={img1.src}
							alt={img1.alt}
							fill
							quality={100}
							style={{ objectFit: "contain" }}
						/>
					</div>
				</motion.div> */}

				<MyH1>
					Stake<span className="text-orange">.</span>New (2023)
				</MyH1>
				<div className="grid h-1/2 w-full grid-cols-6 grid-rows-3 gap-8">
					<motion.div className="relative col-span-3 row-span-3">
						<motion.div
							className="relative h-full w-full"
							whileHover={{
								// top: "50%",
								// left: "50%",
								// x: "-50%",
								// y: "-50%",
								// width: "80vw",
								// height: "80vh",
								// position: "fixed",
								zIndex: 100,
								transition: {
									duration: 0.1,
									ease: "easeInOut",
								},
							}}>
							<Image
								src={img1.src}
								alt={img1.alt}
								fill
								quality={100}
								style={{ objectFit: "cover" }}
							/>
						</motion.div>
					</motion.div>
					<div className="relative col-span-2 col-start-4 row-span-2 row-start-1">
						<Image
							src={img7.src}
							alt={img7.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="relative ">
						<Image
							src={img2.src}
							alt={img2.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="relative ">
						<Image
							src={img8.src}
							alt={img8.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="relative ">
						<Image
							src={img4.src}
							alt={img4.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="relative ">
						<Image
							src={img5.src}
							alt={img5.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
					<div className="relative ">
						<Image
							src={img6.src}
							alt={img6.alt}
							fill
							quality={100}
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
				<div className="flex justify-between gap-8">
					<div className="w-full">
						<UpperTitle>Overview</UpperTitle>
						<P>sakdlfjsdfkl</P>
					</div>
					<div className="w-full">
						<UpperTitle>Built With</UpperTitle>
						<P>sakdlfjsdfkl</P>
					</div>
				</div>
			</div>
		</>
	);
}
