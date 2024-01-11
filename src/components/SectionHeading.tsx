import React from "react";

interface SectionHeadingProps{
	text: string;
}

const SectionHeading:React.FC<SectionHeadingProps> = ({text}) => {
	return (
		<h2 className="text-[5rem] font-medium  pb-4 pt-4 text-center">{text}</h2>
	);
};

export default SectionHeading;