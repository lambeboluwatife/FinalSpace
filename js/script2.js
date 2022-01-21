const btn = document.querySelector(".btn");
const text = document.getElementById("input");
const locationResult = document.querySelector(".location-result");
const quoteResult = document.querySelector(".quote-result");
const searchImage = document.querySelector(".search-img");
const alert = document.querySelector(".alert");

// Get Locations
fetch("https://finalspaceapi.com/api/v0/location/")
  .then(function (res) {
    return res.json();
  })
  .then(function (locations) {
    locations.forEach((location) => {
      const div = document.createElement("div");
      div.classList.add("img-area");
      const image = document.createElement("img");
      image.src = location.img_url;

      div.appendChild(image);

      const textDiv = document.createElement("div");
      textDiv.classList.add("img-text");

      const name = document.createElement("h3");
      name.innerHTML = `${location.name}`;
      textDiv.appendChild(name);

      const type = document.createElement("h5");
      type.innerHTML = `Type: ${location.type}`;
      textDiv.appendChild(type);

      const inhabitants = document.createElement("h5");
      inhabitants.innerHTML = `Inhabitants: ${location.inhabitants.join(", ")}`;
      textDiv.appendChild(inhabitants);

      if (location.inhabitants == "") {
        inhabitants.style.display = "none";
      }

      div.appendChild(textDiv);
      locationResult.appendChild(div);
    });
  });

// Get Quotes
fetch("https://finalspaceapi.com/api/v0/quote/")
  .then(function (res) {
    return res.json();
  })
  .then(function (quotes) {
    // console.log(quotes);
    quotes.forEach((quote) => {
      const div = document.createElement("div");
      div.classList.add("quote-card");
      const image = document.createElement("img");
      image.src = quote.image;

      div.appendChild(image);

      const textDiv = document.createElement("div");
      textDiv.classList.add("quote-container", "text-center");

      const name = document.createElement("h3");
      name.innerHTML = `${quote.by}`;
      textDiv.appendChild(name);

      const word = document.createElement("p");
      word.innerHTML = `${quote.quote}`;
      textDiv.appendChild(word);

      div.appendChild(textDiv);
      quoteResult.appendChild(div);
    });
  });

btn.addEventListener("click", (event) => {
  event.preventDefault();
  text.addEventListener("focus", () => {
    alert.textContent = "";
    text.value = "";
  });
  searchImage.innerHTML = "";
  let input = text.value;
  if (input == "") {
    alert.textContent = "Enter a character name";
    setTimeout(() => alert.remove(), 3000);
  } else {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    fetch("https://finalspaceapi.com/api/v0/character")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        data.forEach((character) => {
          if (character.name.includes(capitalize(input))) {
            const div = document.createElement("div");
            const image = document.createElement("img");
            image.src = character.img_url;
            image.alt = `${input}'s image`;

            div.classList.add("inline");
            div.appendChild(image);

            const textDiv = document.createElement("h2");
            textDiv.innerHTML = `${character.name}`;

            div.appendChild(textDiv);

            const dataDiv = document.createElement("div");
            dataDiv.classList.add("inline");
            const abilities = document.createElement("h3");
            abilities.innerHTML = `Abilities: ${character.abilities.join(
              ", "
            )}`;

            const alias = document.createElement("h3");
            alias.innerHTML = `Alias: ${character.alias.join(", ")}`;

            const gender = document.createElement("h3");
            gender.innerHTML = `Gender: ${character.gender}`;

            const hair = document.createElement("h3");
            hair.innerHTML = `Hair: ${character.hair}`;

            const origin = document.createElement("h3");
            origin.innerHTML = `Origin: ${character.origin}`;

            const species = document.createElement("h3");
            species.innerHTML = `Species: ${character.species}`;

            const status = document.createElement("h3");
            status.innerHTML = `Status: ${character.status}`;

            if (character.alias == "") {
              alias.innerHTML = "Alias: None";
            }

            dataDiv.appendChild(abilities);
            dataDiv.appendChild(alias);
            dataDiv.appendChild(gender);
            dataDiv.appendChild(hair);
            dataDiv.appendChild(origin);
            dataDiv.appendChild(species);
            dataDiv.appendChild(status);

            searchImage.appendChild(div);
            searchImage.appendChild(dataDiv);
          }
        });
      });
  }
});
