import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import TextField from "../components/TextField";
import DateField from "../components/DateField";
import { Calendar } from "primereact/calendar";
import { TabView, TabPanel } from "primereact/tabview";
import DropdownField from "../components/DropdownField";

function EventDetailPage() {
  const venuesData = [
    {
      ClaVenue: 1,
      NomVenue: "Airo",
    },
    {
      ClaVenue: 2,
      NomVenue: "Casino Monterrey",
    },
    {
      ClaVenue: 3,
      NomVenue: "Casona de San Pedro",
    },
    {
      ClaVenue: 4,
      NomVenue: "Club Industrial",
    },
  ];

  const eventTypeData = [
    {
      ClaTipoEvento: 1,
      NomTipoEvento: "Wedding",
    },
    {
      ClaTipoEvento: 2,
      NomTipoEvento: "XV Anniversary",
    },
    {
      ClaTipoEvento: 3,
      NomTipoEvento: "Bachelorette Party",
    },
    {
      ClaTipoEvento: 4,
      NomTipoEvento: "Baptism and Christening Party",
    },
  ];

  const churchesData = [
    {
      ClaIglesia: 1,
      NomIglesia: "Basílica Nuestra Señora del Roble",
    },
    {
      ClaIglesia: 2,
      NomIglesia: "Santuario de la Virgen de Guadalupe",
    },
    {
      ClaIglesia: 3,
      NomIglesia: "Iglesia San Luis Gonzaga",
    },
    {
      ClaIglesia: 4,
      NomIglesia: "Templo Dolores y Perpetuo Socorro",
    },
  ];

  const [value, setValue] = useState("");
  const [EventLocation, setEventLocation] = useState(null);
  const [EventDate, setEventDate] = useState(null);
  const [EventTime, setEventTime] = useState(null);

  const [VenueList, setVenueList] = useState(venuesData);
  const [Venue, setVenue] = useState(null);

  const [EventTypeList, setEventTypeList] = useState(eventTypeData);
  const [EventType, setEventType] = useState(null);

  const [ChurchList, setChurchList] = useState(churchesData);
  const [Church, setChurch] = useState(null);

  const [errors, setErrors] = useState(null);

  const onChangeEventDate = (e) => {
    // const newErrors = { ...errors };
    // delete newErrors.startDate;
    // setErrors(newErrors);
    // console.log(e);
    setEventDate(e.value);
  };

  return (
    <>
      <div className="grid p-1 m-1">
        <div className="col-12 md:col-12 lg:col-12">
          <h1>EventDetailPage</h1>
          <hr className="my-3 mx-0 border-top-1 border-bottom-none border-300" />
        </div>
        <div className="grid col-12 md:col-12 lg:col-12">
          <div className="col-12 md:col-2 lg:col-2 p-fluid">
            <FloatLabel>
              <DateField
                value={EventDate}
                name="EventDate"
                onChange={(e) => setEventDate(e.value)}
                dateFormat="dd/mm/yy"
                selectionMode="single"
                label="Event Date"
              />
            </FloatLabel>
          </div>
          <div className="col-12 md:col-2 lg:col-2 p-fluid">
            <FloatLabel style={{ marginTop: "10px" }}>
              <Calendar
                value={EventTime}
                onChange={(e) => setEventTime(e.value)}
                showIcon
                timeOnly
                icon={() => <i className="pi pi-clock" />}
                hourFormat="12"
              />
              <label>Event Time</label>
            </FloatLabel>
          </div>

          <div className="col-12 md:col-2 lg:col-2 p-fluid">
            <DropdownField
              disabled={false}
              name="EventType"
              value={EventType}
              label="Event Type"
              options={EventTypeList}
              onChange={(e) => setEventType(e.target.value)}
              optionValue="ClaTipoEvento"
              optionLabel="NomTipoEvento"
              showClear={true}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3 p-fluid">
            <DropdownField
              disabled={false}
              name="Venue"
              value={Venue}
              label="Venues & Event Places"
              options={VenueList}
              onChange={(e) => setVenue(e.target.value)}
              optionValue="ClaVenue"
              optionLabel="NomVenue"
              showClear={true}
            />
          </div>

          <div className="col-12 md:col-3 lg:col-3 p-fluid">
            <DropdownField
              disabled={false}
              name="Church"
              value={Church}
              label="Church"
              options={ChurchList}
              onChange={(e) => setChurch(e.target.value)}
              optionValue="ClaIglesia"
              optionLabel="NomIglesia"
              showClear={true}
            />
          </div>
          {/* <div className="col-6 p-fluid">
          <FloatLabel>
            <TextField
              type="text"
              placeholder="8308 Woodland Dr.Union, NJ 07083"
              onChange={(e) => setEventLocation(e.target.value)}
              value={EventLocation}
              label="Event Address"
            />            
            </FloatLabel>
            </div> */}
        </div>
      </div>
      <div className="card" style={{maxWidth: "95vw"}}>
      
            <TabView className="" scrollable={true}>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Recepcion"}
                header="Recepcion"
              ></TabPanel>
               <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Decoracion"}
                header="Decoracion"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Invitacion & Confirmacion"}
                header="Invitacion & Confirmacion"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Fotos & Videos"}
                header="Fotos & Videos"
              ></TabPanel>
              {/*<TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Musica"}
                header="Musica"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Religiosa"}
                header="Religiosa"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Civil"}
                header="Civil"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Torna"}
                header="Torna"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"
                key = {"Extras"}
                header="Extras"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"                
                header="Extras"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"                
                header="Extras"
              ></TabPanel>
              <TabPanel
                leftIcon="pi pi-calendar mr-2"                
                header="Extras"
              ></TabPanel> */}
            </TabView>        
            </div>
    </>
  );
}

export default EventDetailPage;
