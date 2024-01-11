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
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
			<ul>
				{
					tags.map((tag,index) => {
						return <li key={index}>{tag}</li>;
					})
				}
			</ul>
		</section>
	);
}

export default Projects;
