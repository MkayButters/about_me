"use strict"


        //questions for user remember to console log answers

        var identity= 'start'; 
        
        identity = prompt('What is your name?')
        
        alert('Welcome to my site, ' + identity + '!')
    
        //questions to answer  (y/n)

             
       var q1 = prompt('Do you know the muffin man?');
       

        if (q1.toLowerCase() == "yes")
        {
            alert('Very good, ' + identity);
        }
        if (q1.toLowerCase() == "no")
        {
            alert(identity + ", he lives on Drury Lane!");
        }
        

        var q2 = prompt('Does 10+12=22?')

        if(q2.toLowerCase() == "yes")
        {
            alert("That is correct, " + identity);
        }

        if (q2.toLowerCase() == "no")
        {
            alert("Are you sure, " + identity + "?");
        }

        
        var q3 = prompt("Is the sun out?");

        if (q3.toLowerCase() == "yes")
        {
            alert("Vitamin D helps the brain function!");
        }

        if (q3.toLowerCase() == "no")
        {
            alert("They say the moon is made of cheese, " + identity);
        }

        
        var q4 = prompt("Can hulk defeat superman in a battle to the death?");

         if (q4.toLowerCase() == 'yes')
         {
             alert("You are correct, " + identity);
         }

         if  (q4.toLowerCase() == "no")
         {
             alert('You are correct, ' + identity);
         }

         
         var q5 = prompt("Did you enjoy the prompts?");

         if (q5.toLowerCase() == "yes")
         {
             alert("You may proceed, " + identity);
         }

         if (q5.toLowerCase() == "no")
         {
             alert("Wrong answer " + identity + ", try again")
            window.location.reload();
         }
         console.log(identity + " |" + q1 + " |" + q2 + " |" + q3 + " |" + q4 + " |" + q5)
                 //credit https://www.codeproject.com/Questions/1166054/How-to-properly-reload-the-ASP-page-after-js-alert for the q5 "no" troll