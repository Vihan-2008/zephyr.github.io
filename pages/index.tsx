/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";
import FAQ, { FAQEnum, FAQProps } from "@/components/FAQ";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import router from "next/router";
import Theme from "@/components/Theme";
import { aboutus, event1, event2, event3, event4, event5, guestSpeaker1, guestSpeaker2, guestSpeaker3 } from "../components/MainEventtexxt"; // Assuming you have a component named MainEvent


export default function Home() {


	const [faq, setFaq] = useState<FAQEnum>(FAQEnum.NONE);

	return (
		<>
			<Head>
				<title>TISBZephyr</title>
				<meta name="description" content="TISBZephyr" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="./images/zephyr logo.png" />
			</Head>
			<div className="w-screen h-full bg-primary">
				<Navbar />

				<div className="flex items-start justify-center w-full h-full">
					<div className="flex flex-col items-center justify-start w-full h-[87vh] mt-[13vh] mx-6 sm:mx-8">
						<div
							style={{ backgroundImage: 'url("./images/Venomous Jungle.jpeg")' }}
							className="flex justify-center items-center flex-col w-full h-[97%] bg-cover rounded-[2rem] grayscale-[60%]"
						// className="w-full h-[82%] mb-[4%] sm:h-[54%] sm:mb-[1%] flex flex-col justify-center items-center rounded-[2rem] grayscale-[50%] bg-cover"
						>
							<h1 className="text-4xl font-bold text-white sm:text-7xl">
								ZEPHYR
							</h1>
							<h3 className="flex items-center justify-center my-4 text-xl font-semibold text-white sm:text-2xl">
								February 15
							</h3>
							<motion.button
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								onClick={async () => {
									router.pathname !== "/" && (await router.push("/"));
									let element = document.getElementById("winners");
									element?.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}}
								onClickCapture={() => window.open("https://forms.gle/fGMNgDTXSCVjN5U98", "_blank")}
								className="flex flex-wrap w-[80%] sm:w-auto text-black items-center justify-center px-10 py-2 mt-2 text-xl brightness-[1.2] font-semibold bg-white sm:bg-gradient-to-br from-[#87CEEB] to-[#5F9EA0] rounded-3xl sm:rounded-full cursor-pointer"
							>
								Registrations Open!
							</motion.button>
						</div>

						{/* Prize Pool */}
						{/* <div
              className="flex justify-center items-center w-full h-[12%] mb-[2%] bg-cover rounded-[3rem] grayscale-[50%]"
              style={{ backgroundImage: 'url("/images/prize_pool.png")' }}
            >
              <h3 className="text-3xl font-semibold text-center text-white sm:text-4xl">
                ₹100,000 in Cash Prizes
              </h3>
            </div> */}
					</div>
				</div>

				<div className="relative bottom-16" id="themes"></div>
				<div className="sm:flex w-screen h-auto bg-primary mt-16 hidden">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-left">
							Events
						</h1>
						<div className="flex flex-row items-center justify-center w-full h-72 gap-4">
							<Theme theme="Rhythms of Renewal" image='url("./images/dance_resized.jpg")' />
							<Theme theme="Harmonic Healing" image='url("./images/music.jpg")' />
							<Theme
								theme="Serenity in Style"
								image='url("./images/comic_resized.jpeg")'
							/>
						</div>
						<div className="mt-4 flex flex-row items-center justify-center w-full h-72 gap-4">
							<Theme
								theme="The Comedy Cure"
								image='url("./images/standup.png")'
							/>
							<Theme
								theme="Pitch For Wellness"
								image='url("./images/poetry.jpg")'
							/>
						</div>
					</div>
				</div>

				<div className="relative bottom-20" id="prizes"></div>
				<div className="flex w-screen h-auto mt-16 bg-primary">
					{/* Create a section for the prizes, explaining the prize distribution for the main and mini events */}
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							Prizes
						</h1>
						<div className="flex flex-col sm:flex-row items-start justify-center w-full h-auto gap-4 mb-4 sm:flex-row">
							<motion.div
								whileHover={{ scale: 1.015 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
							>
								<h2 className="mb-8 text-3xl font-semibold text-black text-center">
									PRIZES!
								</h2>
								<div className="flex flex-col items-center w-full gap-4 text-black">
									<PrizeElement text="1st Place" prize="₹20,000" />
									<PrizeElement text="2nd Place" prize="₹15,000" />
								</div>
							</motion.div>

						</div>
					</div>
				</div>

						<div className="flex w-screen h-auto bg-primary " id="events">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8 ">
						<h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
                            Workshops
                        </h1>
						                        <div className="flex flex-col items-start justify-center text-black w-full h-auto gap-4">
						<MainEvent title={"Mixnosh Art Cafe Painting Workshop"} description={"Participants will participate in creating Tote Bags, Caps and Pouches. The cost for the same will be as follows: \n\nTote Bag: Rs.700 Cap: \nRs.700 \nPouch: Rs.600"} image='./images/Ahuja.jpg' />
					</div>
					</div>
				</div>


				{/* about us */}
				<div className="flex w-screen h-auto bg-primary mt-16" id="aboutus">
					<div className="flex flex-col items-center justify-center w-full text-black h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							About Us
						</h1>
						<div className="flex flex-col items-start justify-center w-full h-auto gap-4 ">
							<MainEvent {...aboutus} image='./images/zephyr_logo.png' />
						</div>
					</div>
				</div>

				<div className="flex w-screen h-auto bg-primary " id="events">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8 ">
						<h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
                            Chief Organisers
                        </h1>
						<div className="flex flex-col items-start justify-center text-black w-full h-auto gap-4 sm:gap-6">

							<MainEvent title={"Jinen Pan"} description={"“Hey, I’m Jinen and I’m excited for this year’s Zephyr as it’s a positive and impactful experience with a meaningful outcome. Can’t wait to show you guys what we have planned!”"} image='./images/jinen.jpg' />
							<MainEvent title={"Darshil Agarwal"} description={"“Hi everyone, I’m Darshil, and it’s a pleasure to introduce you to Zephyr! I’m excited to share this unforgettable and inspiring experience with each of you, and I can’t wait for you to discover all the amazing activities we’ve prepared. See you soon!”"} image='./images/Darshil.jpg' />
							<MainEvent title={"Myra Dhama"} description={"Hi guys! I’m Myra, and I’m super excited to show you all what we have in store for Zephyr, It’s gonna be an amazing event filled with surprises and enjoyment, see you there!"} image='./images/Myra.jpg' />
							<MainEvent title={"Rajnandini Agarwal"} description={"hello everyone!! i’m rajnandini agarwal and i’m very excited to bring you all the best mental wellness event of the year! can’t wait to show you all what we have upcoming for your well-being"} image='./images/speaker3.jpg' />
							
						</div>
					</div>
				</div>

			 	<h3 className="mt-16 mb-8 text-4xl font-semibold ml-8" id="sponsors">
					Sponsors
				</h3>

				<div className="flex flex-col items-start justify-start gap-8 ml-8">
					<div className="flex flex-col items-start justify-start w-full gap-8 sm:flex-row">
						<div className="w-100 h-100 bg-white rounded-lg overflow-hidden">
							<img
								src="./images/sponsor1.jpg"
								alt="bren"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="w-100 h-100 bg-white rounded-lg overflow-hidden">
							<img
								src="./images/sponsor2.jpg"
								alt="bren"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="w-100 h-100 bg-white rounded-lg overflow-hidden">
							<img
								src="./images/sponsor3.jpg"
								alt="bren"
								className="object-cover h-full w-full"
							/>
						</div>
						<div className="w-100 h-100 bg-white rounded-lg overflow-hidden">
							<img
								src="./images/sponsor4.jpg"
								alt="bren"
								className="object-cover h-full w-full"
							/>
						</div>
					</div>
				</div> 

				<Footer />
			</div>
		</>
	);
}

const WinnerElement = ({
	text,
	prize,
	winner,
	image,
}: {
	text: string;
	prize: string;
	winner: string;
	image?: string;
}) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			onClick={(e) =>
				!((e.target as Element).id === "winners_photo") &&
				image &&
				setExpanded(!expanded)
			}
			className={`rounded-xl w-[90%] bg-gray2 px-4 flex-col items-center justify-center ${expanded ? "py-4" : "h-14"
				} ${image && "cursor-pointer"}`}
		>
			<div
				className={`flex justify-between items-center w-full ${!expanded && "h-full"
					}`}
			>
				<p className="text-xl">
					{text} <span className="text-tertiary">(Rs. {prize})</span>
				</p>
				<div className="flex justify-center items-center gap-4">
					<p style={{ color: "mediumpurple" }} className="text-2xl">
						{winner}
					</p>
					{image &&
						(expanded ? (
							<FiChevronUp size={20} className="text-tertiary cursor-pointer" />
						) : (
							<FiChevronDown
								size={20}
								className="text-tertiary cursor-pointer"
							/>
						))}
				</div>
			</div>
			{expanded && (
				<img
					id="winners_photo"
					src={image}
					alt=""
					className="pt-4 rounded-xl cursor-default"
				/>
			)}
		</div>
	);
};

const PrizeElement = ({ text, prize }: { text: string; prize: string }) => {
	return (
		<div className="rounded-xl w-[90%] h-14 bg-gray2 px-4 flex items-center justify-between">
			<p className="text-xl">{text}</p>
			<p className="text-2xl text-zinc-400">Certificates + Trophy</p>
		</div>
	);
};


export const MainEvent = ({
	title,
	description,
	image
}: {
	title: string;
	description: string;
	image: string
}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.015 }}
			transition={{ duration: 0.3 }}
			className="cursor-pointer flex flex items-center gap-16 justify-start w-full p-8 bg-gray rounded-[2rem] h-auto"
		>
			<div className="flex flex-col">
				<h2 className="w-full text-3xl font-semibold text-center sm:text-left">
					{title}
				</h2>
				<p className="mt-4 text-lg text-center sm:text-justify whitespace-pre-line">
					{description}
				</p>
			</div>
			<img
				src={image}
				alt="Coding"
				className="hidden sm:block w-[40%]"
			/>
		</motion.div>
	);
};



export const ImageWithText = ({ imageSrc, text }: { imageSrc: string; text: string }) => {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-gray py-8">
			<div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center md:justify-between px-8">
				<img src={imageSrc} alt="Image" className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-4 md:mb-0" />
				<p className="w-full md:w-1/2 md:ml-8 text-lg md:text-xl text-center md:text-left">{text}</p>
			</div>
		</div>
	);
};
