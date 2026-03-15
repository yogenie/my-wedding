// BGM

const bgm = document.getElementById("bgm")
const musicBtn = document.getElementById("musicBtn")

let playing=false

// 초대장 열기

document.getElementById("openBtn").onclick=()=>{

document.getElementById("curtain").style.display="none"

bgm.play()

playing=true

}

// 음악 버튼

musicBtn.onclick=()=>{

if(playing){

bgm.pause()

}else{

bgm.play()

}

playing=!playing

}

// 계좌 복사

function copyAccount(id){

const text=document.getElementById(id).innerText

navigator.clipboard.writeText(text)

alert("계좌번호가 복사되었습니다")

}

// 카카오 공유

Kakao.init("YOUR_APP_KEY")

function shareKakao(){

Kakao.Link.sendDefault({

objectType:"feed",

content:{

title:"성현 ♥ 여진 결혼합니다",

description:"2026년 4월 25일",

imageUrl:"https://yourdomain.com/images/og/1.jpg",

link:{

mobileWebUrl:window.location.href,
webUrl:window.location.href

}

}

})

}

// 달력 저장

function addCalendar(){

const start="20260425T140000"

const end="20260425T160000"

const url=
"https://calendar.google.com/calendar/render?action=TEMPLATE"+
"&text=성현 여진 결혼식"+
"&dates="+start+"/"+end+
"&details=결혼식"+
"&location=엘타워"

window.open(url)

}

// 스크롤 애니메이션

const fades=document.querySelectorAll(".fade")

window.addEventListener("scroll",()=>{

fades.forEach(el=>{

const top=el.getBoundingClientRect().top

if(top<window.innerHeight-100){

el.classList.add("show")

}

})

})
