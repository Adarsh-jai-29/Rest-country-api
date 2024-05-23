 const countryDiv = document.querySelector('.main-content')
// console.log(countryDiv)

fetch('https://restcountries.com/v3.1/all')
.then(data=>{
return data.json() 
})
.then(res=>{ 
 
  // debugger
  res.forEach(info => {
    const card = document.createElement('a'); 
   card.setAttribute('href','#')  // abhi href attribute set karna hai
    card.classList.add('card');
    // console.log(info)
    card.innerHTML = `<div class="country-image">
    <img src=${info.flags.svg} alt=""> </div>
    <div class="country-info">
    <h3 class="country-name">&nbsp;&nbsp;&nbsp;&nbsp;${info.name.common}</h3><br>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Population</b>: ${info.population.toLocaleString()} </p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Region</b>: ${info.region}</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Capital</b>: ${info.capital} </p>
    </div>`
    

    countryDiv.append(card);
  });




 
})