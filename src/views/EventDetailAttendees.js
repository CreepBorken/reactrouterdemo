import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ButtonField from "../components/ButtonField";

function EventDetailAttendees() {
  const attendeesData = [
    {
      rsvp: 1,
      names: 'Sarah',
      lastnames: 'Dow',
      phonenumber: '8111457625',
      relation: 'Family',
      from: 'Groom',
    },
    {
      rsvp: 2,
      names: 'Betty',
      lastnames: 'Year',
      phonenumber: '8111457625',
      relation: 'Friend',
      from: 'Bride',
    },
    {
      rsvp: 3,
      names: 'Nick',
      lastnames: 'Uderfork',
      phonenumber: '8111457625',
      relation: 'Family',
      from: 'Groom',
    },
    {      
      rsvp: 4,
      names: 'Jhon',
      lastnames: 'Dow',
      phonenumber: '8111457625',
      relation: 'Friend',
      from: 'Bride',
    },
  ];

  const [AttendeesList, setAttendeesList] = useState(attendeesData);

  const onAttendeeClick = () =>{
    console.log("onAttendeeClick");
  }

  const AttendeeAction = (rowData) => {
    return (
      <ButtonField
        className="mr-2 mb-2 p-button-info p-button-text"
        icon="pi pi-info-circle"
        onClick={() => onAttendeeClick(rowData)}
      />
    );
  };

  return (
    <>
      <div className="webonly grid col-12 md:col-12 lg:col-12">
        <DataTable
          value={AttendeesList}
          tableStyle={{ minWidth: "95rem" }}
          showGridlines
        >
          <Column hidden field="rsvp" header="# RSPV" style={{ minWidth: '40px', maxWidth: '40px' }} />
          <Column field="names" header="Name" style={{ minWidth: '200px', maxWidth: '200px' }} />
          <Column field="lastnames" header="Last Names" style={{ minWidth: '200px', maxWidth: '200px' }} />
          <Column field="phonenumber" header="Number" style={{ minWidth: '60px', maxWidth: '60px' }} />
          <Column field="relation" header="Relation" style={{ minWidth: '60px', maxWidth: '60px' }} />
          <Column field="from" header="From" style={{ minWidth: '60px', maxWidth: '60px' }} />
          <Column header="Actions" body={AttendeeAction} />
        </DataTable>
      </div>
    </>
  );
}

export default EventDetailAttendees;
