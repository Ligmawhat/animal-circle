import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { getAllPoints } from "../../../redux/ac/mapAc";
import MapAddPoint from "../MapAddPoint";
import './MapApi.css'
import MyModalTwo from "../../../MyModalTwo/MyModalTwo";
import MyModal from "../../../MyModal/MyModal";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const mapState = { center: [55.831903, 37.411961], zoom: 10 };


export const MapApi = () => {
  const [cords, setCords] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [point, setPoint] = useState([]);

  const tags = useSelector((state) => state.map);

  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPoints());
  }, []);

  const onPlaceMarkClick = (e, el) => {
    setModalTwo(true);
    e.preventDefault();
    setSelected(el);
  };

  return (
    <div style={{ zIndex: "400" }} draggable={false}>
      {/* <MyModalTwo visible={modalTwo} setVisible={setModalTwo}>
        <div>
          <h1> О площадке {selected?.geotags_title}</h1>
          <p>{selected?.description}</p>
        </div>
      </MyModalTwo> */}
      <MyModalTwo visible={modalTwo} setVisible={setModalTwo}>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost:3001/places/${selected?.url}`}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selected?.geotags_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {selected?.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
      </MyModalTwo>
      
      <Button onClick={() => setModal(true)}>Создать метку</Button>
      <MyModal visible={modal} setVisible={setModal}>
        <MapAddPoint
          setPoint={setPoint}
          point={point}
          cords={cords}
          modal={modal}
          setModal={setModal}
        />
      </MyModal>

      <YMaps
      border-radius= "50% 50% 50% 50%"
        width="600px"
        height="600px"
        query={{
          apikey: "a1d74d39-8cef-45bf-b08e-15d2c7d52345",
        }}
        version={"2.1"}
      >
        <Map
          options={{
            zIndex: 0,
          }}
          defaultState={mapState}
          width="600px"
          height="600px"
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
        </Map>
      </YMaps>
    </div>
  );
};
