import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { YMaps, Map, GeoObject, Placemark } from 'react-yandex-maps'

const mapState = { center: [56.76, 37.64], zoom: 10 }

const db = [
  {
    geometry: { coordinates: [60.801773, 37.697725], type: 'Point' },
    properties: {
      iconContent: 'Я тащусь',
    },
    options:{ preset: 'islands#blackStretchyIcon', draggable: true,}
  },
  { geometry: { coordinates: [50.801773, 35.697725], type: 'Point' } },
]

const Yamap = () => (
  <YMaps
    query={{
      apikey: 'a1d74d39-8cef-45bf-b08e-15d2c7d52345',
    }}
    version={'2.1'}
  >
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        my: 10,
      }}
    >
      <Typography>Pisya</Typography>
    </Box> */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',

        alignItems: 'center',
        my: 10,
      }}
    >
      <Map defaultState={mapState} width="500px" height="400px">
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
        {/* <Placemark key={1}
      modules={['geoObject.addon.balloon']}
      defaultGeometry={[55.75, 37.57]}
      properties={{
        balloonContentBody:
          'This is balloon loaded by the Yandex.Maps API module system',
      }} */}
    {/* /> */}

        {/* {db.map((placemarkParams, i) => (
          <GeoObject key={i} {...placemarkParams} />
        ))} */}
      </Map>
    </Box>
    {/* <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 5,
      }}
    >
      <Typography>Чатик</Typography>
    </Box> */}
  </YMaps>
)

export default Yamap
