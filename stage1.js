// Date Created: 19/June/2023
// Author : LIN HTET 
// Addimission No: 2340304
// Class : DIT/FT/1A/08
// Description: This is the "STAGE-1" javascript file for the CA-2 project.

var catergories=["Name               ","Genre              ","Running Time       ","Release Date       ","Rating             "];
var movie1=[" Black Panther: Wakanda Forever 2022" , " Advanture, Action, Drama, Fantasy, Sci-Fi, Thriller " , 161 , " 11 Nov 2022" , [9,42] ];
var movie2=[" Avatar: The Way of Water" , " Adventure, Sci-Fi " , 192 , " 16 Dec 2022" , [4,15] ];
var movie3=[" Fast X " , " Crime, Action, Mystery, Thriller " , 43 , " 19 May 2023" , [28,60] ];
var movie4=[" Ant-Man and the Wasp: Quantumania" , " Adventure, Action " , 120 , " 16 Feb 2023" ,  [18,80] ];
var movie5=[" M3GAN Horror" , " Mystery, Thriller " , 102 , " 6 Jan 2023" ,  [20,70] ];
var movieList=[movie1,movie2,movie3,movie4,movie5];

console.table(movieList);

for( let i=0 ; i < movieList.length; i++){
    var time = movieList[i][2];
    var hour = time/60;
    var trueHour = Math.floor(hour);
    var min = Math.round((hour-trueHour) * 60);

    if (min == 0){
        movieList[i][2] = trueHour + "h " ;
    }

    else if (trueHour == 0){
        movieList[i][2] = min + "m ";
    }
    
    else {
        movieList[i][2] = trueHour + "h " + min + "m ";
    }
}

for( let i=0 ; i < movieList.length; i++){
    var voters = movieList[i][4][0];
    var sumOfrating = movieList[i][4][1];
    var averageRating = sumOfrating/voters;
    var trueAverageRating = Math.round((averageRating*10))/10;
    movieList[i][4] = " " + trueAverageRating + " " + "(" + voters + " " + "voters" + ")"
}

let input= require("readline-sync");

let viewerName = input.question("Please enter your name: ");

console.log("Hi" + " " + viewerName + "," + " " + "please select your choice to know more about your choice.");

console.log("\t" + "1. Diplay all Movies (Details about each movie)"+"\n"+"\t" + "2. Comming Soon"+"\n"+"\t" + "3. Comming Soon"+"\n"+"\t" + "4. Comming Soon"+"\n"+"\t" + "5. Comming Soon"+"\n"+"\t" + "6. Exist");
const providedChoice = "\t" + "1. Diplay all Movies (Details about each movie)"+ "\n"+"\t" +
                       "2. Comming Soon"+"\n"+"\t" +
                       "3. Comming Soon"+"\n"+"\t" + 
                       "4. Comming Soon"+"\n"+"\t" + 
                       "5. Comming Soon"+"\n"+"\t" + 
                       "6. Exit";
var choice = input.question("\t"+">>");

 while ( choice !=6){

    if (choice == 1){
        for (let i=0 ; i < movieList.length ; i++){
            console.log("\n" + catergories[0] + ":" + movieList[i][0] + "\n" + catergories[1] + ":" + movieList[i][1] + "\n" + catergories[2] + ":" +" "+ movieList[i][2] + "\n" + catergories[3] + ":" + movieList[i][3] + "\n" + catergories[4] + ":" + movieList[i][4] + "\n");
            console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        }
        console.log("Hi" + " " + viewerName + "," + " " + "please select your choice." + "\n" + providedChoice);
    }

    else if (choice < 1 || choice > 6 || isNaN(choice) || !Number.isInteger(choice) ) {
        console.log("Please enter a valid input. Decimal numbers are not allowed! Type (Number 1) for all movies , (Number 2-5) are still in progress, (Number 6) to exit. "+ "\n\n" + "Hi" + " " + viewerName + "," + " " + "please select your choice to know more about your choice.");
        console.log( providedChoice);   
        }
    
    
    else if ( choice > 1 && choice <  6) {
        console.log("Sorry! Work in Progress. Later, we'll provide more practical options! Ready to choose again?" +"\n\n" + "Hi" + " " + viewerName + "," + " " + "please select your choice to know more in detail.");
        console.log( providedChoice);
        }

    choice = input.question("\t"+">>")
}

if (choice == 6){
    console.log("Thank you for using our website & good bye! Have a great day!");
}













