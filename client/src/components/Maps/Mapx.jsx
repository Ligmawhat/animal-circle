// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import {useState} from 'react'

//   // const init = () => {
//   //   var myMap = new YMaps.Map(
//   //       'map',
//   //       {
//   //         center: [54.83, 37.11],
//   //         zoom: 5,
//   //       },
//   //       {
//   //         searchControlProvider: 'yandex#search',
//   //       },
//   //     ),
//   //     myPlacemark = new YMaps.Placemark([55.907228, 40.260503], {
//   //       // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
//   //       balloonContentHeader: 'Балун метки',
//   //       balloonContentBody: 'Содержимое <em>балуна</em> метки',
//   //       balloonContentFooter: 'Подвал',
//   //       hintContent: 'Хинт метки',
//   //     })

//   //   myMap.geoObjects.add(myPlacemark)

//   //   // Открываем балун на карте (без привязки к геообъекту).
//   //   myMap.balloon.open([51.85, 38.37], 'Содержимое балуна', {
//   //     // Опция: не показываем кнопку закрытия.
//   //     closeButton: false,
//   //   })

//   //   // Показываем хинт на карте (без привязки к геообъекту).
//   //   myMap.hint.open(myMap.getCenter(), 'Одинокий хинт без метки', {
//   //     // Опция: задержка перед открытием.
//   //     openTimeout: 1500,
//   //   })
//   // }




//   export const Maps = () => {

//     let [state, setState] = useState([55.75, 37.57]);
//     function search(e) {
//         const val = e.target.value;
//         console.log(e.target)
//         setState([val]);
//     }

//     function searchSubmit(e) {
//        e.preventDefault();
//         console.log(state)
        
//     }





//   // YMaps.ready(init)

//   return (
//     // <YMaps init={init}>
//     //   <div>
//     //     My awesome application with maps!
//     //     <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
//     //   </div>
//     // </YMaps>
//     <YMaps>


//                 <div className="App">
//                     <form onSubmit={searchSubmit}>
//                         <input value={state} type="text" onChange={search}/>
//                         <input type="submit" value="Submit"/>
//                     </form>
//                     <Map defaultState={{center: state, zoom: 9}} width="700px" height="600px"/>
//                 </div>





//   {/* <Map
//     defaultState={{
//       height: 1000,
//       center: [55.75, 37.57],
//       zoom: 9,
//       controls: ['zoomControl', 'fullscreenControl'],
//     }}
//     modules={['control.ZoomControl', 'control.FullscreenControl']}
//   >
//     <Placemark
//       modules={['geoObject.addon.balloon']}
//       defaultGeometry={[55.75, 37.57]}
//       properties={{
//         balloonContentBody:
//           'Площадка 1',
//       }}
//     />
//     <Placemark
//       modules={['geoObject.addon.balloon']}
//       defaultGeometry={[50.75, 37.57]}
//       properties={{
//         balloonContentBody:
//           'ПЛОЩАДКА 2',
//       }}
//     />
//     <Placemark
//       modules={['geoObject.addon.balloon']}
//       defaultGeometry={[55.75, 30.57]}
//       properties={{
//         balloonContentBody:
//           'ЛОЛОЛОЛО',
//       }}
//     />
//     <Placemark
//       modules={['geoObject.addon.balloon']}
//       defaultGeometry={[33.75, 37.57]}
//       properties={{
//         balloonContentBody:
//           'ПИВВВВВВВВВ',
//       }}
//     />
//   </Map> */}
// </YMaps>
//   )

//   // );
// }

// export const Maps = () => (


// РИСУЕТ КАРТУ БОЛЬШУЮ ПО РАЗМЕРУ
//   const PlacemarkDemo = () =>
//   <YMaps>
//     <Map state={mapState} style={{width : 700, height: 600}}>
//       {/* Creating a geo object with the "Point" geometry type. */}
//       <GeoObject
//         // The geometry description.
//         geometry={{
//           type: 'Point',
//           coordinates: [55.8, 37.8],
//         }}
//         // Properties.
//         properties={{
//           // The placemark content.
//           iconContent: 'Я тащусь',
//           hintContent: 'Ну давай уже тащи',
//         }}
//         // Options.
//         options={{
//           // The placemark's icon will stretch to fit its contents.
//           preset: 'islands#blackStretchyIcon',
//           // The placemark can be moved.
//           draggable: true,
//         }}
//       />

//       {/* {db.map((placemarkParams, i) =>
//         <Placemark key={i} {...placemarkParams} />
//       )} */}
//     </Map>
//   </YMaps>;

// export default PlacemarkDemo;