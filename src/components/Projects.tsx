import React from "react";
import { projectsData } from "../lib/data";
import SectionHeading from "./SectionHeading";
import Project from "./Project";

const Projects: React.FC = () => {
	return (
		<section className="scroll-m-10" id="projects">
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


export default Projects;
