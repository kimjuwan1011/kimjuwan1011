// document.getElementsByName("h1");
// document.getElementsByClassName("head-text");
// document.getElementById("head-text");

// document.querySelector(".head-text");
// document.querySelector("#head-text");
// document.querySelector("h1");

// var 변수명1 = 0;
// let 전화번호 = 01067888042;
// const 주민등록번호 = 0910115653543;

// const h1Tag = document.getElementById("head-text");

// 스코프 = 범위
// 스코프에는 전역과 지역이 있다

const h1Tag = document.getElementById("head-text"); //지역 스코프로 선언된 상태
let currentColor = h1Tag.style.color;

function changeColor() {
    console.log(currentColor);

    switch(currentColor){
        case "white":
            h1Tag.style = "color: red;";
            currentColor = h1Tag.style.color;
            break;

        case "red":
            h1Tag.style = "color: blue;";
            currentColor = h1Tag.style.color;
            break;

        case "blue":
            h1Tag.style = "color: white;";
            currentColor = h1Tag.style.color;
            break;
    }
}

// 흰 -> 빨
// 빨 -> 파
// 파 -> 흰

