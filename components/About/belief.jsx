import Image from "next/image";

function Belief({ img, title, text }) {
	return (
		<div className="flex flex-col p-4 border-l-[1px] justify-start w-full h-min gap-32 last:border-r-[1px]">
			<h4 className="text-s uppercase">{title}</h4>
			<div className="flex flex-col gap-8 justify-end">
				<div className="w-32 h-44 rounded-t-full relative overflow-hidden">
					<Image
						src={img}
						alt="A gif of a plant growing"
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center",
						}}
					/>
				</div>
				<p className="text-p">{text}</p>
			</div>
		</div>
	);
}

export default Belief;
