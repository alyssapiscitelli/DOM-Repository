const main = document.querySelector('main')
    let jokeNumber1= 'Florida is so hot that when old people retire and move to Florida its because they want to start practicing for Hell.'
    let jokeNumber2= 'It is hurricane season in Florida and I always get a little sad… you could say I suffer from tropical depression'
    let jokeNumber3='What did the full glass say to the empty glass? "You look drunk."'
    let p1 = 'Thats all folks!'
const template= 

`<section> 
    <ul>
    <li>${jokeNumber1}</li>
    <li>${jokeNumber2}</li>
    <li>${jokeNumber3}</li>
    </ul>
    <p> ${p1}</p>
</section> `
main.innerHTML = template
