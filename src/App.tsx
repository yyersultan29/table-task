
import "./App.scss"
import DropdownWithSlider from "./components/dropdown/dropdown";
import { ModelsDropdown } from "./components/dropdown/models-dropdown";
import { CustomDropDown } from "./components/dropdown/cutom-dropdown";




export const text = "Changes from MASTER branch";

const App = () => {

  return (
    
    <div className="p-7 flex gap-[40px]">
     
     <DropdownWithSlider />

     <ModelsDropdown />

     <CustomDropDown />

    </div>

  );
};

export default App;
