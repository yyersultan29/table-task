import { Cards } from './cards';
import { StateProvider } from './context/StateProvider';

import "./App.scss"

const MyComponent = () => {


  return (
    <div>
      <div className='flex justify-center p-[20px]'>
        <StateProvider>
          <Cards />
        </StateProvider>
      </div>
    </div>
  );
};

export default MyComponent;
