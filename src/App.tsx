import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { ContextProvider } from "./components/GlobalContex"
import Observer from "./components/Observer";


function App() {

  return (
      <div className="wrapper bg-[#afac6e] text-gray-950 relative h-[5000px] pt-28 sm:pt-36">
          <ContextProvider>
            <Observer />
            <Header />
            <HomePage />
          </ContextProvider>

      </div>
  );
}

export default App