import "./App.css";
import BodyContents from "./components/BodyContents";
import Navigation from "./components/Navigation";
import SideBarContents from "./components/SideBarContents";

function App() {
  return (
    <div className="">
      <div className="relative flex h-full">
        <SideBarContents />
        <BodyContents />
        <Navigation />
      </div>
    </div>
  );
}

export default App;
