import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import TextField from "../components/TextField";
import DateField from "../components/DateField";
import { Calendar } from "primereact/calendar";

function EventDetailPage() {
  const [value, setValue] = useState("");
  const [EventDate, setEventDate] = useState(null);

  const [errors, setErrors] = useState(null);

  const onChangeEventDate = (e) => {
    // const newErrors = { ...errors };
    // delete newErrors.startDate;
    // setErrors(newErrors);
    // console.log(e);
    setEventDate(e.value);
  };

  return (
    <div className="grid p-1 m-1">
      <div className="col-12 md:col-12 lg:col-12">
        <h1>EventDetailPage</h1>
        <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
      </div>
      <div className="grid col-12 md:col-12 lg:col-12">
        <div className="col-4 p-fluid">
          {/* <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Date</label>
          </FloatLabel> */}

          <TextField
            type="text"
            placeholder={"Date"}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </div>
        <div className="col-4 p-fluid">
          {/* <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Time</label>
          </FloatLabel> */}
          <span className="p-float-label">
            <DateField
              value={EventDate}
              name="EventDate"              
              onChange={(e) => setEventDate(e.value)}
              dateFormat="dd/mm/yy"              
              selectionMode="single"
            />
          </span>
        </div>
        <div className="col-4 p-fluid">
          <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Duration</label>
          </FloatLabel>
        </div>
      </div>
      <div className="grid col-12 md:col-12 lg:col-12">
        <div className="col-4 p-fluid">
          <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Location</label>
          </FloatLabel>
        </div>
        <div className="col-4 p-fluid">
          <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Size</label>
          </FloatLabel>
        </div>
        <div className="col-4 p-fluid">
          <FloatLabel>
            <InputText
              value={value}
              className="p-inputtext-sm"
              maxLength="50"
              onChange={(e) => setValue(e.target.value)}
            />
            <label>Username</label>
          </FloatLabel>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
