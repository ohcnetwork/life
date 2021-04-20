import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

import ambulanceData from "../../../temp/ambulance.json";
import AmbulanceCard from "../../../components/AmbulanceCard";

export default function Ambulance() {
  const route = useRouter();
  const { state, district } = route.query;
  const [ambulances, setAmbulances] = useState(ambulanceData)

  console.log(state, district, ambulances)

  useEffect(() => {
    if(state == undefined) state = "";
    if(district == undefined) district = "";
    let filteredAmbulances = ambulances.filter((ambulance) => (ambulance.state.includes(state) && ambulance.district.includes(district)));
    setAmbulances(filteredAmbulances);
  }, [state, district])

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {
        ambulances.map(({name, phone1, phone2, area, source, id}) => <AmbulanceCard key={id} name={name} phone1={phone1} phone2={phone2} area={area} source={source} />)
      }
    </div>
  );
}
