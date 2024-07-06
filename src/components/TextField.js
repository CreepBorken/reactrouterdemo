/* eslint-disable jsx-a11y/label-has-associated-control */
import React  from 'react';     
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const TextField =  (props) => {

    const onChange = (value) => {  
        if (props.onChange !== null && props.onChange !== undefined){
            props.onChange(value);
        } 
    }  
    const onBlur = (value) => {  
      if (props.onBlur !== null && props.onBlur !== undefined){
          props.onBlur(value);
      } 
    }  
    const onKeyDown = (value) => {  
      if (props.onKeyDown !== null && props.onKeyDown !== undefined){
          props.onKeyDown(value);
      } 
    }  
    const onClick = () => {  
      if (props.onClick !== null && props.onClick !== undefined){
          props.onClick(); 
      } 
  }  

    const isFormFieldInValid = (name) => !!(typeof(props.errors) !== 'undefined' && props.errors !== null && props.errors[name]);
    
    const getFormErrorMessage = (name) => { 
        return isFormFieldInValid(name) && <small className={props.isInputGroup||props.isInputAdd?'positionabsolute p-error':'p-error'}>{props.errors[name].message}</small>;
    };

    if(props.isInputGroup){
      return ( 
        <>
          <div className="p-float-label">
            <InputText 
              value={props.value === null ? '' : props.value} 
              onChange={onChange}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
              className={isFormFieldInValid(props.name) === true ? 'p-invalid' : ''}
              disabled={props.disabled}
              maxLength={props.maxLength}
              placeholder={props.placeholder}
              ref={props.reference}
              autoFocus={props.autoFocus}
            />    
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
            <Button
              disabled={props.disabled} 
              className={props.classGroup}
              icon={props.iconGroup}
              onClick={onClick}
            >
            </Button>
          </div> 
          { getFormErrorMessage(props.name) } 
        </>
        )
      }
    return (  
      <>  
        <span className="p-float-label">
          <InputText 
            value={props.value === null ? '' : props.value} 
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            className={isFormFieldInValid(props.name) === true ? 'p-invalid' : ''}
            disabled={props.disabled}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            ref={props.reference}
            type={props.type}
          />  
          <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
        </span>
        { getFormErrorMessage(props.name) } 
      </> 
    )
}   

    
export default TextField; 
