// 1.

// let data = {
//   Sophia: {
//     id: 33,
//     study: [
//       {
//         primary: [
//           { school_name: "ABC primary school" },
//           { location: "Peters burg" },
//         ],
//       },
//       {
//         secondary: [
//           { school_name: "ABC secondary school" },

//           { location: "St Lorence" },
//         ],
//       },
//     ],
//   },
// };

// const access = data.Sophia?.study[1].secondary[1].location
// console.log(access);


// 2.


// let data = [
//   {
//     pHeroCourses: {
//       "course-x": "web development",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-y": "phitron",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-z": "acc",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-xyz": "level-2",
//     },
//     locationField: {
//       "en-US": {
//         lat: 19.28563,
//         lon: 72.8691,
//       },
//     },
//   },
// ];

// console.log(data[3].pHeroCourses["course-xyz"]);
// console.log(data[3].locationField["en-US"].lon);

// 3.


// let activities = {
//   activity1: [
//     {
//       name: "listen on spotify",

//         song_list: {
//         song_1: "abc",
//         song_2: "bcd",
//       },
//       id: 1,
//     },
//     {
//       name: "listen music through bot",

//       song_list: {
//         song_1: "wxy",
//         song_2: "xyz",
//       },
//       id: 2,
//     },
//   ],
// };
// const act = activities.activity1[0]['song_list'].song_1
// const act2 = activities.activity1[1]['song_list'].song_2
// console.log(act);
// console.log(act2);

// 4.


// let students = {
//   2222: {
//     name: "Jack",
//     section: "C",
//     class: "IX",
//     address: {
//       "building no": 12,
//       street: "St. Jonson",
//       city: "Petersburg",
//       country: "UK",
//     },
//   },
//   3333: {
//     name: "Herry",
//     section: "D",
//     class: "X",
//     address: {
//       street: "DC road",
//       city: "Kachukhet",
//       country: "Bangladesh",
//     },
//   },
// };

// const get = students['2222'].address.city
// console.log(get);
// const herry = students['3333'].name
// console.log(herry);

// 5.


// let instructor = {
//   name: "Jhankar Mahbub",
//   entrepreneur: true,
//   additionalData: {
//     writer: true,
//     favoriteHobbies: ["travelling", "Coding"],
//     books: ["programming er bolod to bos", "programming er coddogosti"],
//     moreDetails: {
//       favoriteBasketballTeam: "XYZ",
//       isYoungest: true,
//       hometown: {
//         city: "ABC",
//         state: "VW",
//       },
//       countriesLivedIn: ["Bangladesh", "New York"],
//     },
//   },
// };

// const prog = instructor.additionalData.books[1]
// const vw = instructor.additionalData.moreDetails.hometown.state
// const bd = instructor.additionalData.moreDetails.countriesLivedIn[0]
// console.log(prog);
// console.log(vw);
// console.log(bd);

// 6.


// const studentData = [
//   {
//     class: 10,
//     details: [
//       {
//         studentId: "1",
//         gradingDetails: [{ grade: "A" }],
//       },
//       {
//         studentId: "2",
//         gradingDetails: [{ grade: "B" }],
//       },
//     ],
//   },
//   {
//     class: 11,
//     details: [
//       {
//         studentId: 3,
//         gradingDetails: [{ grade: "B" }],
//       },
//       {
//         studentId: 4,
//         gradingDetails: [{ grade: "D" }],
//       },
//     ],
//   },
// ];

// const b = studentData[1].details[0].gradingDetails[0].grade
// const d = studentData[1].details[1].gradingDetails[0].grade
// console.log(b);
// console.log(d);


// 7.


// let data = {
//   data: [
//     {
//       bookId: 1,
//       bookDetails: {
//         name: "habluder adda",
//         category: "XYZ",
//         price: "20$",
//       },
//       bookCategory: "Basic",
//     },
//     {
//       bookId: 2,
//       bookDetails: {
//         name: "gobluder adda",
//         category: "ABC",
//         price: "40$",
//       },
//       bookCategory: "Beginner",
//     },
//   ],
// };

// console.log(data.data[0].bookDetails.name);
// console.log(data.data[1].bookCategory);
