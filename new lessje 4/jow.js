const myTitle = document.getElementById("mijntitel");
const mySeasons = document.getElementById("seasons");

let seasoning = [
    {
        "titel":"lente",
        "image":"spring.jpg",
        "hello":"winter.jpg",
        "backGround":"green"
    },
    {
        "titel":"lente",
        "image":"spring.jpg",
        "hello":"autumn.jpg",
        "backGround":"red"
    },
    {
        "titel":"lente",
        "image":"spring.jpg",
        "hello":"summer.jpg",
        "backGround":"yellow"
    },
    {
        "titel":"lente",
        "image":"spring.jpg",
        "hello":"spring.jpg",
        "backGround":"black"
    }
];
myTitle.innerHTML = seasoning.titel;
mySeasons.src = seasoning.image;
function chow(number){
    myTitle.innerHTML = seasoning[number].titel;
    mySeasons.src = seasoning[number].hello;
    document.body.style.backgroundColor = seasoning[number].backGround;
}