function convert(){
    let input = document.getElementById("input").value; // getting the input from the user
    if(input.trim() === ""){
        alert("Please enter some text");// if the input is empty then alert the user
        return;
    }
    let voice = new SpeechSynthesisUtterance(input); // creating a new instance of SpeechSynthesisUtterance
    window.speechSynthesis.speak(voice); // speaking the text
    // whidow.speechSynthesis is the api that converts text to voice
    //.speak() is the method that speaks the text

}