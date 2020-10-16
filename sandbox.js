// // const now = new Date();

// // // console.log(now);
// // // console.log(typeof now);

// // // // years, months, days, times
// // // console.log('getFullYear:', now.getFullYear());
// // // console.log('getMonth (0-based):', now.getMonth());
// // // console.log('getDate:', now.getDate());
// // // console.log('getDay (0-based):', now.getDay());
// // // console.log('getHours:', now.getHours());
// // // console.log('getMinutes:', now.getMinutes());
// // // console.log('getSeconds:', now.getSeconds());

// // // // timestamps
// // // console.log('timestamp:', now.getTime());

// // // // date strings
// // // console.log(now.toDateString());
// // // console.log(now.toTimeString());
// // // console.log(now.toLocaleString());
// // const now = new Date();

// // console.log(now);

// // console.log(typeof now);

// // console.log("getFullYear:", now.getFullYear());
// // console.log("getMohths:", now.getMonth());
// // console.log('getDate:', now.getDate());
// // console.log("getDay (0-based):", now.getDay());
// // console.log('getHours:', now.getHours());
// // console.log('getMinutes:', now.getMinutes());
// // console.log('getSeconds:', now.getSeconds());

// // //timestamps
// // console.log("timestamp:", now.getTime());


// // //date strings 
// // console.log(now.toDateString());
// // console.log(now.toTimeString());
// // console.log(now.toLocaleString());
// const before = new Date("Febuary 1 2019 7:30:59");
// const now = new Date();

// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);

// console.log(mins, hours, days);

// const timestamp = 1675938474990;
// console.log(new Date(timestamp));
const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const tick = () => {

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let d = now.getDate();
    let year = now.getFullYear();
    let day = now.getDay();
    let months = now.getMonth();



    let html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    
    `;
    let html2 = `
    <span>${day}</span> 
    `
    if (h > 12) {
        html += `<span>PM</span>`
    } else if (h < 12) {
        html += `<span>AM</span>`
    };
    if (day == 0) {
        html2 = `<span>Sunday</span>, `
    } else if (day == 1) {
        html2 = `<span>Monday</span>, `
    } else if (day == 2) {
        html2 = `<span>Tuesday</span>, `
    } else if (day == 3) {
        date.innerHTML = `<span>Wednesday</span>, `
    } else if (day == 4) {
        html2 = `<span>Thursday</span>, `
    } else if (day == 5) {
        html2 = `<span>Friday</span>, `
    } else if (day == 6) {
        html2 = `<span>Saturday</span>, `
    };
    if (months == 0) {
        html2 += `<span>January</span>, `
    } else if (months == 1) {
        html2 += `<span>February</span>, `
    } else if (months == 2) {
        html2 += `<span>March</span>, `
    } else if (months == 3) {
        html2 += `<span>April</span>, `
    } else if (months == 4) {
        html2 += `<span>May</span>, `
    } else if (months == 5) {
        html2 += `<span>June</span>, `
    } else if (months == 6) {
        html2 += `<span>July</span>, `
    } else if (months == 7) {
        html2 += `<span>August</span>, `
    } else if (months == 8) {
        html2 += `<span>September</span>, `
    } else if (months == 9) {
        html2 += `<span>October</span>, `
    } else if (months == 10) {
        html2 += `<span>November</span>, `
    } else if (months == 11) {
        html2 += `<span>December</span>, `
    }

    html2 += `<span>${d}</span>, `
    html2 += `<span>${year}</span>`
    clock.innerHTML = html;
    date.innerHTML = html2;

};

setInterval(tick, 1000);