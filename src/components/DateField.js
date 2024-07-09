/* eslint-disable jsx-a11y/label-has-associated-control */
import React  from 'react';     
import { Calendar } from 'primereact/calendar';

const DateField =  (props) => {
     
    const onChange = (value) => {
        if (props.onChange !== null){

            if (props.selectionMode === "range"){
              props.onChange(value.value);
            }else{ 
              props.onChange(value);
            }
        } 
    }  

    const isFormFieldInValid = (name) => !!(typeof(props.errors) !== 'undefined' && props.errors !== null && props.errors[name]);
    
    const getFormErrorMessage = (name) => {   
        return isFormFieldInValid(name) && <small className="p-error">{props.errors[name].message}</small>;
    };

  return (  
        props.isTime !== undefined ? 
        (
          <>
            <span style={{marginTop: "10px"}} className="p-float-label">
              <Calendar
                value={props.value}
                onChange={onChange}
                timeOnly
                hourFormat="24"
                showIcon   
                className={` ${props.className === undefined ? '' : props.className} ${isFormFieldInValid(props.name) === true ? 'p-invalid' : ''} `}
                selectionMode={props.selectionMode}
                disabled={props.disabled}
                placeholder={props.placeholder}
                dateFormat={props.dateFormat}
                mask={props.mask}
                maxDate={props.maxDate}
              />   
            </span>
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
            {getFormErrorMessage(props.name)}
          </>
        )
        :
        (
          <>
            <span style={{marginTop: "10px"}} className="p-float-label">
              <Calendar
                value={props.value}
                onChange={onChange}
                showIcon  
                className={` ${props.className === undefined ? '' : props.className} ${isFormFieldInValid(props.name) === true ? 'p-invalid' : ''} `}
                selectionMode={props.selectionMode}
                yearRange={props.yearRange}
                monthNavigator={props.monthNavigator}
                yearNavigator={props.yearNavigator} 
                disabled={props.disabled}
                placeholder={props.placeholder}
                dateFormat={props.dateFormat}
                mask={props.mask}
                maxDate={props.maxDate}
              />  
            </span>   
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
            {getFormErrorMessage(props.name)}
          </>
        ) 
    )
}   

    
export default DateField; 


