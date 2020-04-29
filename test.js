// const btnEl = document.querySelector('.btn');

// const throttle = (func, limit) => {
//   let isTrigger = true;
//   return function () {
//     if (isTrigger) {
//       isTrigger = false;
//       func();
//       setTimeout(() => {
//         isTrigger = true;
//       }, limit);
//     }
//   };
// };

// const debounce = (func, limit) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, limit);
//   };
// };
// let count = 0;
// const expensive = () => console.log('Throttling func', count++);

// btnEl.addEventListener('click', debounce(expensive, 3000));

const user = {
  name: 'Manikandan Kaliyappan',
  address: {
    personal: {
      age: 20,
      city: 'Bengaluru',
      area: {
        landmark: 'Ubenezer Church',
      },
    },
    office: {
      city: 'Bengaluru',
      area: {
        landmark: 'Near Tata Consultancy services',
      },
    },
  },
};

const menu = {
  id: '0001',
  type: 'donut',
  name: 'Cake',
  ppu: 0.55,
  batters: {
    batter: [
      { id: '1001', type: 'Regular' },
      { id: '1002', type: 'Chocolate' },
      { id: '1003', type: 'Blueberry' },
      { id: '1004', type: "Devil's Food" },
    ],
  },
  topping: [
    { id: '5001', type: 'None' },
    { id: '5002', type: 'Glazed' },
    { id: '5005', type: 'Sugar' },
    { id: '5007', type: 'Powdered Sugar' },
    { id: '5006', type: 'Chocolate with Sprinkles' },
    { id: '5003', type: 'Chocolate' },
    { id: '5004', type: 'Maple' },
  ],
};

let finalObj = {};
const traverseObj = (obj, parent) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      traverseObj(obj[key], `${parent}_${key}`.toUpperCase());
    } else {
      finalObj[`${parent}_${key}`.toUpperCase()] = obj[key];
    }
  }

  return finalObj;
};

// console.log(traverseObj(user, 'user'));
console.log(traverseObj(menu, 'DISH'));
