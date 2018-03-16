var signResult=[
document.getElementById("creature12Result"),
document.getElementById("creature3Result"),
document.getElementById("creature5Result"),
document.getElementById("creature7Result"),
document.getElementById("creature11Result"), 
document.getElementById("creature2Result"),
document.getElementById("creature6Result"),
document.getElementById("creature9Result"),
document.getElementById("creature10Result"),
document.getElementById("creature1Result"),
document.getElementById("creature4Result"),
document.getElementById("creature8Result"),]

var signAudio = [
document.getElementById("creature12Audio"),
document.getElementById("creature3Audio"),
document.getElementById("creature5Audio"),
document.getElementById("creature7Audio"),
document.getElementById("creature11Audio"), 
document.getElementById("creature2Audio"),
document.getElementById("creature6Audio"),
document.getElementById("creature9Audio"),
document.getElementById("creature10Audio"),
document.getElementById("creature1Audio"),
document.getElementById("creature4Audio"),
document.getElementById("creature8Audio"),]

var formElement= document.getElementById("form");
var firstNameInput= document.getElementById("firstName");
var lastNameInput= document.getElementById("lastName");
var dateInput= document.getElementById("date");
var result = 'Enter your name and birthday above to find out what mythical creature you are!';
var i = 0;


function resultVisibility(){
    signAudio[i].play();
    signResult[i].classList.remove("resultPage");
    signResult[i].classList.add("showResultPage");
}


function replaceNameEarth(firstName, lastName){
    document.getElementById("pageOne").innerText = "Paragraph changed" + firstName + " " + lastName;
}

function formHandler(){

    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var dateValueRaw = dateInput.value;

    var date = new Date(dateValueRaw);

    var inputMonth = date.getUTCMonth() + 1;
    var inputDay = date.getUTCDate();

function nameReplace(firstName, lastName){
return "lorem ipsum dolor sit amet"+ lastName +"lorem ipsum dolor sit amet"+firstName;
}

if ((inputMonth == 12 && inputDay > 21 && inputDay <= 31) || (inputMonth == 1 && inputDay <= 21)) {
    resultVisibility();
    // replaceNameEarth(firstName, lastName);
}

else if ((inputMonth == 1 && inputDay > 21 && inputDay <= 31) || (inputMonth == 2 && inputDay <= 19)){
    i = 1;
    resultVisibility();
}

else if ((inputMonth == 2 && inputDay > 19 && inputDay <=29) || (inputMonth == 3 && inputDay <= 20)){
    i = 2;
    resultVisibility();
}

else if ((inputMonth == 3 && inputDay > 21 && inputDay <= 31) || (inputMonth == 4 && inputDay <= 20)){
    i = 3;
    resultVisibility();
}

else if ((inputMonth == 4 && inputDay > 20 && inputDay <= 30) || (inputMonth == 5 && inputDay <= 21)){
    i = 4;
    resultVisibility();
}

else if ((inputMonth == 5 && inputDay > 21 && inputDay <= 31) || (inputMonth == 6 && inputDay <= 21)){
    i = 5;
    resultVisibility();
}

else if ((inputMonth == 6 && inputDay > 21 && inputDay <= 30) || (inputMonth == 7 && inputDay <= 22)){
    i = 6;
    resultVisibility();
}

else if ((inputMonth == 7 && inputDay > 22 && inputDay <= 31) || (inputMonth == 8 && inputDay <= 22)){
    i = 7;
    resultVisibility();
}

else if ((inputMonth == 8 && inputDay > 22 && inputDay <= 31) || (inputMonth == 9 && inputDay <= 23)){
    i = 8;
    resultVisibility();
}

else if ((inputMonth == 9 && inputDay > 23 && inputDay <= 30) || (inputMonth == 10 && inputDay <= 23)){
    i = 9;
    resultVisibility();
}

else if ((inputMonth == 10 && inputDay > 23 && inputDay <= 31) || (inputMonth == 11 && inputDay <= 22)){
    i = 10;
    resultVisibility();
}

else if ((inputMonth == 11 && inputDay > 22 && inputDay <= 30) || (inputMonth == 12 && inputDay <= 21)){
    i = 11;
    resultVisibility();
} 
}
formElement.addEventListener('change', formHandler);

