const people = [
  {name:'john', job:'developer'},
  {name:'susan', job:'developer'},
  {name:'anna', job:'the boss'}
];

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
  const newPeople = people.map((person) => {
    const {name, job} = person;
    return `<p> ${name} <strong> ${job} </strong> </p>`
  }).join('');
  container.innerHTML = newPeople;
}

btn.addEventListener('click', () => {
  showPeople()
})