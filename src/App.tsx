import { Cards } from './cards';
import { StateProvider } from './context/StateProvider';

import "./App.scss"
import { Header } from './header/header';
import { useTheme } from './context/ThemeProvider';
import { Navbar, Tooltip} from "../ui-component/src/components"
import {ArrowIcon} from "../ui-component/src/components/icons/arrow";


const App = () => {
  const { theme } = useTheme();

  return (

    <div style={{
      background: theme.background,
      color: theme.text
    }}>
      <Navbar />
      <Tooltip />
      <Header />
      <div className='flex justify-center p-[20px]'>
        <StateProvider>
          <Cards />
        </StateProvider>
        <ArrowIcon />
      </div>
    </div>

  );
};

export default App;
