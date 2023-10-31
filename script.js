const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveAway = document.querySelector('.giveaway')
const deadLine = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

// let futureDate = new Date(2023, 10, 1, 11, 30, 0)// mostra la data odierna. se sivuole mostrare un'altra data è necessario aggiungere valori all'interno
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
//i mesi sono 0 index based
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
//per inserire questi dati nell'html vanno estratti uno ad uno

const year = futureDate.getFullYear();
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let month = futureDate.getMonth()
month = months[month]
// const getMonth = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

giveAway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

//future time in milliseconds
const futuretime = futureDate.getTime()

function getRemaindingTime(){
    const today = new Date().getTime()
    const t = futuretime - today
    // 1s = 1000ms
    // 1m = 60s
    // 1h = 60min
    // 1d = 24h

    //values in ms

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000

    let days = t/oneDay
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
     if (item < 10) {
      return (item = `0${item}`);
    }
      return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}

// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();

