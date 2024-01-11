import Intro from "./Intro";
import SectionBar from "./SectionBar";

const HomePage:React.FC =  () => {
	return (
		<div className="flex flex-col items-center px-4">
			<Intro />
			<SectionBar/>
		</div>
	);
}


export default HomePage;