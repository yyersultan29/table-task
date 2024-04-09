import { Cards } from './cards';
import { StateProvider } from './context/StateProvider';

import "./App.scss"
import { useTheme } from './context/ThemeProvider';
import { Header } from './header/header';
import {Navbar, Tooltip} from "../ui-component/src/components"
import { CheckBox } from './components/checkbox/checkbox';

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
      </div>
    </div>

  );
};

export default App;
