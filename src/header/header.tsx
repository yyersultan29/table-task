import { Button } from "../components/button/button"
import { useTheme } from "../context/ThemeProvider"


export const Header = () => {
  const { toggleTheme } = useTheme();

  // console.log(theme);


  return (
    <header className='w-full bg-gray-600 p-[10px]'>
      <div className="flex gap-[20px]" >
        <Button view="ghost" onClick={toggleTheme} >Light</Button>
        <Button view="primary" onClick={toggleTheme}>Dark</Button>
      </div>

    </header>
  )
}