import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { stateJsonData } from "../data/states";
import Selector from "../components/Selector";
const tabsArr = [
  "Oxygen",
  "Medicine",
  "Ambulance",
  "Plasma",
  "Helpline",
  "Hospital",
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
      <div className="py-4 flex items-center justify-around">
        {tabsArr.map((tb) => (
          <Link href={`/${tb}`}>
            <p>{tb}</p>
          </Link>
        ))}
      </div>
      <section>
        <Selector />
      </section>
    </div>
  );
}
