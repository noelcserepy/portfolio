import Nav from "../components/Nav/Nav";
import MazeLoader from "../components/MazeLoader";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ScreenBorder from "../components/ScreenBorder";
import Socials from "../components/Socials";
import Menu from "../components/Menu";
import Subheader from "../components/Subheader";
import Image from "next/image";
import { motion } from "framer-motion";
import Paragraph from "../components/Paragraph";

export default function Home() {
	const [mazeAnimDone, setMazeAnimDone] = useState(true);
	const [navAnimDone, setNavAnimDone] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {}, [mazeAnimDone]);

	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden">
				{mazeAnimDone ? (
					<>
						<Nav
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
							navAnimDone={navAnimDone}
							setNavAnimDone={() => setNavAnimDone(true)}
						/>
						<Menu
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
						/>
						<Socials showMenu={showMenu} />
						<div className="flex flex-col space-y-32 mx-auto max-w-5xl">
							<Hero showMenu={showMenu} />

							<section className="w-5/12 mt-20">
								<Subheader>Something about me</Subheader>
								<Paragraph>
									I am constantly looking to improve. From Spotify web apps to
									3D rendering optimization, from Discord bots to robotic eyes,
									I build ever more challenging things to get better at my
									craft. Here are some of the things I made.
								</Paragraph>
							</section>

							<section className="w-5/12 mt-20">
								<Subheader>Work</Subheader>
								<Paragraph>
									I am constantly looking to improve. From Spotify web apps to
									3D rendering optimization, from Discord bots to robotic eyes,
									I build ever more challenging things to get better at my
									craft. Here are some of the things I made.
								</Paragraph>
							</section>

							{/* ShufflePlus */}
							<section className="flex w-full items-center justify-between">
								<div className="w-[60%] origin-[0%_50%] -translate-x-[9%]">
									<Image
										src="/img/ShufflePlus_Mockup.png"
										layout="responsive"
										width={594.26}
										height={350}
									/>
								</div>

								<div className="flex flex-col w-[40%]">
									<Subheader>ShufflePlus</Subheader>
									<div className="flex space-x-4 ">
										<div>
											<ul className="text-primary font-header text-base">
												<li>JavaScript</li>
												<li>React</li>
												<li>NextJS</li>
												<li>Spotify API</li>
												<li>NextAuth</li>
											</ul>
										</div>
										<motion.div
											style={{ originY: 0 }}
											initial={{ scaleY: 0 }}
											animate={{ scaleY: 1 }}
											className="w-0 border-l-2 border-primary "
										/>
										<div className="flex flex-col">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
											<div className="flex">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/* Packer */}
							<section className="flex w-full items-center justify-between">
								<div className="flex flex-col w-[40%]">
									<Subheader>ShufflePlus</Subheader>
									<div className="flex space-x-4 ">
										<div>
											<ul className="text-primary font-header text-base">
												<li>JavaScript</li>
												<li>React</li>
												<li>NextJS</li>
												<li>Spotify API</li>
												<li>NextAuth</li>
											</ul>
										</div>
										<motion.div
											style={{ originY: 0 }}
											initial={{ scaleY: 0 }}
											animate={{ scaleY: 1 }}
											className="w-0 border-l-2 border-primary "
										/>
										<div className="flex flex-col">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
											<div className="flex">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>
								<div className="w-[60%] origin-[0%_50%] translate-x-[9%]">
									<Image
										src="/img/Packer_Mockup.png"
										layout="responsive"
										width={594.26}
										height={350}
									/>
								</div>
							</section>

							{/* Other projects */}
							<section className="flex w-[80%] relative self-center">
								<motion.div
									className="w-0 h-full border-l-2 border-primary absolute left-1/2"
									style={{ originY: 0 }}
									initial={{ scaleY: 0 }}
									animate={{ scaleY: 1 }}
								/>
								<div className="flex flex-col space-y-16">
									<div className="flex justify-between items-center">
										<div className="text-right w-[48%]">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
										</div>
										<div className="flex flex-col w-[48%]">
											<Subheader>Memr</Subheader>
											<p className="text-primary font-header text-base">
												<span>JavaScript </span>
												<span>React </span>
												<span>NextJS </span>
												<span>Spotify API </span>
												<span>NextAuth </span>
											</p>
											<div className="flex mt-2">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<div className="text-right w-[48%]">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
										</div>
										<div className="flex flex-col w-[48%]">
											<Subheader>Spotifile</Subheader>
											<p className="text-primary font-header text-base">
												<span>JavaScript </span>
												<span>React </span>
												<span>NextJS </span>
												<span>Spotify API </span>
												<span>NextAuth </span>
											</p>
											<div className="flex mt-2">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<div className="text-right w-[48%]">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
										</div>
										<div className="flex flex-col w-[48%]">
											<Subheader>Lazy-Torrent</Subheader>
											<p className="text-primary font-header text-base">
												<span>JavaScript </span>
												<span>React </span>
												<span>NextJS </span>
												<span>Spotify API </span>
												<span>NextAuth </span>
											</p>
											<div className="flex mt-2">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<div className="text-right w-[48%]">
											<Paragraph>
												Implemented secure OAuth access token flow with
												automatic refresh. Designed clean, readable, responsive
												layout. Added custom sorting algorithms.
											</Paragraph>
										</div>
										<div className="flex flex-col w-[48%]">
											<Subheader>My_Ls</Subheader>
											<p className="text-primary font-header text-base">
												<span>JavaScript </span>
												<span>React </span>
												<span>NextJS </span>
												<span>Spotify API </span>
												<span>NextAuth </span>
											</p>
											<div className="flex mt-2">
												<svg
													className="hover:scale-125 transition-all duration-300 cursor-pointer"
													preserveAspectRatio="none"
													width="15"
													height="15"
													viewBox="0 0 15 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
														fill={`${showMenu ? "#FFFFFF" : "#0D1823"}`}
													/>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</section>
							<div className="h-72" />
						</div>
					</>
				) : (
					<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
				)}
			</div>
		</>
	);
}
