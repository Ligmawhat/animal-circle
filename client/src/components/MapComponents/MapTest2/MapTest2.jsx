import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";
import Chat from "../../ChatComponents/Chat/Chat";
import NavBar from "../../Navbar/Navbar";
import { getAllPoints } from "../../redux/ac/mapAc";
import MapAddPoint from "./MapAddPoint";

const mapState = { center: [55.831903, 37.411961], zoom: 10 };

const PlacemarkDemo = () => {
  const [cords, setCords] = useState([]);

  const [point, setPoint] = useState([]);

  const tags = useSelector((state) => state.map);

  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPoints());
  }, []);

  const onPlaceMarkClick = (e, el) => {
    e.preventDefault();
    setSelected(el);
  };

  return (
    <>
      <NavBar />
      <Chat />

      {/* {selected && ( */}
      <div>
        <h1> О площадке {selected?.geotags_title}</h1>
        <p>{selected?.description}</p>
      </div>
      {/* )} */}
      <YMaps
        query={{
          apikey: "a1d74d39-8cef-45bf-b08e-15d2c7d52345",
        }}
        version={"2.1"}
      >
        <Map
          defaultState={mapState}
          width="500px"
          height="400px"
          onLoad={(ymaps) => console.log(ymaps)}
          instanceRef={(ref) => {}}
          onClick={(ev) => (
            ev.preventDefault(),
            setCords({ lat: ev.get("coords")[0], lon: ev.get("coords")[1] }),
            setPoint(
              <Placemark
                geometry={{
                  type: "Point",
                  coordinates: [ev.get("coords")[0], ev.get("coords")[1]],
                }}
                properties={{
                  hintContent: "Stack Overflow",
                  balloonContent: "Stack Overflow на русском",
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "./paw6.png",
                  iconImageSize: [50, 35],
                  iconImageOffset: [-25, -18],
                }}
              />
            )
          )}
        >
          {point}
          {/* <GeoObject
              // The geometry description.
              geometry={{
                type: "Point",
                coordinates: [55.8, 37.8],
              }}
              // Properties.
              properties={{
                // The placemark content.
                iconContent: "Я тащусь",
                hintContent: "Ну давай уже тащи",
              }}
              // Options.
              options={{
                // The placemark's icon will stretch to fit its contents.
                preset: "islands#blackStretchyIcon",
                // The placemark can be moved.
                draggable: true,
              }}
            /> */}

          <MapAddPoint setPoint={setPoint} point={point} cords={cords} />
          {tags?.length &&
            tags?.map((el, index) => (
              <Placemark
                key={el.id}
                geometry={{
                  type: "Point",
                  coordinates: [el.latitude, el.longitude],
                }}
                onClick={(e) => onPlaceMarkClick(e, el)}
                properties={{
                  hintContent: "Stack Overflow",
                  balloonContent: "Stack Overflow на русском",
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "./snoopy5.png",
                  iconImageSize: [50, 35],
                }}
              />
            ))}

          {/* <GeoObject
            // The geometry description.
            // onClick={onPlaceMarkClick()}
            geometry={{
              type: "Point",
              coordinates: [55.8, 37.8],
            }}
            // Properties.
            properties={{
              // The placemark content.
              iconContent: "Новая площадка",
              hintContent: "Ну давай уже тащи",
            }}
            // Options.
            options={{
              // The placemark's icon will stretch to fit its contents.
              preset: "islands#blackStretchyIcon",
              // The placemark can be moved.
              draggable: true,
            }}
          /> */}
        </Map>
      </YMaps>
    </>
  );
};

export default PlacemarkDemo;
