import SectionHeading from "./SectionHeading";
import { useGlobalContext } from "./GlobalContex";

const About:React.FC = () => {
	
	const { aboutRef } = useGlobalContext();
	
	return (
		<section ref={ aboutRef } className="max-w-[45rem] text-center scroll-m-10" id="about">
			<SectionHeading text="Luv(sic)"></SectionHeading>

			<p className="mb-3">
				Good gracious, every process has a genesis and ends with a revelation
				God bless this opportunity for me to find a voice
				For some words that have waited for way too long
				Low wages, small tips on the avenue
				Never wasted, all hits for a revenue
			</p>
			<p className="mb-3">
				Haven't you heard the news lately?
				Seems we've been living for some time in a purgatory
				But yo, I thought I knew what a love song sound like
				But I felt a warmer tune in the sunlight
				I could still hear it in my room past midnight
				Gotta move, take a solo cruise in the moon light
			</p>
		</section>
	);
};

export default About;