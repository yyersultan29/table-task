import  { useMemo, useState } from 'react';

import { Button, Dropdown, Menu, Slider } from 'antd';

export const  ModelsDropdown = () => {
    
    const [values,setValues] = useState(new Set());

    const handleClick = (value: string) => {
      if(!values.has(value)){
        setValues(new Set([...values,value]));
      } else{
        const copyValues = new Set([...values]);
        copyValues.delete(value);
        setValues(copyValues);
      }
    };
    

    const menu = useMemo(() => (
      <Menu>
          <div className="w-[300px] flex flex-wrap gap-3">

            <Button type={values.has("hyundai") ? "primary": "default"} onClick={() => handleClick("hyundai")}>
              Hyundai
            </Button>
            <Button type={values.has("sharp") ? "primary": "default"} style={{backgroundColor: "initial"}} onClick={() => handleClick("sharp")}>
              Sharp
            </Button>
            <Button type={values.has("beko") ?"primary": "default"}  onClick={() => handleClick("beko")}>
              Beko
            </Button>
            <Button type={values.has("indesit") ?"primary": "default"}  onClick={() => handleClick("indesit")}>
              Indesit
            </Button>
            <Button type={values.has("atlant") ?"primary": "default"}  onClick={() => handleClick("atlant")}>
              ATLANT
            </Button>
          </div>

      </Menu>
    ),[values]);

    return (
      <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
        <Button style={{ cursor: 'pointer' }}>Models</Button>
      </Dropdown>
    );
}
  



