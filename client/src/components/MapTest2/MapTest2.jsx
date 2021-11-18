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

import React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapState = { center: [55.76, 37.64], zoom: 10 };

export const MyPlacemark = () => (
  <YMaps>
    <Map state={mapState}>

      <Placemark
        geometry={{
          coordinates: [55.751574, 37.573856]
        }}
        properties={{
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка'
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: 'images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42]
        }}
      />

    </Map>
  </YMaps>
);