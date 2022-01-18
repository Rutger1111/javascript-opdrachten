const myTitle = document.getElementById("titels");
const myImage = document.getElementById("img0");
const myInput = document.getElementById("myInput");
let nummer = 0;

let lokaties = [
{
    "titel":"plaats 0",
    "imagejes":"0.jpg"
}
,
{
    "titel":"plaats 1",
    "imagejes":"1.jpg"
}
,
{
    "titel":"plaats 2",
    "imagejes":"2.jpg"
}
,
{
    "titel":"plaats 3",
    "imagejes":"3.jpg"
}
,
{
    "titel":"plaats 4",
    "imagejes":"4.jpg"
}
,
{
    "titel":"plaats 5",
    "imagejes":"5.jpg"
}
,
{
    "titel":"plaats 6",
    "imagejes":"6.jpg"
}
,
{
    "titel":"plaats 7",
    "imagejes":"7.jpg"
}
,
{
    "titel":"plaats 8",
    "imagejes":"8.jpg"
}
,
{
    "titel":"plaats 9",
    "imagejes":"9.jpg"
}
,
{
    "titel":"plaats 10",
    "imagejes":"10.jpg"
}
,
{
    "titel":"plaats 11",
    "imagejes":"11.jpg"
}
]
function nummerfunctie(erafoferop){
    if (erafoferop == 1){
        nummer += 1;
    } 
    if (erafoferop == 2){
        nummer -=1
    }
    show();
    
}
function getInput(){
    console.log(myInput.value)
    show(myInput.value);
    myInput.value = "";
    myInput.focus()
}
function show(){
    
    myTitle.innerHTML = lokaties[myInput.value].titel;
    myImage.src = lokaties[myInput.value].imagejes;

    show();
}



show();