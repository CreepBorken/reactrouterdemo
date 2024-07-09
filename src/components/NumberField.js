/* eslint-disable jsx-a11y/label-has-associated-control */
import React  from 'react';     
import { InputNumber } from 'primereact/inputnumber';

const NumberField =  (props) => {
    
    const onChange = (value) => {  
        if (props.onChange !== null){
            props.onChange(value);
        } 
    }  

    
    const isFormFieldInValid = (name) => !!(typeof(props.errors) !== 'undefined' && props.errors !== null && props.errors[name]);
    
    const getFormErrorMessage = (name) => { 
        return isFormFieldInValid(name) && <small className="p-error">{props.errors[name].message}</small>;
    };

    if(props.isInputGroup){
      return ( 
        <> 
          <div className="p-inputgroup">
            <span hidden={!props.isGroupLeft} className="p-inputgroup-addon">
              <i className={props.classGroupLeft}>
                {props.labelGroupLeft}
              </i>
            </span>
            <InputNumber
              value={props.value === null ? '' : props.value} 
              onValueChange={onChange}
              className={isFormFieldInValid(props.name) === true ? ' p-invalid' : ''}
              mode="decimal"
              locale="en-US"
              minFractionDigits={props.minFractionDigits}
              showButtons={props.showButtons}
              min={props.min}
              max={props.max}
              useGrouping={props.useGrouping}
              buttonLayout={props.buttonLayout}
              decrementButtonClassName={props.decrementButtonClassName}
              incrementButtonClassName={props.incrementButtonClassName}
              incrementButtonIcon={props.incrementButtonIcon} 
              decrementButtonIcon={props.decrementButtonIcon} 
              disabled={props.disabled}
            />   
            <span className="p-inputgroup-addon" hidden={!props.isGroupRight}>
              <i className={props.labelGroupRight}>
                {props.labelGroupRight}
              </i>
            </span>
          </div>
          <span className="p-float-label">
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
          </span>
          { getFormErrorMessage(props.name) } 
        </> 
      )
    }
      return (
        <> 
          <span style={{marginTop: "10px"}} className="p-float-label">
            <InputNumber
              value={props.value === null ? '' : props.value} 
              onValueChange={onChange}
              className={isFormFieldInValid(props.name) === true ? `${props.className} p-invalid` : `${props.className  }`}
              mode="decimal"
              locale="en-US"
              minFractionDigits={props.minFractionDigits}
              maxFractionDigits={props.maxFractionDigits}
              showButtons={props.showButtons}
              min={props.min}
              max={props.max} 
              maxLength={props.maxLength}
              useGrouping={props.useGrouping}
              buttonLayout={props.buttonLayout}
              decrementButtonClassName={props.decrementButtonClassName}
              incrementButtonClassName={props.incrementButtonClassName}
              incrementButtonIcon={props.incrementButtonIcon} 
              decrementButtonIcon={props.decrementButtonIcon} 
              disabled={props.disabled}
            />  
            <label className={isFormFieldInValid(props.name) === true ? 'p-error' : ''}>{props.label}</label>
          </span>
          { getFormErrorMessage(props.name) } 
        </> 
      )
}   

    
export default NumberField; 
