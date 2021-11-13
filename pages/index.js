let zoey = new Date("09/22/2017")
let chick1 = new Date("04/08/2021")
let animals = [
    {name: "Zoey",birthdate:"09/22/2017"}, 
    {name: "BunBun, Silly Goose, Sunshine, Mustard", birthdate:"04/08/2021"},
    {name: "Tootles", birthdate: "07/08/2019"},
    {name:"Dolly Carton, Princess Layer, Imma, Katniss", birthdate:"07/17/2021"},
    {name:"Nada, Salt, Pepper, Black Widow, Bell, Turkey", birthdate:"08/04/2021"},
    {name:"Todo", birthdate:"06/01/2021"}
]
    

function getdifference(birthdate){
    let currentDate = new Date();
    let animalDate = new Date(birthdate)
    let Difference_In_Time = currentDate.getTime() - animalDate.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
let weeks = Math.floor(Difference_In_Days/7);
if(weeks>52){
    let years = Math.floor(weeks/52);
    return `${years.toString()} Years old`
}else {
    return `${weeks.toString()} weeks old`;
}

}

function listAnimals(){}
export default function FirstPost() {
    return <div>{animals.map(function(d, idx){
        return (<div key={idx}>{d.name} Age: {getdifference(d.birthdate)}</div>)
      })}</div>
  }