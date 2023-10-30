var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+919062432943'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>9062432943</label></div> </a> <a href='mailto:pratyaymondal911@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/Pratyay008'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/919062432943'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Pratyay008'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/_pratyay_mondal_/'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/pratyay-mondal-153198222/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";


var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Pratyay Resume.pdf</label></div><a href='assets/Pratyay Mondal&#39;s Resume.pdf' download='Pratyay_Mondal_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d919.3312801834716!2d88.23643716209659!3d22.827457947072862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688139609838!5m2!1sen!2sus' class='map'></iframe></div><label class='add'><address>Vill- Ratanpur<br>P.O.- Dihi-Ratanpur<br>P.S.- Singur<br>Dist- Hooghly <br>State- West Bengal <br>Country- India <br>Pin Code- 712409</address>";



function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hi there 👋🏻<br><br>My name is <span class='bold'><a class='alink'>Pratyay Mondal</a>.</span><br><br>I am an engineering student of Computer Science and Business Systems from the university, Maulana Abul Kalam Azad University of Technology. 📚<br><br>I am enthusiastic to hear about potential career opportunities in the software engineering domain.<br><br>Send <span class='bold'>'help'</span> to conversate with me.<br>");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Type below keywords to know about me:<br><br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'about'</span> - to know about this site<br> <span class='bold'>'clear'</span> - to clear conversation</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>My skills:<br><br>Programming languages: <br><span class='bold'>Java<br>C++<br>C<br>SQL<br>Python<br>HTML<br>CSS<br>JavaScript</span>   <br><br>Skills: <span class='bold'><br>Problem Solving<br>Web Development<br>Machine Learning </span><br><br>Soft skills: <span class='bold'><br>Communication<br>Analytical<br>Team Management<br>Public Speaking</span>");
            break;

        case "education":
            sendTextMessage("I am currently pursuing B.Tech degree in Computer Science and Business Systems from the university, Maulana Abul Kalam Azad University of Technology<br>Passing Year: 2024<br><br>I have completed my Diploma from WBSCTVESD board <br>Passing Year: 2021<br>Result: 81.2%<br><br>I have completed my High Secondary education from WBCHSE board<br>Passing Year: 2018<br>Result: 72.2%<br><br>I have completed my Secondary education from WBBSE board<br>Passing Year: 2016<br>Result: 86.7%");
            break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 This portfolio website is built using HTML, CSS and JavaScript. <br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' ><span class='bold'>Pratyay Mondal</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("All my projects are into my GitHub Account.<br><br><div class='social'><a target='_blank' href='https://github.com/Pratyay008'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch you...😢<br>Send 'help' to know how to chat with me.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
