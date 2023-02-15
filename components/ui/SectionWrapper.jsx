export default function SectionWrapper({ children }) {
	return (
		<section className="flex max-w-full flex-col items-center justify-between gap-8 px-8 sm:max-w-lg sm:px-0 md:max-w-xl md:flex-row lg:max-w-3xl xl:max-w-5xl">
			{children}
		</section>
	);
}
