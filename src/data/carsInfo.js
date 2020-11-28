import car1 from 'assets/imgaes/Cars/Car1.jpg';
import car2 from 'assets/imgaes/Cars/Car2.jpg';
import car3 from 'assets/imgaes/Cars/Car3.jpg';
import car4 from 'assets/imgaes/Cars/Car4.jpg';
import car5 from 'assets/imgaes/Cars/Car5.jpg';
import car6 from 'assets/imgaes/Cars/Car6.jpg';
import car7 from 'assets/imgaes/Cars/Car7.jpg';
import car8 from 'assets/imgaes/Cars/Car8.jpg';

import car2m from 'assets/imgaes/Cars/Car2mobile.jpg';
import car3m from 'assets/imgaes/Cars/Car3mobile.jpg';
import car4m from 'assets/imgaes/Cars/Car4mobile.jpg';
import car5m from 'assets/imgaes/Cars/Car5mobile.jpg';
import car7m from 'assets/imgaes/Cars/Car7mobile.jpg';
import car8m from 'assets/imgaes/Cars/Car8mobile.jpg';

export const carsInfo = [
  {
    img: car1,
    imgm: car1,
    name: 'Audi R8 V10',
    description: 'Głośny potwór z V10 za plecami',
    techInfo: ['610KM', '4x4', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '0',
        priceName: 'Doba',
        price: '2499zł',
      },
      {
        numberOfCar: '0',
        priceName: 'Weekend',
        price: '5999zł',
      },
      {
        numberOfCar: '0',
        priceName: 'Tydzień',
        price: '9999zł',
      },
      {
        numberOfCar: '0',
        priceName: 'Miesiąc',
        price: '27999zł',
      },
    ],
  },
  {
    img: car2,
    imgm: car2m,
    name: 'BMW M2 Competition R8 V10',
    description: 'Mocne, kompaktowe BMW z Bawarii',
    techInfo: ['410KM', 'Tył', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '1',
        priceName: 'Doba',
        price: '899zł',
      },
      {
        numberOfCar: '1',
        priceName: 'Weekend',
        price: '2199zł',
      },
      {
        numberOfCar: '1',
        priceName: 'Tydzień',
        price: '3899zł',
      },
      {
        numberOfCar: '1',
        priceName: 'Miesiąc',
        price: '8999zł',
      },
    ],
  },
  {
    img: car3,
    imgm: car3m,
    name: 'Mercedes-AMG A45S',
    description: `Najnowsza odsłona najszybszego hot-hatch'a na rynku!`,
    techInfo: ['421KM', '4x4', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '2',
        priceName: 'Doba',
        price: '899zł',
      },
      {
        numberOfCar: '2',
        priceName: 'Weekend',
        price: '2199zł',
      },
      {
        numberOfCar: '2',
        priceName: 'Tydzień',
        price: '3899zł',
      },
      {
        numberOfCar: '2',
        priceName: 'Miesiąc',
        price: '8999zł',
      },
    ],
  },
  {
    img: car4,
    imgm: car4m,
    name: 'Mercedes-AMG A45',
    description: 'Najmocniejsza dwulitrówka świata!',
    techInfo: ['420KM', '4x4', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '3',
        priceName: 'Doba',
        price: '699zł',
      },
      {
        numberOfCar: '3',
        priceName: 'Weekend',
        price: '1699zł',
      },
      {
        numberOfCar: '3',
        priceName: 'Tydzień',
        price: '2699zł',
      },
      {
        numberOfCar: '3',
        priceName: 'Miesiąc',
        price: '6999zł',
      },
    ],
  },
  {
    img: car5,
    imgm: car5m,
    name: 'Lexus LC500',
    description: 'Luksusowe coupé o niesamowitych osiągach',
    techInfo: ['550KM', 'Tył', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '4',
        priceName: 'Doba',
        price: '1100zł',
      },
      {
        numberOfCar: '4',
        priceName: 'Weekend',
        price: '3000zł',
      },
      {
        numberOfCar: '4',
        priceName: 'Tydzień',
        price: '5000zł',
      },
      {
        hide: true,
      },
    ],
  },
  {
    img: car6,
    imgm: car6,
    name: 'Audi RS3',
    description: 'Hot-hatch z piekła rodem!',
    techInfo: ['400KM', '4x4', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '5',
        priceName: 'Doba',
        price: '799zł',
      },
      {
        numberOfCar: '5',
        priceName: 'Weekend',
        price: '1999zł',
      },
      {
        numberOfCar: '5',
        priceName: 'Tydzień',
        price: '3299zł',
      },
      {
        numberOfCar: '5',
        priceName: 'Miesiąc',
        price: '8499zł',
      },
    ],
  },
  {
    img: car7,
    imgm: car7m,
    name: 'Ford Mustang GT',
    description: 'Nowe wydanie amerykańskiej legendy',
    techInfo: ['450KM', 'Tył', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '6',
        priceName: 'Doba',
        price: '800zł',
      },
      {
        numberOfCar: '6',
        priceName: 'Weekend',
        price: '2500zł',
      },
      {
        numberOfCar: '6',
        priceName: 'Tydzień',
        price: '4000zł',
      },
      {
        numberOfCar: '6',
        hide: true,
      },
    ],
  },
  {
    img: car8,
    imgm: car8m,
    name: 'Ford Focus RS',
    description: '.. z każdego zrobi mistrza driftu',
    techInfo: ['350KM', '4x4', 'Automatyczna', 'Benzyna'],
    priceingInfo: [
      {
        numberOfCar: '7',
        priceName: 'Doba',
        price: '500zł',
      },
      {
        numberOfCar: '7',
        priceName: 'Weekend',
        price: '1300zł',
      },
      {
        numberOfCar: '7',
        priceName: 'Tydzień',
        price: '3000zł',
      },
      {
        numberOfCar: '7',
        priceName: 'Miesiąc',
        price: '6000zł',
      },
    ],
  },
];
