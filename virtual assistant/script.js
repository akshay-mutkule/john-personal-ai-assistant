let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang='dl-iN';
    window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let day=new Date();
    let hours=day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning Akshay! How can I help you?");
    }
    else if(hours>=12 && hours<18){
        speak("Good Afternoon Akshay! How can I help you?");
    }
    else{
        speak("Good Evening Akshay! How can I help you?");
    }
}
window.addEventListener("load",()=>{
    wishme();
});
let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
   let transcript= event.results[currentIndex][0].transcript;
   content.innerText=transcript;
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none"
    voice.style.display="block"
});
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey") || message.includes("hi")){
        speak("Hello Akshay! I am your virtual assistant. How can I help you?");
    }
    else if(message.includes("how are you")){
        speak("I am fine sir! What about you?");
    }
    else if(message.includes("what is your name")){
        speak("My name is john, Your virtual assistant , Created by Akshay sir.");
    }
    else if(message.includes("open youtube")){
        speak("Opening YouTube");
        window.open("https://www.youtube.com/");
    }
    else if(message.includes("open google")){
        speak("Opening Google");
        window.open("https://www.google.com/");
    }   
    else if(message.includes("open facebook")){
        speak("Opening Facebook");
        window.open("https://www.facebook.com/");
    }       
    else if(message.includes("open instagram")){
        speak("Opening Instagram");
        window.open("https://www.instagram.com/");
    }
    else if(message.includes("open calculator")){
        speak("Opening Calculator");
        window.open("https://www.calculator.com/");
    }
    else if(message.includes("time")){
        let date=new Date();
        let hours=date.getHours();
        let minutes=date.getMinutes();
        speak("The current time is "+hours+" hours and "+minutes+" minutes");
    }   
    else{
        let finalText="this is what i found on google for "+message.replace("jon","john") || message.replace("jonny","john");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("john","jon")}`);
       
    }
}