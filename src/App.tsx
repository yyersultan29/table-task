import { Cards } from './cards';
import { StateProvider } from './context/StateProvider';

import "./App.scss"
import { useTheme } from './context/ThemeProvider';
import { Header } from './header/header';

const App = () => {
  const { theme } = useTheme();



  return (

    <div style={{
      background: theme.background,
      color: theme.text
    }}>
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
