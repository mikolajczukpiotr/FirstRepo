function firstButton() {
    alert(Math.floor(Math.random() * 100))
}
    // let numberFib = document.getElementsByName('input').value
    // console.log(numberFib);
function secondButton(n){
if (n === 0){
    return alert("0")
}else if(n === 1){
    return alert("1")
} else{
    return alert(secondButton(n-1)+secondButton(n-2))
}
}
function thirdButton(){

}
