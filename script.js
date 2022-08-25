let count=0;
function helloBtn(){
    count += 1;
    let hello = document.querySelector("#hello-count");
    hello.innerText = count;
}
function handWave(){
    var img = document.querySelector('.hand-img');
    img.src = "./assets/good-bye.png";
}
function handWave2(){
    var img2 = document.querySelector('.hand-img');
    img2.src = "./assets/hand-wave.jpg";
}