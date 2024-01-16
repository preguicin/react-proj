import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectProps{
	title: string;
	description: string;
	tags: readonly string[];
	imageUrl: string;
}

const Project:React.FC<ProjectProps> = ({title, description, tags, imageUrl}) => {
	
	const ref = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"]
	});

	const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0,1], [0.5, 1]);

	return (
		<motion.section ref={ref} style={{scale: scaleProgress, opacity: opacityProgress}} className="bg-[#e4e3c9] max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mt-3 mb-3 sm:mb-8 sm:mt-8 last:mb-0 group hover:bg-[#d2d0aa] ">
			<div className="flex flex-col pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full group-even:ml-[20rem]">
				<h3 className=" text-2xl font-semibold">{title}</h3>
				<p>{description}</p>
				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
					{
						tags.map((tag,index) => {
							return <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>;
						})
					}
				</ul>
			</div>
			<img src={imageUrl} alt={title} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:group-even:rotate-12 group-hover:-rotate-12 transition group-hover:translate-y-2 group-hover:scale-[1.03]"></img>
		</motion.section>
	);
}

export default Project;