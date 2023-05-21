

console.log('HELLO')


let url = 'http://numbersapi.com'
let favNumber = 25;



$.getJSON(`${url}/${favNumber}?json`).then(data => {
    console.log(data)
})

//2
let favNumbers  = [5,10,15];

$.getJSON(`${url}/${favNumbers}?json`).then(data => {
    console.log(data)
})

//3
Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  