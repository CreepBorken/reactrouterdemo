import React  from 'react';     
import { Dropdown } from 'primereact/dropdown'; 

const DropdownField =  (props) => {
    
    const onChange = (value) => {  
        if (props.onChange !== null){
            props.onChange(value);
        } 
    }  

    const isFormFieldInValid = (name) => !!(typeof(props.errors) !== 'undefined' && props.errors !== null && props.errors[name]);
    
    const getFormErrorMessage = (name) => {  
      return isFormFieldInValid(name) && <small className={props.IsGroup?'positionabsolute p-error':'p-error'}>{props.errors[name].message}</small>;
    };

    if(typeof(props.showClear) !== 'undefined'  && !props.showClear)
    {
      return (
        <>  
            <Dropdown  
              value={props.value} 
              options={props.options}  
              optionValue={props.optionValue}
              optionLabel={props.optionLabel}
              onChange={onChange}
              className={isFormFieldInValid(props.name) === true ? 'p-invalid' : ''}
              placeholder={props.placeholder}
              filter={props.options !==null ? (props.options.length !== null ? props.options.length > 10 : false) : false} 
              disabled={props.disabled}
              itemTemplate={props.itemTemplate}
            />
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
        
          { getFormErrorMessage(props.name) } 
        
        </>
        );
    }
      return (  
        <>  
          <span style={{marginTop: "10px"}} className="p-float-label">
            <Dropdown  
              value={props.value} 
              options={props.options}  
              optionValue={props.optionValue}
              optionLabel={props.optionLabel}
              onChange={onChange}
              className={isFormFieldInValid(props.name) === true ? 'p-invalid' : ''}
              placeholder={props.placeholder}
              filter={props.options !==null ? (props.options.length !== null ? props.options.length > 10 : false) : false} 
              showClear
              disabled={props.disabled}
              itemTemplate={props.itemTemplate}
            />
            <label  className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
          </span>
          { getFormErrorMessage(props.name) } 
        </> 
      )
}   
    
export default DropdownField; 
