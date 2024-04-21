import  { useState } from 'react';

import { Button, Dropdown, Menu, Slider } from 'antd';

const  DropdownWithSlider = () => {
    
    const [value,setValue] = useState([0,10]);

    const handleSliderChange = (value: any) => {
        // setState({ value });
        setValue(value)  
    };

    const menu = (
      <Menu>
          <Slider
            value={value}
            onChange={handleSliderChange}
            range
            trackStyle={[{backgroundColor:"#27AE60"}]}
            handleStyle={[{backgroundColor: "#27AE60"}]}
          />
        <Button>Submit</Button>
      </Menu>
    );

    return (
      <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
        <Button style={{ cursor: 'pointer' }}>Price</Button>
      </Dropdown>
    );
}
  


export default DropdownWithSlider;
