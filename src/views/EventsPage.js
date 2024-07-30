import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import EventDetailPage from "./EventDetailPage";
import ButtonField from "../components/ButtonField";

function EventsPage() {
  const columns = [
    {
      id: 1,
      eventname: "Event 1",
      eventdate: "2024-10-01",
      owner: "Sarah Blank",
      invites: 150,
    },
    {
      id: 2,
      eventname: "Event 2",
      eventdate: "2024-10-02",
      owner: "Harry Kane",
      invites: 250,
    },
    {
      id: 3,
      eventname: "Event 3",
      eventdate: "2024-10-03",
      owner: "Joe Dow",
      invites: 150,
    },
    {
      id: 4,
      eventname: "Event 4",
      eventdate: "2024-10-04",
      owner: "John Smith",
      invites: 450,
    },
  ];


  const [products, setProducts] = useState(columns);
  const [ShowEvent, setShowEvent] = useState(false);

  const onHideEvent = () => {
    setShowEvent(false);
  };

  const onEventInfo = (rowData) => {
    setShowEvent(true);
    console.log(rowData);
  };

  const EventActionTemplate = (rowData) => {
    return (
      <ButtonField
        className="mr-2 mb-2 p-button-info p-button-text"
        icon="pi pi-info-circle"
        onClick={() => onEventInfo(rowData)}
      />
    );
  };

  return (
    <>
      <div className="main">
        <div className="content shadow-2 p-3">
          <h1>Event Page</h1>

          <div className="grid p-2 m-1">
            <div className="col-12 md:col-12 lg:col-12">
              <DataTable
                value={products}
                tableStyle={{ minWidth: "50rem" }}
                showGridlines
              >
                <Column field="id" header="id" />
                <Column field="eventname" header="eventname" />
                <Column field="eventdate" header="eventdate" />
                <Column field="owner" header="owner" />
                <Column field="invites" header="invites" />
                <Column header="Actions" body={EventActionTemplate} />
              </DataTable>
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        visible={ShowEvent}
        blockScroll={true}
        position="right"
        style={{ width: "100em" }}
        baseZIndex={1000}         
        onHide={() => setShowEvent(false)}
        showCloseIcon={true}
      >
        <EventDetailPage ></EventDetailPage>
        {/* {ShowEvent ? (
          
        ) : (
          <></>
        )} */}
      </Sidebar>
    </>
  );
}

export default EventsPage;
