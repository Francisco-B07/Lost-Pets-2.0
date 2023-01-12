import React, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import css from "./index.css";
import { useMapboxLat, useMapboxLng, useMapboxUbicacion } from "hooks/pets";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYWxleGlzbXVub3oxIiwiYSI6ImNrdzVqb3loODJxYXAycHBhdjVzZWtpY3QifQ.V-0kAfHQOapkN5HrZdmUUA",
});

type MapBoxSearchProps = {
  onChange?: (any) => any;
  ubicacion?: string;
  latInicial?: number;
  lngInicial?: number;
};

function MapboxSeach(props: MapBoxSearchProps) {
  const { onChange, latInicial, lngInicial, ubicacion } = props;
  const [query, setQuery] = useState("");

  const initialCoords: any = [-68.5292228, -31.5346781];

  const [coords, setCoords] = useState(initialCoords);
  const [lat, setLat] = useMapboxLat();
  const [lng, setLng] = useMapboxLng();
  const [mapboxUbicacion, setMapboxUbicacion] = useMapboxUbicacion();

  useEffect(() => {
    if (ubicacion) {
      const coords = [lngInicial, latInicial];
      setLat(latInicial);
      setLng(lngInicial);
      setCoords(coords);
      setMapboxUbicacion(ubicacion);
    }
  }, [ubicacion]);

  async function search() {
    const data = await fetch(
      `https://us1.locationiq.com/v1/search.php?key=pk.bf4604bc2b3ea328e732de26a4387fa9&q=${query}&format=json`
    ).then((r) => r.json());
    let ubicacion = data[0].display_name;
    ubicacion = ubicacion.split(",");

    const lat = parseFloat(data[0].lat);
    const lon = parseFloat(data[0].lon);
    setLat(lat);
    setLng(lon);
    setMapboxUbicacion(ubicacion[0]);

    const newCoords = [lon, lat];
    setCoords(newCoords);

    if (onChange) {
      onChange({
        query: query,
        coords: newCoords,
      });
    }
  }

  function inputChangeHandler(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "300px",
          width: "300px",
        }}
        zoom={[14]}
        center={coords}
        movingMethod="flyTo"
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coords} />
        </Layer>
      </Map>
      <div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className={`form-control ${css.input}`}
            id="floatingInput"
            placeholder="UBICACIÓN"
            name="ubicacion"
            onChange={inputChangeHandler}
            value={query}
            defaultValue={ubicacion}
          />

          <label htmlFor="floatingInput">
            {ubicacion ? ubicacion : "UBICACIÓN"}{" "}
          </label>
        </div>

        <button className={css.button} onClick={search} type="button">
          Buscar
        </button>
      </div>
    </div>
  );
}

export { MapboxSeach };
