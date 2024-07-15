import { useEffect, useRef } from "react";
import "./App.scss";
import { load } from "@2gis/mapgl";
// import { useEffect } from "react";
import Cookeis from "js-cookie";
import { YMap, YMapsProvider } from "re-ymaps";

// const getRandomList = () => new Array(10_000).fill(0).map((_,index) => Math.random());

export default function App() {
  return (
    <div className="App flex flex-col gap-5">
      <h1>2GIS MAP</h1>
      {/* map container */}
      <YMapsProvider>
        <YMap></YMap>
      </YMapsProvider>
    </div>
  );
}
