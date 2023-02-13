import Image from "next/image";

function Belief({ img, title, text }) {
	return (
		<div className="flex h-min w-full flex-col justify-between gap-16 border-l-[1px] border-primary p-4 last:border-r-[1px] dark:border-background ">
			<h4 className="text-s whitespace-pre-line uppercase">{title}</h4>
			<div className="flex flex-col justify-start gap-8">
				<div className="relative h-64 w-44 overflow-hidden rounded-t-full">
					<Image
						src={img}
						alt="A gif"
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
