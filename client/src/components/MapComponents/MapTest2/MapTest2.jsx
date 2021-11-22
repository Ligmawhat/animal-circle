import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { YMaps, Map, GeoObject, Placemark, withYMaps } from "react-yandex-maps";
import Chatik from "../Chatik/Chatik";
import MapAddPoint from "./MapAddPoint";

const mapState = { center: [57.76, 37.64], zoom: 5 };

const db = [
  { geometry: { coordinates: [60.801773, 37.697725], type: "Point" } },
  {
    geometry: { coordinates: [50.801773, 35.697725], type: "Point" },
    properties: {
      iconContent: "Я",
    },
    options: { preset: "islands#blackStretchyIcon", draggable: true },
  },
];

const PlacemarkDemo = () => {
  // ymaps.ready(init);
  // var myMap;

  // function init () {
  //     myMap = new ymaps.Map("map", {
  //         center: [57.5262, 38.3061], // Uglich
  //         zoom: 11
  //     }, {
  //         balloonMaxWidth: 200,
  //         searchControlProvider: 'yandex#search'
  //     });

  //     /**
  //      * Processing events that occur when the user
  //      * left-clicks anywhere on the map.
  //      * When such an event occurs, we open the balloon.
  //      */
  //     myMap.events.add('click', function (e) {
  //         if (!myMap.balloon.isOpen()) {
  //             var coords = e.get('coords');
  //             myMap.balloon.open(coords, {
  //                 contentHeader:'Event!',
  //                 contentBody:'<p>Someone clicked on the map.</p>' +
  //                     '<p>Click coordinates: ' + [
  //                     coords[0].toPrecision(6),
  //                     coords[1].toPrecision(6)
  //                     ].join(', ') + '</p>',
  //                 contentFooter:'<sup>Click again</sup>'
  //             });
  //         }
  //         else {
  //             myMap.balloon.close();
  //         }
  //     });

  //     /**
  //      * Processing events that occur when the user
  //      * right-clicks anywhere on the map.
  //      * When such an event occurs, we display a popup hint
  //      * at the point of click.
  //      */
  //     myMap.events.add('contextmenu', function (e) {
  //         myMap.hint.open(e.get('coords'), 'Someone right-clicked');
  //     });

  //     // Hiding the hint when opening the balloon.
  //     myMap.events.add('balloonopen', function (e) {
  //         myMap.hint.close();
  //     });
  // }

  // const PositionedMap = React.memo(({ ymaps }) => {
  //   const [loadedCoords, setLoading] = React.useState(false);
  //   const [coords, setCoords] = React.useState([55.751574, 37.573856]);

  //   const onLoad = () => {
  //     ymaps.geolocation.geocode
  //       .get({
  //         provider: "browser",
  //         mapStateAutoApply: true
  //       })
  //       .then(res => {
  //         setCoords(res.geoObjects.position);
  //         setLoading(true);
  //       });
  //   };

  //   React.useEffect(() => {
  //     onLoad();
  //   }, []);

  //   return (
  //     loadedCoords && (
  //       <Map
  //         state={{
  //           center: coords,
  //           zoom: 10
  //         }}
  //       />
  //     )
  //   );
  // });

  // const ConnectedMap = React.useMemo(() => {
  //   return withYMaps(PositionedMap, true, [["geolocation", "geocode"]]);
  // }, [PositionedMap]);

  // return (
  //   <div className="App">
  //     <YMaps query={{ apikey: "52512926-86c8-42a8-b561-e1fb75733b4a" }}>
  //       <ConnectedMap />
  //     </YMaps>
  //   </div>
  // );
  // }

  //   // const classes = useStyles();
  //   let myMap;

  // function myGeoCode(ymaps, myMap, address) {
  //     ymaps.geocode(address, {
  //         results: 1
  //     }).then(function (res) {
  //         // Выбираем первый результат геокодирования.
  //         let firstGeoObject = res.geoObjects.get(0)
  //         // Координаты геообъекта.
  //         let coords = firstGeoObject.geometry.getCoordinates()
  //         // Область видимости геообъекта.
  //         let bounds = firstGeoObject.properties.get('boundedBy');

  //         firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
  //         // Получаем строку с адресом и выводим в иконке геообъекта.
  //         //firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

  //         // Добавляем первый найденный геообъект на карту.
  //         myMap.geoObjects.add(firstGeoObject);
  //         // Масштабируем карту на область видимости геообъекта.
  //         myMap.setBounds(bounds, {
  //             // Проверяем наличие тайлов на данном масштабе.
  //             checkZoomRange: true
  //         });

  //         let myPlacemark = new ymaps.Placemark(coords, {
  //             iconContent: 'моя метка',
  //         }, {
  //             preset: 'islands#violetStretchyIcon'
  //         });

  //         myPlacemark.events.add('click', function() {
  //             alert(address)
  //         });

  //         myMap.geoObjects.add(myPlacemark);
  //     });
  // }

  //     function init(ymaps, myMap) {
  //         checkedObjects.forEach(address => myGeoCode(ymaps, myMap, `${address.district.city.name}, ${address.address}`))
  //     }

  //   return

  // (
  //   <YMaps
  //     query={{
  //       ns: 'use-load-option',
  //       apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
  //       load: 'package.full'
  //     }}
  //   >
  //     <Map
  //       // key={checkedObjects}
  //       state={{
  //         center: [],
  //         zoom: 9,
  //         controls: ['zoomControl', 'fullscreenControl']
  //       }}
  //       modules={["geolocation", "geocode"]}
  //       onLoad={ymaps => {
  //           ymaps.ready(() => {
  //               init(ymaps, myMap)
  //           });
  //       }}
  //       instanceRef={yaMap => {
  //           if (yaMap) {
  //               myMap = yaMap;
  //           }
  //       }}
  //       // className={classes.mapContainterStyle}
  //     />
  //   </YMaps>
  // )
  // };

  const [point, setPoint] = useState(null);

  //   // function createPlacemark(coords) {
  //   //   return new window.ymaps.Placemark(
  //   //     coords,
  //   //     {
  //   //       iconCaption: "поиск", // balloon
  //   //     },
  //   //     {
  //   //       preset: "islands#blueAutoIcon", //preset
  //   //       draggable: true,
  //   //     }
  //   //   );
  //   // }

  //   //   myPlacemark = createPlacemark(newCoords);
  //   //   myMap.geoObjects.add(myPlacemark);
  //   //   // Слушаем событие окончания перетаскивания на метке.
  //   //   myPlacemark.events.add("dragend", function () {
  //   //     getAddress(myPlacemark.geometry.getCoordinates());
  //   //   });
  //   // }
  //   // setPlacemarkCoords(myPlacemark.geometry._coordinates);
  //   // getAddress(newCoords);

  //   // console.log(point)
  //   // const pointerHandler = () => {

  //   // }

  //   console.log(point, 'BIG')

  //   console.log('MAP rendered')

  return (
    <>
      <YMaps
        query={{
          apikey: "a1d74d39-8cef-45bf-b08e-15d2c7d52345",
        }}
        version={"2.1"}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            my: 5,
          }}
        >
          <Typography>найди себе друга</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5,
          }}
        >
          <Map
            defaultState={mapState}
            width="500px"
            height="400px"
            onLoad={(ymaps) => console.log(ymaps)}
            instanceRef={(ref) => {}}
            onClick={(event) => {
              try {
                if (event?.get("coords")) {
                  event.preventDefault();
                  // setPoint({
                  //   lat: event.get('coords')[0],
                  //   lon: event.get('coords')[1],
                  // })
                  console.log(event.get("coords"));
                  // setPoint(
                  //   <Placemark
                  //     key={Date.now(12)}
                  //     geometry={[event.get("coords")[0], event.get("coords")[1]]}
                  //   />
                  // );
                  // pointerHandler()
                }
              } catch (error) {
                console.log("ERRORRRRR", error);
              }
            }}
          >
            {/* Creating a geo object with the "Point" geometry type. */}
            <GeoObject
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
            />
            {/* <Placemark
              key={1}
              modules={["geoObject.addon.balloon"]}
              defaultGeometry={[55.75, 37.57]}
              properties={{
                balloonContentBody: "This is balloon loaded by the Yandex.Maps API module system",
              }}
            /> */}

            {db.map((placemarkParams, i) => (
              <Placemark key={i} {...placemarkParams} />
            ))}
          </Map>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            my: 0,
          }}
        >
          {/* <MapAddPoint key={1} point={point} /> */}
          <Typography>Чатик</Typography>
          <Chatik />
        </Box>
      </YMaps>
    </>
  );
};

export default PlacemarkDemo;
