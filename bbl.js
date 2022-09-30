let guestNum = document.querySelector('#guest')
let dialougeBx =document.querySelector('.dialougeBx')
let close = document.querySelector('#close')
let scoreNum = document.querySelector('#score')
let timeNum = document.querySelector('#time')
let crlbox1 = document.querySelector('#crlbox1')
let Clickedbble =  document.querySelector('#num')
let crlbox = document.querySelector('#crlbox')

// let guestnumber = document.querySelector('#guest')
// let dialougeBx =document.querySelector('.dialougeBx')
// let close =document.querySelector('#close')
// let showTime = document.querySelector('#time')
// let showscore = document.querySelector('#score')
// let bubbleBX = document.querySelector('.bubbleBX')
// let randomNumber = Math.floor(Math.random() * 10)

let Rnumber = Math.floor(Math.random() * 10)

guestNum.innerHTML =  Rnumber

 let time = 15

 timeNum.innerHTML = time
//  console.log( time);

 let score = 0

 scoreNum.innerHTML = score
//  console.log(score)
setInterval(()=>{
    if(time>0){
        time=time - 1
        timeNum.innerHTML = time
    }
    else{
            dialougeBx.style.display = 'flex'
            bubbleBX.innerHTML = ''
          }
},1000)
 

close.addEventListener('click',()=>{
  dialougeBx.style.display = 'none'
  bubbleBX.innerHTML = ''
  createBbl();
  time = 15
})


 crlbox1.addEventListener('click',(e)=>{
  if(e.target.id=='num'){
   if(e.target.innerHTML==guestNum.innerHTML){
     score = score + 10
     e.target.classList.add('crlbox')
     scoreNum.innerHTML = score
     guestNum.innerHTML = Math.floor(Math.random() * 10)
     e.target.class = ''
    }
    else{
      e.target.classList.remove('crlbox')
      score = score - 5
      scoreNum.innerHTML = score
      guestNum.innerHTML = Math.floor(Math.random() * 10)
    }
  } })





const createBbl =()=>{
 for(let i = 0 ; i<70; i++){
    let bubbleNum = Math.floor(Math.random() * 10)
    crlbox1.innerHTML += `<div   id="crlbox">
    <img src="pngegg.png" alt="" >
    <h2 class='' id="num">${bubbleNum}</h2>
 </div>`
}

}





// Clickedbble.addEventListener('click',(e)=>{
//     console.log(e);
// })


// const createBbl =()=>{
//   for (let i = 0; i<= 59; i++) {
//     let bubleNumber = Math.floor(Math.random() * 10)
//     bubbleBX.innerHTML += `<div class="bbl">
//     <img src="./pngegg.png" alt="">
//     <h2 id="number" >${bubleNumber}</h2>
//     </div>`
//   }
// }


// createBbl();

// let guestnumber = document.querySelector('#guest')
// let dialougeBx =document.querySelector('.dialougeBx')
// let close =document.querySelector('#close')
// let showTime = document.querySelector('#time')
// let showscore = document.querySelector('#score')
// let bubbleBX = document.querySelector('.bubbleBX')
// let randomNumber = Math.floor(Math.random() * 10)



// guestnumber.innerHTML = randomNumber

// let time = 15

// showTime.innerHTML = time

// let score = 0

// showscore.innerHTML = score



// setInterval(()=>{
//   if(time>0){
//     time = time - 1
//     showTime.innerHTML =  time
//   }else{
//     dialougeBx.style.display = 'flex'
//     bubbleBX.innerHTML = ''
//   }

// },1000)


// close.addEventListener('click',()=>{
//   dialougeBx.style.display = 'none'
//   bubbleBX.innerHTML = ''
//   createBbl();
//   time = 15
// })


// bubbleBX.addEventListener('click',(e)=>{
//  if(e.target.id=='number'){
//   if(e.target.innerHTML==guestnumber.innerHTML){
//      score = score + 10
//     showscore.innerHTML = score
//     guestnumber.innerHTML = Math.floor(Math.random() * 10)
//     }

//  }
// })



// const createBbl =()=>{
//   for (let i = 0; i<= 59; i++) {
//     let bubleNumber = Math.floor(Math.random() * 10)
//     bubbleBX.innerHTML += `<div class="bbl">
//     <img src="./pngegg.png" alt="">
//     <h2 id="number" >${bubleNumber}</h2>
//     </div>`
//   }
// }


// createBbl();

createBbl();