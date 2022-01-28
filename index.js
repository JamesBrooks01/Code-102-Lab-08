let date = new Date()
let CurrentD = date.getDate();
let CurrentM = date.getMonth() + 1;
let CurrentY = date.getFullYear();
let Fulldate = CurrentM + "-" + CurrentD + "-" + CurrentY;
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let CurrentS = date.getSeconds();
let timeDate = time + ' ' + Fulldate;
let listColor = document.getElementById("List");
let imageButton = document.getElementById('imageButton')
let i = 0
console.log(timeDate)

function askForTime() {
        let dtAnswer = prompt("Would you like to know the current date and time?");
            if (dtAnswer == null) {
                askForTime();
            }
            dtAnswer = dtAnswer.toLowerCase();
            if (dtAnswer === 'yes') {
                alert('It is ' + time + ' on ' + Fulldate);
            } else if (dtAnswer === 'no') {
                alert("It's alright, I'm just a question form");
            }
            else{
                alert('Please input a Valid input. If answer looks correct, try all lowercase');
                    if (i<3) {
                        i++
                        console.log("Number of Inputs", i)
                        askForTime();
                    }
            }
        return
}
function changeListcolor() {
    if (CurrentS > 40) {
        listColor.style.color = '#FCA311';
    }
    else if (CurrentS > 20) {
        listColor.style.color = '#DC2F02';
    }
    else {
        listColor.style.color = '#6A040F';
    }
    console.log('listColor', listColor)
    return
}
function addImages(imagePromt) {
    if (!imagePromt) {
        imagePromt = 'How Many Pictures of Jabba the Hutt do you want?'
    }
    let jabbaCount = prompt(imagePromt);
    if (jabbaCount === '') {
        let defaultMessage = 'How Many Pictures of Jabba the Hutt do you want?';
        let errorMessage = 'Cmon, you know you want to see at least 1';
        addImages(defaultMessage + ' ' + errorMessage);
    }
    console.log(jabbaCount)
    if (jabbaCount == 1) {
        for (let i = 0; i < 1; i++) {
        document.write("<img id='jabbaImage' src='./images/JabbaTheHutt.jpg'>")
        }
    }
    else if (jabbaCount == 2) {
        for (let i = 0; i < 2; i++) {
            document.write("<img id='jabbaImage' src='./images/JabbaTheHutt.jpg'>")
            }
    }
    else if (jabbaCount == 3) {
        for (let i = 0; i < 3; i++) {
                document.write("<img id='jabbaImage' src='./images/JabbaTheHutt.jpg'>")
                }
            }
    if (jabbaCount > 3) {
        alert('Please Choose A Number between 1 and 3')
        addImages()
    }
}

addImages()
/* askForTime()
if (i >= 3) {
    alert('Fine, be that way.')
}
alert("Try reloading the page when you're done reading, it might change")
changeListcolor()
*/