import About from "./About";
import Intro from "./Intro";
import Projects from "./Projects";
import SectionBar from "./SectionBar";

const HomePage:React.FC =  () => {
	return (
		<div className="flex flex-col items-center px-4">
			<Intro />
			<SectionBar/>
			<About />
			<Projects />
		</div>
	);
}


export default HomePage;