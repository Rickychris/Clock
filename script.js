const secondHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.mins-hand');
const hourHand=document.querySelector('.hour-hand');
const time=document.querySelector(".time");


function setDate(){
    const date=new Date();
    const seconds=date.getSeconds();
    const mins=date.getMinutes();
    const hour=date.getHours();
    // const time=date.get();
    time.innerHTML=date.toLocaleTimeString();

    const secdeg=((seconds/60)*360+90);
    secondHand.style.transform= `rotate(${secdeg}deg)`;
    //  console.log(seconds);

    const mindeg=((mins/60)*360+90);
    minHand.style.transform= `rotate(${mindeg}deg)`;
    // console.log(mins);

    const hrdeg=((hour/12)*360+90);
    hourHand.style.transform=`rotate(${hrdeg}deg)`;
}


setInterval(setDate,1000);