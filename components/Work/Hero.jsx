import Image from "next/image";
import img1 from "../../public/img/work/stakenew/stakenew1.png";
import img2 from "../../public/img/work/stakenew/stakenew2.png";
import img3 from "../../public/img/work/stakenew/stakenew3.png";
import img4 from "../../public/img/work/stakenew/stakenew4.png";
import img5 from "../../public/img/work/stakenew/stakenew5.png";
import img6 from "../../public/img/work/stakenew/stakenew6.png";
import img7 from "../../public/img/work/stakenew/stakenew7.png";
import img8 from "../../public/img/work/stakenew/stakenew8.png";
import { motion } from "framer-motion";
import MyH1 from "../ui/MyH1";

export const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Hero() {
	console.log(images);
	return (
		<div className="h-screen w-full">
			<MyH1>
				Stake<span className="text-orange">.</span>New
			</MyH1>
			<motion.div className="relative flex h-1/2 w-full">
				{images.map((image, index) => {
					return (
						<motion.div key={index} className="relative h-full w-96">
							<Image
								src={image.src}
								alt={image.alt}
								fill
								quality={100}
								style={{ objectFit: "contain" }}
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
