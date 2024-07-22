// let fruits = ["app", "orange", "kiwi"];
// fruits[0] = "apple"
// console.log(fruits[0]);

// let fruit = {
//   name: "apple",
//   scientificName: "k-afgvayghfv",
//   price: {
//     US: 5,
//     Nepal: 100,
//     Au: 7,
//     Canda: 3
//   },

// }
// console.log(fruit)

// fruit1 = {
//   name: "kiwi",
//   scientificName: "k-wrong-xyz",
//   prices: [
//     {
//       country: "nepal",
//       price: 1, // change this to 100
//     },
//     {
//       country: "us",
//       price: 1,
//     },
//     {
//       country: "au",
//       price: 1.5,
//     },
//   ],
// }

// console.log("before", fruit1.prices[0].price);
// fruit1.prices[0].price = 100
// console.log(fruit1.prices[0].price);

let backendResponse = {
  msg: "success",
  result: {
    total: 2,
    data: [
      {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        prices: [
          {
            country: "us",
            price: 1,
          },
          {
            country: "nepal",
            price: 1, // change this to 100
          },
        ],
      },
      {
        name: "orange",
        scientificName: "k-xyz",
        prices: [
          {
            country: "us",
            price: 2,
          },
          {
            country: "nepal",
            price: 200,
          },
          {
            country: "cad",
            price: 200,
          },
        ],
      },
    ],
  },
};

backendResponse.result.data[0].prices[1].price= {country : "canada", price : 100};

console.log(backendResponse.result.data[0].prices[1].price);
backendResponse.result.data[0].prices[1].price = 100;
console.log(backendResponse.result.data[0].prices[1].price);
console.log(backendResponse);



