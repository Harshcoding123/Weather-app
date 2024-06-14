let url ="https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=987487f1cdb381f26115bb56b018beb1";
 async function func(e){
    let response = await fetch(url);
    // console.log(response);
    let usableData = await response.json();
    return usableData;
   
    console.log(usableData);   
}


func();
let search =document.querySelector("button");
let searchbar= document.querySelector("input");
let weatherImage =document.querySelector("#weatherImage");
let temp= document.querySelector("#temp");
let city= document.querySelector("#city");
let otherInfo1Data= document.querySelector("#otherInfo1Data");
let otherInfo2Data =document.querySelector("#otherInfo2Data");


search.addEventListener("click",()=>{
     url =`https://api.openweathermap.org/data/2.5/weather?q=${searchbar.value}&appid=987487f1cdb381f26115bb56b018beb1`;
     
     func().then((r)=>{
        console.log(r);
        otherInfo2Data.innerText=` ${r.wind.speed}KM/H`;
        console.log( r.wind.speed);
        otherInfo1Data.innerText=` ${r.main.humidity}%`;
        let p= r.weather[0].main.toLowerCase();
        console.log(p);
        city.innerText= p;
        
        let t= r.main.temp-273;
        console.log(t);
        temp.innerText =`${Math.floor(t)} C`;
        if(p=="clouds"){
            weatherImage.src= "images/clouds.png";
            

        }else if(p=="rain"){
            weatherImage.src= "images/rain.png";

        }else if(p=="mist"){
            weatherImage.src= "images/mist.png";
        }else if(p=="snow"){
            weatherImage.src= "images/snow.png";

        }else if(p=="clear"){
            weatherImage.src= "images/clear.png";
        }else if(p=="dizzle"){
            weatherImage.src= "images/dizzle.png";
        };
    })
    

})
