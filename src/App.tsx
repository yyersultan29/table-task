import { Cards } from './cards';
import { StateProvider } from './context/StateProvider';

import "./App.scss"
import { Header } from './header/header';
import { useTheme } from './context/ThemeProvider';
import { Navbar, Tooltip} from "../ui-component/src/components"


const App = () => {
  const { theme } = useTheme();

  const size = 24;
  return (

    <div style={{
      background: theme.background,
      color: theme.text
    }}>
      <h1>Life is good</h1>
      {size + 1}
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
