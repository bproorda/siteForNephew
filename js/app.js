function Quiz() { 
    alert("Welcome to my About Me quiz! Please answer questions with y or n");
    var points = 0
    
    //quiz in array form
    var quesArray = ['Was I Born in Vladivostok, Russia?', 'Do I own A German T-95 Anti-Tear Gas Protective mask?', 'Do I have Three Dogs?', 'Can I cook a Darn Diddly good steak?'];
    var quizAns = ['n', 'y', 'y', 'y'];
    var correctRes = ['That is Correct, comrade!', 'Who has two thumbs and is ready for the zombie apocalypse...this guy', 'Yes, they are my fur babies', 'That\s right baby, I am a CHEF!'];
    var wrongRes = ['Net', 'What, you don\'t?', 'The Tube of Terror still counts as dog', 'I find you lack of faith disturbing'];
    var wrongAns = ['y', 'n', 'n', 'n'];
    var quizArray = [quesArray, quizAns, correctRes, wrongRes, wrongAns];
    
    for(var i = 0; i < 4; i++) {
            var ans1 = prompt(quizArray[0][i]);
            console.log(ans1);
            var lans1 = ans1.toLowerCase();
            console.log(lans1)
            if (lans1 === quizArray[1][i]) {
                console.log("Visitor is correct")
                alert(quizArray[2][i]);
                points++
            } else if (lans1 === quizArray[4][i]) {
                alert(quizArray[3][i]);
                console.log("Visitor is incorrect")
            } else {
                alert("Invalid Answer Detected!");
                console.log("Visitor is incorrect");
                i--;
        }
    }
        var guess5 = prompt('Have I made any questions related to/or  Mentioning the Acropolis of Athens?').toLowerCase();
        if (guess5 === "a") {
            alert("Acropolis of Athens");
        } else if (guess5 === "y" || guess5 === 'n') {
            alert("Are you sure?");
        } else {
            alert("Stii sa vorbesti romaneste?");
        }

        var guess6 = prompt('Is my favorite genre of Novel Related to the Disappearance of the Acropolis of Athens?').toLowerCase();
        if (guess6 === "y" || guess6 === 'n') {
            alert("The Acropolis of Athens is everything"); 
        } else {
            alert("Mērā khōtā kithē hai?");
        }

        var guess7 = prompt('How do you feel about the Acropolis of Athens?').toLowerCase();
        if (guess7 === "y") {
            alert("Wrong!");
        } else if (guess7 === "y") {
            alert("Right!");
        } else {
            alert("Die kat is in my broek");
        }

        var guess8 = prompt('Where did you put the Acropolis of Athens?').toLowerCase();
            alert("If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills, skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let the Acropolis of Athens go now, that'll be the end of it.")

        var guess9 = prompt('What is my favorite genre of music?').toLowerCase();
        if (guess9 === "podcasts dealing with the disappearance of Acropolis of Athens") {
            alert("...are you stalking me? or are you also trying to find the Acropolis of Athens");
        } else {
           alert("That is right, my favortie genre of music is podcasts dealing with the disappearance of Acropolis of Athens");
        }
    }
    // Quiz();