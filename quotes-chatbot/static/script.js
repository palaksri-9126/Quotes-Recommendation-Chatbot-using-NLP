function startChat(){

document.getElementById("landing").style.display="none";
document.getElementById("chatPage").style.display="flex";

addBotMessage("Hey hi 👋");
addBotMessage("Please tell me which quotes you want today (Motivation / Love / Success / Funny)");

}

function addUserMessage(text){

let chatBox=document.getElementById("chatBox");

chatBox.innerHTML+=`<div class="user">${text}</div>`;

chatBox.scrollTop=chatBox.scrollHeight;

}

function addBotMessage(text){

let chatBox=document.getElementById("chatBox");

chatBox.innerHTML+=`<div class="bot">${text}</div>`;

chatBox.scrollTop=chatBox.scrollHeight;

}

function sendMessage(){

let input=document.getElementById("userInput");

let msg=input.value;

if(msg.trim()==="") return;

addUserMessage(msg);

input.value="";

addBotMessage("Typing...");

fetch("/get",{

method:"POST",

headers:{
"Content-Type":"application/x-www-form-urlencoded"
},

body:"msg="+msg

})

.then(res=>res.json())

.then(data=>{

let chatBox=document.getElementById("chatBox");

chatBox.lastChild.remove();
chatBox.scrollTop = chatBox.scrollHeight;
addBotMessage(data);

});

}


/* ENTER KEY SUPPORT */

document.getElementById("userInput").addEventListener("keypress",function(e){

if(e.key==="Enter"){
sendMessage();
}

});