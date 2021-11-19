// import React from 'react';
// import { YMaps, Map, Placemark } from 'react-yandex-maps';

// // import myIcon from './device2.jpg';

// const mapState = { center: [56.848217, 53.236675], zoom: 12 };

// const IconCustomImage = () =>
//   <YMaps>
//     <Map state={mapState}>
//       <Placemark
//         geometry={{
//           coordinates: mapState.center,
//         }}
//         properties={{
//           hintContent: 'Stack Overflow',
//           balloonContent: 'Stack Overflow на русском',
//         }}
//         options={{
//           iconLayout: 'default#image',
//           // iconImageHref: myIcon,
//           iconImageSize: [100, 36],
//           iconImageOffset: [-50, -18],
//         }}
//       />
//     </Map>
//   </YMaps>;

// export default IconCustomImage;

// import React from 'react';

// import { YMaps, Map, Placemark } from 'react-yandex-maps';

// const mapState = { center: [55.76, 37.64], zoom: 10 };

// export const MyPlacemark = () => (
//   <YMaps>
//     <Map state={mapState}>

//       <Placemark
//         geometry={{
//           coordinates: [55.751574, 37.573856]
//         }}
//         properties={{
//           hintContent: 'Собственный значок метки',
//           balloonContent: 'Это красивая метка'
//         }}
//         options={{
//           iconLayout: 'default#image',
//           iconImageHref: 'images/myIcon.gif',
//           iconImageSize: [30, 42],
//           iconImageOffset: [-3, -42]
//         }}
//       />

//     </Map>
//   </YMaps>
// );

// import React, { useState } from 'react'

// import {
//   YMaps,
//   Map,
//   Clusterer,
//   FullscreenControl,
//   SearchControl,
//   Placemark,
//   Rectangle,
//   ObjectManager,
// } from "react-yandex-maps";
// import style from './Maptest2.module.css'
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import { useSpring, animated } from 'react-spring';

// const alesha =
// [
//   {
//   geometry: [[55.732917516252165, 37.58419213370509], [55.772803635507664, 37.65388665274765]],
//   strokeColor: '#3caa3c88',
//   hintContent:'Sexy',
// },
// {
//   geometry: [[55.77587669905304, 37.507066707258964], [55.81436553252015, 37.57779119456369]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',

// },
// {
//   geometry: [[55.77512583695814, 37.58316216544341], [55.814581998192324, 37.653886652748135]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',

// },
// {
//   geometry: [[55.77517383840219, 37.65869317130279], [55.8150165767711, 37.728731013099704]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',
// },
// {
//   geometry: [[55.73199695158801, 37.659379816810144], [55.77188401569203, 37.72873101309942]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',
// },
// {
//   geometry: [[55.690115622764175, 37.65911043826452], [55.729658188177666, 37.72914828006139]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',

// }, {
//   geometry: [[55.69055584798751, 37.585238524695065], [55.72990423028562, 37.65390307547636]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',
// }, {
//   geometry: [[55.690586927291946, 37.50694008549272], [55.729935278164994, 37.57835121830526]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',
// }, {
//   geometry: [[55.73289431708816, 37.507410030012906], [55.772586937040295, 37.5784778400715]],
//   strokeColor: '#FFFF99',
//   hintContent:'90 p/c',
// },
// {
//   geometry: [[55.817721167013126, 37.43052979003354], [55.85658387267906, 37.50125427733819]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',

// }, {
//   geometry: [[55.81756656191835, 37.50642104867272], [55.85678645167762, 37.57817550423912]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.81679335706232, 37.584011991055455], [55.85775195757589, 37.65336318734458]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },
// {
//   geometry: [[55.817373262157155, 37.6588563514071], [55.85813815319272, 37.72820754769615]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },
// {
//   geometry: [[55.817899652831436, 37.733224195805604], [55.85769850681691, 37.803262037602515]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.77456403867794, 37.73425416406736], [55.81440740321941, 37.80463532861814]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.73227154350812, 37.7339274449308], [55.77119068495875, 37.80568190049718]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },
// {
//   geometry: [[55.6901213918868, 37.73459642907054], [55.72888899341584, 37.807037530144754]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },
// {
//   geometry: [[55.64947088999366, 37.73596972008611], [55.68672738819774, 37.806179223260024]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.649514839007615, 37.66114706236208], [55.68657734342918, 37.73015493589724]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },
// {
//   geometry: [[55.649514839001455, 37.584586088241], [55.68618943700116, 37.65496725279183]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.64951483899529, 37.50562185484259], [55.68696524599288, 37.57668966490115]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// }, {
//   geometry: [[55.64912656337358, 37.43215078550667], [55.68812893043584, 37.49841207701048]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },{
//   geometry: [[55.691592122352105,37.43198246346543],[55.72958331484829,37.49927372323107]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },{
//   geometry: [[55.77607620134429,37.43150516690608],[55.81437152216558,37.49948307217948]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },{
//   geometry: [[55.733287760284,37.43219181241389],[55.77239940908146,37.49982639493337]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },

// ];

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: 'honeydew',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(8, 10, 25),
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   app: {
//     width: '80px',
//     height: '80px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '14px',
//     padding: '20px'
//   },
//   drop_area: {
//     width: '88px',
//     height: '88px',
//     border: '2px dashed mediumblue',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// }));

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });
//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

// function Karta() {

//   const [drag, setDrag] = useState(false);

//   const dragStartHandler = (e) => {
//     e.preventDefault();
//     setDrag(true);
//   }

//   const dragLeaveHandler = (e) => {
//     e.preventDefault();
//     setDrag(false);
//   }

//   const onDropHandler = (e) => {
//     e.preventDefault();
//     let files = [...e.dataTransfer.files]
//     console.log(files);
//     const formData = new FormData();
//     formData.append('file', files[0])
//     setDrag(false)
//   }

//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let yymap

//   return (
//     <YMaps
//       query={{
//         apikey: "a1d74d39-8cef-45bf-b08e-15d2c7d52345",
//       }}
//       version={"2.1"}
//     >
//       <div>
//         <div className={style.events__mapWrapper}>
//           <Map
//             className={style.events__map}
//             instanceRef={(ref) => {
//             }}
//             onLoad={(ymaps) => {
//               if (!yymap) {
//                 yymap = ymaps;
//               }
//             }}
//             modules={["templateLayoutFactory", "layout.ImageWithContent", "geolocation", "geocode"]}
//             defaultState={{ center: [55.75, 37.57], zoom: 9 }}
//             onClick={(event) => {
//               try {
//                 if (event?.get("coords")) {
//                 }
//               } catch (error) {
//                 console.log("ERRORRRRR", error);
//               }
//             }}
//           >

//             {alesha?.map((el) => <Rectangle data-rh="Add top-level category" geometry={el.geometry} onClick={handleOpen}
//               options={{
//                 fillColor: '#ffff0022',
//                 strokeColor: el.strokeColor,
//                 strokeWidth: 1,

//               }}
//               properties={{
//                 hintContent: el.hintContent,
//               }}
//               modules={
//                 ['geoObject.addon.hint']
//               }
//             ></Rectangle>)}

//           </Map>
//         </div>

//         <div>

//           <Modal
//             aria-labelledby="spring-modal-title"
//             aria-describedby="spring-modal-description"
//             className={classes.modal}
//             open={open}
//             onClose={handleClose}
//             closeAfterTransition
//             BackdropComponent={Backdrop}
//             BackdropProps={{
//               timeout: 500,
//             }}
//           >
//             <Fade in={open}>
//               <div className={classes.paper}>
//                 <form >
//                   <h2 id="spring-modal-title">Vyberite chtoto</h2>
//                   {/* <p id="spring-modal-description">react-spring animates me.</p> */}
//                   <label>
//                     eto knopka ebanaya dlya faila
//     <input type="file" style={{ visibility: 'hidden' }} />
//                   </label>

//                   <div className={classes.app}>
//                     {drag
//                       ? <div
//                         onDragStart={e => dragStartHandler(e)}
//                         onDragLeave={e => dragLeaveHandler(e)}
//                         onDragOver={e => dragStartHandler(e)}
//                         onDrop={e => onDropHandler(e)}
//                         className={classes.drop_area}>Отпустите файлы, чтобы загрузить их</div>
//                       : <div
//                         onDragStart={e => dragStartHandler(e)}
//                         onDragLeave={e => dragLeaveHandler(e)}
//                         onDragOver={e => dragStartHandler(e)}
//                       >Перетащите файлы, чтобы загрузить их</div>}
//                   </div>
//                 </form>
//               </div>
//             </Fade>
//           </Modal>
//         </div>

//       </div>

//     </YMaps>
//   )
// }

// export default Karta

// import React from 'react';
// import { YMaps, Map } from 'react-yandex-maps';

// const mapState = { center: [55.76, 37.64], zoom: 10 };

// class MapBasics extends React.Component {
//   state = { showMap: true };

//   toggleMap() {
//     const { showMap } = this.state;
//     this.setState({ showMap: !showMap });
//   }

//   render() {
//     const { showMap } = this.state;

//     return (
//       <YMaps>
//         <div id="map-basics">
//           {showMap &&
//             // When initializing the map, you must specify
//             // its center and the zoom factor.
//             <Map state={mapState} />}

//           {/* To destroy it, just unmount component */}
//           <button onClick={() => this.toggleMap()}>
//             {showMap ? 'Delete map' : 'Show map'}
//           </button>
//         </div>
//       </YMaps>
//     );
//   }
// }

// export default MapBasics;

// import { useEffect, useState } from "react";
// import "./YandexMap.css";
// import axios from "axios";
// import React from "react";
// import { SEND_FORMS } from "../../urls/url";
// import style from "../testImage/style.module.css";
// import { useLocation } from "react-router";
// import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
// import { acceptMarkAct, addMarkAct, declineMarkAct } from "../../redux/actions/markActions";
// import SendingForm from "../SendingForm/SendingForm";
// import { acceptNotificationStart, addNotificationStart, declineNotificationStart } from "../../redux/actions/notificationAC";
// import { useHistory } from "react-router";

// export default function Map({ }) {
//   let myPlacemark;

//   let history = useHistory();
//   const [files, setFiles] = useState([]);
//   const marksFromState = useSelector(state => state.marks)

//   const allMarks = marksFromState?.filter(el => el.isAccepted === true)

//   let arr = [...allMarks];
//   // let a = allMarks?.allMarkers
//   // console.log(arr[0])
//   // console.log(allMarks?.allMarkers[0]?.longitude)

//   const [placemarkCoords, setPlacemarkCoords] = useState([])
//   const [adress, setAdress] = useState('')
//   const [province, setProvince] = useState('')
//   const [allPlacemarks, setAllPlacemarks] = useState([])
//   const [flag, setFlag] = useState(true)

//   const location = useLocation(); //принимаем координаты новой метки из личного кабинета, чтобы высветить ее на карте
//   const dispatch = useDispatch();

//   const placemarkHandler = (e) => {
//     e.preventDefault();
//     // тут будет dispatch данных из локального стейта
//     // window.ymaps.ready()

//     const div = document.querySelector('.ymap');
//     div.innerHTML = '';
//     // console.log(placemarkCoords)
//     // console.log(adress)
//     // dispatch(addMarkAct(placemarkCoords[0], placemarkCoords[1], adress, e.target.comment.value, ))
//     window.ymaps.ready(init);
//     // madeMap.geoObjects.remove(myPlacemark)
//   };

//   // для отправки комментов и фоток
//   const uploadedImage = React.useRef(null);
//   const imageUploader = React.useRef(null);

//   const handleImageUpload = (e) => {
//     const [file] = e.target.files;
//     if (file) {
//       const reader = new FileReader();
//       const { current } = uploadedImage;
//       current.file = file;
//       reader.onload = (e) => {
//         current.src = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const acceptHandler = () => {
//     dispatch(acceptNotificationStart(location.state.id))
//     dispatch(acceptMarkAct(location.state.id))
//     setFlag(false)
//     // const div = document.querySelector('.ymap');
//     // div.innerHTML = '';
//     // window.ymaps.ready(init);
//     window.history.back()
//   }

//   const declineHandler = () => {
//     dispatch(declineNotificationStart(location.state.id))
//     dispatch(declineMarkAct(location.state.id))
//     setFlag(false)
//     // const div = document.querySelector('.ymap');
//     // div.innerHTML = '';
//     // window.ymaps.ready(init);
//     window.history.back()
//   }

//   const backHandler = () => {
//     window.history.back()
//   }

//   const sendForm = (e) => {
//     e.preventDefault();
//     // Получаем все значения из формы по атрибуту name
//     // const { file } = Object.fromEntries(new FormData(e.target));
//     // console.log(file);
//     // const image = file.name;
//     const pics = [];
//     // Эта штука собирает все значения через append и через axios отправляет на back
//     let bodyFormData = new FormData();
//     files.map((el) => {
//       bodyFormData.append("file", el);
//       bodyFormData.append("pics", el.name);
//       pics.push(el.name)
//     });

//     // bodyFormData.append("file", file);
//     // bodyFormData.append("pics", image);
//     bodyFormData.append("latitude", placemarkCoords[0]);
//     bodyFormData.append("longitude", placemarkCoords[1]);
//     bodyFormData.append("address", adress);
//     bodyFormData.append("comment", e.target.comment.value);
//     bodyFormData.append("parkingPlaces", 5);

//     const comment = e.target.comment.value
//     console.log('pics', pics[0])

//     dispatch(addNotificationStart());
//     // dispatch(addMarkAct({ longitude: placemarkCoords[1], latitude: placemarkCoords[0], address: adress, comment, pics: pics[0], parkingPlaces: 5 }));
//     dispatch(addMarkAct(bodyFormData))
//     const div = document.querySelector('.ymap');
//     div.innerHTML = '';
//     window.ymaps.ready(init);
//   };

//   const init = () => {
//     const myMap = new window.ymaps.Map(
//       "map",
//       {
//         center: [55.753994, 37.622093],
//         zoom: 10,
//         behaviors: ['drag', 'dblClickZoom'] //убираем масштабирование карты при скролле, оставляем масштабирование при клике мыши
//       },
//       {
//         searchControlProvider: "yandex#search",
//       }
//     );

//     setAdress("");
//     // setAllPlacemarks([])

//     if (location.state) { //добавляем на карту метку из админского кабинета !!!! надо сделать удаление по переходу на новую страницу
//       let adminNewPlacemark = new window.ymaps.Placemark(
//         location.state.coords,
//         {
//           iconCaption: "поиск" // balloon
//         },
//         {
//           preset: 'islands#redIcon'
//         });

//       adminNewPlacemark.properties.set({
//         iconCaption: location.state.adress,
//         balloonContent: location.state.adress,
//       });
//       myMap.geoObjects.add(adminNewPlacemark);
//     }

//     if (allMarks.length) {
//       for (let i = 0; i < allMarks.length; i++) {
//         // console.log('dsfsgsgsdgdsgdsgsdg')
//         // console.log(allMarks[i].pics)
//         let pl = new window.ymaps.Placemark([allMarks[i].latitude, allMarks[i].longitude]);
//         console.log(allMarks)
//         pl.properties.set({
//           iconCaption: allMarks[i].address,
//           balloonContent: `
//           <div>
//           <div id='stat-text'>
//           <span> <b> Адрес </b> </span> <br />
//           <span> ${allMarks[i].address} </span>
//           <br/>
//           <span> <b> Координаты </b> </span> <br />
//           <span> ${allMarks[i].latitude}, ${allMarks[i].longitude} </span>
//           <br/>
//           <span> <b> Комментарий </b> </span> <br />
//           <span> ${allMarks[i].comment} </span>
//           </div>
//           <div id='stat'>
//           <img src=http://localhost:3005/uploads/${allMarks[i].pics} />
//           </div>
//           </div>`
//         });
//         myMap.geoObjects.add(pl);
//       }
//     }

//     //   // console.log(arr[i]);
//     // }

//     // myPlacemark = createPlacemark([55.74741048760227, 37.604411878173835]); //создать метку
//     // myMap.geoObjects.add(myPlacemark);  //опубликовать ее на экране

//     // Слушаем клик на карте.
//     myMap.events.add("click", function (e) {
//       if (!location.state) {
//         let newCoords = e.get("coords"); // вытяигиваем координаты
//         if (myPlacemark) {
//           // если метка создана
//           myPlacemark.geometry.setCoordinates(newCoords);
//           // myMap.geoObjects.remove(myPlacemark)
//         }
//         // Если нет – создаем.
//         else {
//           myPlacemark = createPlacemark(newCoords);
//           myMap.geoObjects.add(myPlacemark);
//           // Слушаем событие окончания перетаскивания на метке.
//           myPlacemark.events.add("dragend", function () {
//             getAddress(myPlacemark.geometry.getCoordinates());
//           });
//         }
//         setPlacemarkCoords(myPlacemark.geometry._coordinates);
//         getAddress(newCoords);
//       }
//     });

//     // Создание метки.
//     function createPlacemark(coords) {
//       return new window.ymaps.Placemark(
//         coords,
//         {
//           iconCaption: "поиск", // balloon
//         },
//         {
//           preset: "islands#blueAutoIcon", //preset
//           draggable: true,
//         }
//       );
//     }

//     // Определяем адрес по координатам (обратное геокодирование).
//     async function getAddress(coords) {
//       myPlacemark.properties.set("iconCaption", "поиск...");

//       window.ymaps.geocode(coords).then(function (res) {
//         var firstGeoObject = res.geoObjects.get(0); //адрес метки

//         var x = res.geoObjects.get(0);

//         setAdress(firstGeoObject.getAddressLine());

//         // console.log(myGeocoder)

//         myPlacemark.properties.set({
//           // Формируем строку с данными об объекте.
//           iconCaption: [
//             // Название населенного пункта или вышестоящее административно-территориальное образование.
//             firstGeoObject.getLocalities().length
//               ? firstGeoObject.getLocalities()
//               : firstGeoObject.getAdministrativeAreas(),

//             // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
//             firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
//           ]
//             .filter(Boolean)
//             .join(", "),
//           // В качестве контента балуна задаем строку с адресом объекта.
//           balloonContent: firstGeoObject.getAddressLine(),
//         });
//         // console.log('=======sa=f=saf=af=', firstGeoObject.getLocalities())

//         // setAdress(myPlacemark.properties._data.balloonContent
//       });
//     }
//   };

//   // console.log(init())

//   // console.log('adddees',adress)
//   // if(adress){
//   //   const prov = axios(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=3ec234ec-c933-467f-b4bb-4f217f11b450&geocode=${adress}`)
//   //     .then(res => setProvince(res.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components[1].name))
//   //   }
//   //   console.log('province',province)

//   useEffect(() => {
//     // axios.get("http://localhost:3005/marker/all").then((res) => {
//     //   setAllMarks(res.data);
//     // });
//     if (allMarks?.length > 0) {
//       window.ymaps.ready(init);
//     }
//   }, [allMarks?.length]);

//   // console.log(location.state);

//   return (
//     <div className="block-wrapper__map">
//       <div id="map" className='ymap map'>
//       </div>

//       <div className='pinInfo'>
//         {location.state && flag && <div>
//           <div className="imgdiv">
//             <img className='picmap' src={`http://localhost:3005/uploads/${location.state.pic}`} />
//           </div>
//           <button className='map-btn' onClick={acceptHandler}> Принять </button>
//           <button className='map-btn' onClick={declineHandler}> Отклонить </button>
//           <button className='map-btn' onClick={backHandler}> Назад </button>
//         </div>}

//         {!location.state && adress && placemarkCoords && <SendingForm sendForm={sendForm} handleImageUpload={handleImageUpload} imageUploader={imageUploader} files={files} setFiles={setFiles} uploadedImage={uploadedImage} />
//         }

//       </div>

//       {/* <div className='shit addvertismentBlock'>
//         <div>
//           {setInterval(() => {
//             // <img src={`./pics/${Math.floor(Math.random() * 10)}`} />
//             <img src='http://localhost:3000//pics/1' />
//           }, 2500)}
//         </div>
//       </div> */}
//     </div>
//   );
// }

// 55.801773, 37.697725

// 55.807995, 37.658857

// 55.783713, 37.672517

// {
//   geometry: [[55.817373262157155, 37.6588563514071], [55.85813815319272, 37.72820754769615]],
//   strokeColor: '#FF9999',
//   hintContent:'70 p/c',
// },

import { Box, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps'
import Chatik from "../Chatik/Chatik";

const mapState = { center: [56.76, 37.64], zoom: 10 }

const db = [
  { geometry: { coordinates: [60.801773, 37.697725], type: 'Point' } },
  {
    geometry: { coordinates: [50.801773, 35.697725], type: 'Point' },
    properties: {
      iconContent: 'Я тащусь',
    },
    options: { preset: 'islands#blackStretchyIcon', draggable: true },
  },
]

const PlacemarkDemo = () => {
  const [point, setPoint] = useState([])


  // function createPlacemark(coords) {
  //   return new window.ymaps.Placemark(
  //     coords,
  //     {
  //       iconCaption: "поиск", // balloon
  //     },
  //     {
  //       preset: "islands#blueAutoIcon", //preset
  //       draggable: true,
  //     }
  //   );
  // }

//   myPlacemark = createPlacemark(newCoords);
//   myMap.geoObjects.add(myPlacemark);
//   // Слушаем событие окончания перетаскивания на метке.
//   myPlacemark.events.add("dragend", function () {
//     getAddress(myPlacemark.geometry.getCoordinates());
//   });
// }
// setPlacemarkCoords(myPlacemark.geometry._coordinates);
// getAddress(newCoords);




// console.log(point)
// const pointerHandler = () => {



// }


  return (
    <YMaps
      query={{
        apikey: 'a1d74d39-8cef-45bf-b08e-15d2c7d52345',
      }}
      version={'2.1'}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'center',
          my: 10,
        }}
      >
        <Typography>Pisya</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'center',
          my: 10,
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
              if (event?.get('coords')) {setPoint(event.get('coords'))
                console.log(event.get('coords'))
                setPoint(<Placemark key={Date.now()} geometry={[event.get('coords')[0],event.get('coords')[1] ]} /> )
                // pointerHandler()
              }
            } catch (error) {
              console.log('ERRORRRRR', error)
            }
          }}
        >
          {/* Creating a geo object with the "Point" geometry type. */}
          <GeoObject
            // The geometry description.
            geometry={{
              type: 'Point',
              coordinates: [55.8, 37.8],
            }}
            // Properties.
            properties={{
              // The placemark content.
              iconContent: 'Я тащусь',
              hintContent: 'Ну давай уже тащи',
            }}
            // Options.
            options={{
              // The placemark's icon will stretch to fit its contents.
              preset: 'islands#blackStretchyIcon',
              // The placemark can be moved.
              draggable: true,
            }}
          />
          {point}
          <Placemark
            key={1}
            modules={['geoObject.addon.balloon']}
            defaultGeometry={[55.75, 37.57]}
            properties={{
              balloonContentBody:
                'This is balloon loaded by the Yandex.Maps API module system',
            }}
          />

          {db.map((placemarkParams, i) => (
            <Placemark key={i} {...placemarkParams} />
          ))}
        </Map>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          my: 5,
        }}
      >
        <Typography>Чатик</Typography>
          <Chatik />
      </Box>
    </YMaps>
  )
}

export default PlacemarkDemo
