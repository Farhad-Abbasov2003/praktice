fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const body = document.body;
      const container = document.querySelector(".container");
      const card = document.createElement("div");

      const col = document.createElement("div");
      card.classList.add("card");
      col.classList.add("col-4");

      card.innerHTML = `
       <img src="${element.flags.png}"class="card-img-top">
       <div class="card-body">
       <p class="card-text">${element.name.official}</p>
       <p class="card-text">Population: ${element.population}</p>
       <p class="card-text">Region: ${element.region}</p>
       <p class="card-text">Capital: ${element.capital}</p>
       </div>
       `;
    });
  });
