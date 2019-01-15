function runGame(pharses){
    function getFoundStr(pharse,letters){
        //print pharse as --------- unless the value is in letters.
        pharse = pharse.toLowerCase().split("");
        letters.toString();
        var result=[];
        for(var i =0; i<pharse.length;i++)
        {
            if(pharse[i].indexOf(letters))
                result.push(pharse[i]);
            else if (pharse[i] === "")
                result.push("");
            else
                result.push("-")
        }
        return result.toString();
    }
    function isWon(pharse,letters){
        //check if one of the pharse letters are not in the letters array
        pharse = pharse.toLowerCase().split("")
        letters.toString();
        for(var i =0; i<pharse.length;i++)
        {
            if(letters.indexOf(pharse[i])==-1)
                return false;
        }
        return true;
    }
    function simulateUserInput(){
        alfaBet = "abcdefghijklmnopqrstuvqxyz"
        alfaBet = alfaBet.split("");
        return alfaBet[Math.floor(Math.random() * alfaBet.length)];
    }
    function isInPharse(pharse,letters){
        pharse = pharse.toLowerCase().split("")
        letters.toString();
        for(var i =0; i<pharse.length;i++)
        {
            if(letters.indexOf(pharse[i])>-1)
                return true;
        }
        return false;
    }
    var life = 10;
    currentPharse = pharses[Math.floor(Math.random() * pharses.length)];
    foundLetters = [];

    while(life>0 && !isWon(currentPharse,foundLetters))
    {
        console.log("your current life is "+ life);
        console.log("your current foundings are "+ getFoundStr(currentPharse,foundLetters));
        console.log("please enter a letter");
        var currentLetter = simulateUserInput();
        if (isInPharse(currentPharse,currentLetter))
        {
            console.log("letter was found in the string")
            foundLetters.push(currentLetter);
        }
        else
        {
            life--;
        }
    }

    if(life===0)
    {
        console.log("you lost!");
    }
    if(isWon(currentPharse,foundLetters))
    {
        console.log("you won!");
    }

}

phrases = ["ant man","aquaman", "batman", "captain america", "green arrow", "iron man", "superman", "wonderwoman", "doctor strange"];
runGame(phrases);