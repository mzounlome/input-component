import "./App.scss";

import InputDisplay from "./components/Inputs/InputDisplay";
import SideNav from "./components/SideNav/SideNav";
function App() {
  return (
    <div className="App">
      <SideNav />
      <InputDisplay />
    </div>
  );
}

export default App;
