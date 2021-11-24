import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps'
import Chat from '../../ChatComponents/Chat/Chat'
import NavBar from '../../Navbar/Navbar'
import { getAllPoints } from '../../redux/ac/mapAc'
import MapAddPoint from './MapAddPoint'

// import myIcon from 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png';

const mapState = { center: [55.831903, 37.411961], zoom: 10 }

const PlacemarkDemo = () => {
  const [cords, setCords] = useState([])

  const [point, setPoint] = useState([])

  const tags = useSelector((state) => state.map)

  const [selected, setSelected] = useState(null)
const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getAllPoints())
  }, [])



  const onPlaceMarkClick = (e, point) => {
    e.preventDefault()
    setSelected(point)
    console.log(selected, 'SELECTED ON CLICK')
  }

  console.log(selected, 'SELECTED')
  const db = [
    {
      title: 'Placemark 1',
      descr: 'Some description',
      coords: [55.831903, 37.411961],
    },
    {
      title: 'Placemark 2',
      descr: 'Some description',
      coords: [55.763338, 37.565466],
    },
    {
      title: 'Placemark 3',
      descr: 'Some description',
      coords: [55.763338, 37.565466],
    },
    {
      title: 'Placemark 4',
      descr: 'Some description',
      coords: [55.744522, 37.616378],
    },
    {
      title: 'Placemark 5',
      descr: 'Some description',
      coords: [55.780898, 37.642889],
    },
    {
      title: 'Placemark 6',
      descr: 'Some description',
      coords: [55.793559, 37.435983],
    },
    {
      title: 'Placemark 7',
      descr: 'Some description',
      coords: [55.800584, 37.675638],
    },
    {
      title: 'Placemark 8',
      descr: 'Some description',
      coords: [55.716733, 37.589988],
    },
  ]

  console.log('MAPTEST RENDERED')
  console.log(tags, 'COORDS')

  return (
    <>
      <NavBar />
      <Chat />

      {/* {selected && ( */}
      <div>
        <h1>Selected point: {selected?.title}</h1>
        <p>{selected?.descr}</p>
      </div>
      {/* )} */}
      <YMaps
        query={{
          apikey: 'a1d74d39-8cef-45bf-b08e-15d2c7d52345',
        }}
        version={'2.1'}
      >
        <Map
          defaultState={mapState}
          width="500px"
          height="400px"
          onLoad={(ymaps) => console.log(ymaps)}
          instanceRef={(ref) => {}}
          onClick={(ev) => (
            ev.preventDefault(),
            setCords({ lat: ev.get('coords')[0], lon: ev.get('coords')[1] }),
            setPoint(
              <Placemark
                geometry={{
                  type: 'Point',
                  coordinates: [ev.get('coords')[0], ev.get('coords')[1]],
                }}
                properties={{
                  hintContent: 'Stack Overflow',
                  balloonContent: 'Stack Overflow на русском',
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: './device2.jpg',
                  iconImageSize: [100, 36],
                  iconImageOffset: [-50, -18],
                }}
              />,
            )
          )}
          // onClick ={(ev) => pointsHandler(ev)}
          // console.log(ev.get('coords'))}
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
            tags?.map((el) => (
              <Placemark
                key={el.id}
                geometry={{
                  type: 'Point',
                  coordinates: [el.latitude, el.longitude],
                }}
                properties={{
                  hintContent: 'Stack Overflow',
                  balloonContent: 'Stack Overflow на русском',
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: `http://localhost:3001/${el.url}`,
                  iconImageSize: [100, 36],
                  iconImageOffset: [-50, -18],
                }}
              />
            ))}

          {db.map((point, index) => (
            <Placemark
              key={index}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
              geometry={point.coords}
              onClick={(e) => onPlaceMarkClick(e, point)}
              properties={{
                hintContent: 'YA PISYA',
                
              }}
              options={{
                iconLayout: 'default#image',
                iconImageHref: './snoopy5.png',
                iconImageSize: [70, 55],
                // iconImageOffset: [-50, -18],
              }}
            />
          ))}
          <Placemark
            geometry={{
              type: 'Point',
              coordinates: mapState.center,
            }}
            properties={{
              hintContent: 'Stack Overflow',
              balloonContent: 'Stack Overflow на русском',
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: './device2.jpg',
              iconImageSize: [100, 36],
              iconImageOffset: [-50, -18],
              openHintOnHover: true,
            }}
          />
          <Placemark
            geometry={{
              type: 'Point',
              coordinates: [55.8, 37.8],
            }}
            properties={{
              hintContent: 'Stack Overflow',
              balloonContent: 'Stack Overflow на русском',
            }}
            options={{
              iconLayout: 'default#image',
              iconImageHref: './device2.jpg',
              iconImageSize: [100, 36],
              iconImageOffset: [-50, -18],
            }}
          />
          <GeoObject
            // The geometry description.
            // onClick={onPlaceMarkClick()}
            geometry={{
              type: 'Point',
              coordinates: [55.8, 37.8],
            }}
            // Properties.
            properties={{
              // The placemark content.
              iconContent: 'Новая площадка',
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
        </Map>
      </YMaps>
    </>
  )
}

export default PlacemarkDemo
