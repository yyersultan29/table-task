// ThemeProvider.js
import { useState, useContext, FC } from 'react';
import { lightTheme, darkTheme } from '../themes/theme';
import { ProviderProps } from './StateProvider';
import { ThemeContext, ThemeContextValues } from './ThemeContext';




const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextValues => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme, ThemeContext };
