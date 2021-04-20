import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { stateJsonData } from "../data/states";
import Tabs from "../components/Tabs";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLungsVirus,
  faSyringe,
  faHospital,
  faPhoneAlt,
  faAmbulance,
  faCapsules,
} from "@fortawesome/free-solid-svg-icons";
import Selector from "../components/Selector";

const tabsInfo = [
  { name: "Oxygen", icon: faLungsVirus, link: "/" },
  { name: "Medicine", icon: faCapsules, link: "/medicines" },
  { name: "Hospital", icon: faHospital, link: "/hospitals" },
  { name: "Ambulance", icon: faAmbulance, link: "/ambulance" },
  { name: "Helpline", icon: faPhoneAlt, link: "/helpline" },
  { name: "Plasma", icon: faSyringe, link: "/plasma" },
];

export default function Home() {
  const [geoState, setGeoState] = useState("");
  const [geoDistrict, setGeoDistrict] = useState("");
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Life | Coronasafe network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs tabsInfo={tabsInfo} />
      <section></section>
      <section>
        <Selector />
      </section>
    </div>
  );
}
