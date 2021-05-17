const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener("click", () => {
  // fetch("https://finalspaceapi.com/api/v0/quote")
  fetch("https://finalspaceapi.com/api/v0/character?limit=20")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      data.forEach((character) => {
        console.log(`
          ${character.name},
          ${character.status},
          ${character.species},
          ${character.gender}
        `);
        output.innerHTML = `
        ${character.name},
        ${character.status},
        ${character.species},
        ${character.gender}
        `;
      });
      // get first number
      //   let item1 = items[Math.floor(Math.random() * items.length)];
      // let element = data[Math.floor(Math.random() * data.length)];
      // console.log(element);
      // output.innerHTML = `
      //   ${element.quote}
      //   ${element.by}
      //   <img src="${element.image}">
      // `;

      //   for (let i = 0; i < data.length; i++) {
      //     const element = data[i];
      //     output.innerHTML = `
      //         ${element.quote}
      //         ${element.by}
      //         <img src="${element.image}">
      //     `;
      //   }
    })
    .catch(function (err) {
      console.log(err);
    });
});

// fetch("https://finalspaceapi.com/api/v0/location")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// fetch("https://finalspaceapi.com/api/v0/episode")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
