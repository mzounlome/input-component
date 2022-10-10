import "./App.scss";

import { MdLocalPhone, MdLock } from "react-icons/md";

// import { FrontIcon } from "./components/Inputs/style";
import Input from "./components/Inputs/Input";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="App">
      <SideNav />
      <div>
        <Input />
        <Input />
        <Input color="valid" />
        <Input />
        <Input />
        <Input />
        <Input disabled />
        <Input startIcon icon={<MdLocalPhone />} />
        {/* <FrontIcon> */}
        <Input />
        {/* </FrontIcon> */}
        <Input />
        <Input />
        <Input size="sm" />
        <Input />
        <Input size="fullWidth" />
        <Input />
      </div>
    </div>
  );
}

export default App;
