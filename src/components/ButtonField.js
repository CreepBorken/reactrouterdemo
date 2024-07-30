/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { Button } from "primereact/button";

const ButtonField = (props) => {
  const onClick = (e) => {
    if (props.onClick !== null && typeof props.onClick === "function") {
      props.onClick(e);
    }
  };

  return (
    <>
      <div style={{ marginTop: "10px" }} className="p-float-label">
        <Button
          hidden={props.hidden}
          label={props.label}
          className={props.className}
          onClick={onClick}
          disabled={props.disabled}
          style={props.style}
          icon={props.icon}
          tooltip={props.tooltip}
          tooltipOptions={props.tooltipOptions}
        >
          {props.children}
        </Button>
      </div>
    </>
  );
};

export default ButtonField;
