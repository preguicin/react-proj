import { motion } from "framer-motion";
import photo from "../public/photo.png";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import cv from "../public/CV.pdf";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContex";

const Intro: React.FC = () => {
	
	const { introRef } = useGlobalContext();

	return(
		<section ref={introRef} className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-m-24" id="home">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div initial={{opacity:0, scale: 0}} animate={{opacity:1, scale:1}} transition={{type:"tween", duration:0.2}}>
						<img className="w-24 h-24 rounded-full border-[0.35rem] object-cover shadow-xl" src={photo} alt="Luv(sic)"></img>
					</motion.div>
					<motion.div initial={{opacity:0, scale: 0}} animate={{opacity:1, scale:1}} transition={{type:"spring", stiffness: 125, duration:0.5, delay:0.1}}>
						<span className="absolute bottom-0 right-0 text-4x1">❤️</span>
					</motion.div>
				</div>
			</div>
			<motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{opacity:0, y:15}} animate={{opacity:1, y:0}}>
				'Cause the beat plus the melody
				Makes me speak of <span> L.O.V.E. </span> eloquently, so evidently
				(I mean that from my heart 'cause you make me feel good as a person)
				'Cause the beat plus the melody
				Makes me speak of <span> L.O.V.E. </span>. eloquently, so evidently
			</motion.p>
			<motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{opacity:0, y:15}} animate={{opacity:1, y:0}} transition={{delay:0.2}}>
				<a href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
				 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-90 transition">Contact me<BsArrowRight className="group-hover: translate-x-1 transition"/></a>

				<a href={cv} className="bg-[#f7f7e5] px-7 py-3 flex items-center gap-2 rounded-full 
				outline-none focus:scale-110 hover:scale-110 active:scale-90 transition">
					Dowload CV 
					<HiDownload className="group-hover:translate-y-1 transition"/>
				</a>

				<a href="https://linkedin.com" className="bg-[#f7f7e5] p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-90 transition hover:text-gray-950"><BsLinkedin/></a>

				<a href="https://github.com" className="bg-[#f7f7e5] p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-90 transition hover:text-gray-950"><FaGithubSquare/></a>
			</motion.div>
		</section>
	);
}

export default Intro;