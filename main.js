
let zadnje = document.getElementsByClassName('kocka-js')[0];
let zadnje1 = document.getElementsByClassName('kocka-jss')[0];
let zadnje2 = document.getElementsByClassName('kocka-jsss')[0];


let loop;





    digitalClock =()=>{

        let vrijeme = new Date();
        let sati = vrijeme.getHours();
        let minute = vrijeme.getMinutes();
        let sekunde = vrijeme.getSeconds();
        zadnje.innerHTML = sati;
        zadnje1.innerHTML = minute;
        zadnje2.innerHTML = sekunde;
    
    }

    digitalClock();

loop = setInterval(digitalClock,1000);



// setInterval(

//     digitalClock =()=>{
//         let vrijeme = new Date();
//         let sati = vrijeme.getHours();
//           let minute = vrijeme.getMinutes();
//           let sekunde = vrijeme.getSeconds();
//         zadnje.innerHTML = sati;
//          zadnje1.innerHTML = minute;
//           zadnje2.innerHTML = sekunde;
    
        
//     }, 1000)

//     digitalClock();












