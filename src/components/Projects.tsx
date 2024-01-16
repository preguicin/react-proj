import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";
import { useGlobalContext } from "./GlobalContex";

const Projects: React.FC = () => {
	
	const { projectsRef } = useGlobalContext();
	
	return (
		<section ref={ projectsRef } className="scroll-m-10" id="projects">
			<SectionHeading text="Other music"/>
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


export default Projects;
