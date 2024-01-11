import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./SectionHeading";

const Projects: React.FC = () => {
	return (
		<section>
			<SectionHeading text="My Projects"/>
			<div>
				<div>
					{
						projectsData.map((project, index) => {
							return (
								<React.Fragment key={index}>
									<Project {...project}/>
								</React.Fragment>
							);
						})
					}
				</div>
			</div>
		</section>
	);
}

interface ProjectProps{
	title: string;
	description: string;
	tags: readonly string[];
	imageUrl: string;
}

const Project:React.FC<ProjectProps> = ({title, description, tags, imageUrl}) => {
	return (
		<section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mt-3 mb-3 sm:mb-8 sm:mt-8 last:mb-0 group hover:bg-gray-200 transition">
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
			<img src={imageUrl} alt={title} className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:group-even:rotate-12 group-hover:-rotate-12"></img>
		</section>
	);
}

export default Projects;
