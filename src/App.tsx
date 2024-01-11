import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {

  return (
      <div className="wrapper bg-custom text-gray-950 relative h-[5000px] pt-28 sm:pt-36">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] z-[-10] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] z-[-10] left-[-35rem] h-[31.25rem] w-[50rem] 
        rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        <HomePage />
      </div>
  );
}

export default App
