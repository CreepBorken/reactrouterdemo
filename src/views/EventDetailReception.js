import React, { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import DropdownField from "../components/DropdownField";
import { InputText } from "primereact/inputtext";
import TextField from "../components/TextField";

function EventDetailReception() {
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

  const [VenueList, setVenueList] = useState(venuesData);
  const [Venue, setVenue] = useState(null);

  return (
    <>
      {/* <DropdownField
        disabled={false}
        name="Church"
        value={Church}
        label="Church"
        options={ChurchList}
        onChange={(e) => setChurch(e.target.value)}
        optionValue="ClaIglesia"
        optionLabel="NomIglesia"
        showClear={true}
      /> */}

      <div className="grid col-12 md:col-12 lg:col-12">
        <div className="col-12 md:col-4 lg:col-4 p-fluid">
          <FloatLabel>
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
          </FloatLabel>
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-fluid">
          <TextField type="text" label="Event Time" value={5} />
        </div>
        <div className="col-12 md:col-4 lg:col-4 p-fluid">
          <FloatLabel>
            <DropdownField
              disabled={false}
              name="Venue"
              value={Venue}
              label="Sillas"
              options={VenueList}
              onChange={(e) => setVenue(e.target.value)}
              optionValue="ClaVenue"
              optionLabel="NomVenue"
              showClear={true}
            />
          </FloatLabel>
        </div>
      </div>
    </>
  );
}

export default EventDetailReception;
