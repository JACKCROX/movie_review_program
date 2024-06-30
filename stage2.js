// Date Created: 9/July/2023
// Author : LIN HTET 
// Addimission No: 2340304
// Class : DIT/FT/1A/08
// Description: This is the "STAGE-2" javascript file for the CA-2 project.

let input = require("readline-sync");
class Movie {
  constructor(Name, Genre, RunningTime, ReleaseDate, Rating, Comment) {
    this.Name = Name;
    this.Genre = Genre;
    this.ReleaseDate = ReleaseDate;
    this.RunningTime = RunningTime;
    this.Rating = Rating;
    this.Comment = Comment;
  }
  displayMovieDetails() {
    let hour = this.RunningTime / 60;
    let trueHour = Math.floor(hour);
    let min = Math.round((hour - trueHour) * 60);
    let actualrunningTime = "";
    if (min == 0) {
      actualrunningTime += trueHour + "h ";
    }

    else if (trueHour == 0) {
      actualrunningTime += min + "m ";
    }

    else {
      actualrunningTime += trueHour + "h " + min + "m ";
    }
    let voters = this.Rating[0];
    let sumOfrating = this.Rating[1];
    let trueAverageRating = voters > 0 ? Math.round((sumOfrating / voters) * 10) / 10 : 0;

    return "Name          : " + this.Name + "\n" + "Genre         : " + this.Genre + "\n" + "Running Time  : " + actualrunningTime + "\n" + "Release Date  : " + this.ReleaseDate + "\n" + "Rating        : " + trueAverageRating + " " + "(" + voters + " " + "voters" + ")"

  }

  addComment(comment) {
    this.Comment.push(comment);
  }

}

var blackpanther = new Movie(
  "Black Panther: Wakanda Forever 2022",
  "Advanture, Action, Drama, Fantasy, Sci-Fi, Thriller",
  161,
  "11 Nov 2022",
  [9, 42],
  []
);

var avatar = new Movie(
  "Avatar: The Way of Water",
  "Adventure, Sci-Fi",
  192,
  "16 Dec 2022",
  [4, 15],
  []
);

var fastX = new Movie(
  "Fast X",
  "Crime, Action, Mystery, Thriller",
  43,
  "19 May 2023",
  [28, 60],
  []
);

var antman = new Movie(
  "Ant-Man and the Wasp: Quantumania",
  "Adventure, Action",
  120,
  "16 Feb 2023",
  [18, 80],
  []
);

var m3gan = new Movie(
  "M3GAN",
  "Horror, Mystery, Thriller",
  102,
  "6 Jan 2023",
  [20, 70],
  []
);

var movieList = [blackpanther, avatar, fastX, antman, m3gan];

//                             function call for display all movies
function displayAllMovies() {
  let movieDetails = "";
  if (movieList.length === 0) {
    movieDetails = "There is no movie posted yet. Comming Soon! Thank you for your patience.";
  } else {
    movieList.forEach((movie) => {
      movieDetails += movie.displayMovieDetails() + "\n";
      movieDetails += "_____________________________________________________________________________\n";
    });
  }
  return movieDetails;
}

//                              checking for unique movie name
function isMovieNameUnique(name) {
  let lowerCaseName = name.toLowerCase();
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].Name.toLowerCase() === lowerCaseName) {
      return false;
    }
  }
  return true;
}


//                                 checking special characters
function hasSpecialCharacters(inputString) {
    // Define the regular expression pattern to match special characters
    var specialCharPattern = /[!@#$%^&*().]/;
  
    // Test the input string against the pattern
    return specialCharPattern.test(inputString);
  }


  //                              function call for add movie
function addMovie() {
  let name = input.question("Please enter Movie's name: ");

  while (!isMovieNameUnique(name)) {
    console.log("Please enter a unique movie name.");
    name = input.question("Please enter Movie's name: ");
  }


  //                            Sorting alphabetically for genre options
  let genreOptions = [
    "Thriller", "Sci-Fi", "Mystery", "Horror", "Fantasy", "Drama", "Crime", "Adventure", "Action"
  ];
  genreOptions.sort();

  let selectedGenres = [];

  console.log("Please select Movie's genre(s) (comma-separated):");
  for (let i = 0; i < genreOptions.length; i++) {
    console.log(`\t${i + 1}) ${genreOptions[i]}`);
  }

  let genreInput = input.question("\t>> ");
  let genreSelections = genreInput.split(",").map(genreIndex => genreIndex.trim());  //trim() is used to remove the white space


  //                            checking for valid genre options
    for (let i = 0; i < genreSelections.length; i++) {
      let genreIndex = Number(genreSelections[i]) - 1;
      if (genreIndex >= 0 && genreIndex < genreOptions.length && Number.isInteger(genreIndex) && !hasSpecialCharacters(genreSelections[i])) {
        selectedGenres.push(genreOptions[genreIndex]); 
      }
    }
  
  //                            checking for valid genre options
  while (selectedGenres.length !== genreSelections.length) {
    console.log("Please enter valid genre option(s)!");
    genreInput = input.question("\t>> ");
    genreSelections = genreInput.split(",").map(genreIndex => genreIndex.trim());
    selectedGenres = [];
    for (let i = 0; i < genreSelections.length; i++) {
      let genreIndex = Number(genreSelections[i]) - 1;
      if (genreIndex >= 0 && genreIndex < genreOptions.length && Number.isInteger(genreIndex) && !hasSpecialCharacters(genreSelections[i])) {
        selectedGenres.push(genreOptions[genreIndex]);
      }
    }
  }

  //                            checking for valid running time
  let runningTime = 0;
  let validRunningTime = false;
  while (!validRunningTime) {
    runningTime = Number(input.question("Please enter Movie's running time (mins): "));
    validRunningTime = !isNaN(runningTime) && runningTime > 0;
    if (!validRunningTime) {
      console.log("Please enter a valid running time!");
    }
  }

  //                            checking for valid release date
  let releaseDate = "";
  let validDate = false;
  while (!validDate) {
    releaseDate = input.question("Please enter the movie's release date in format (DD Month YYYY): ");

    let dateParts = releaseDate.split(" ");
    if (dateParts.length === 3) {
      let day = Number(dateParts[0]);
      let month = dateParts[1];
      let year = Number(dateParts[2]);

      let validDay = day >= 1 && day <= 31;
      let validMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].includes(month); //checking for whether the month include in that array or not
      let validYear = year >= 1900 && year <= 2099;

      if (validDay && validMonth && validYear) {
        validDate = true;
        releaseDate = `${day} ${month} ${year}`;
      }


      else {
        console.log("Please enter a valid date in the format (DD Month(e.g Jan,Feb) YYYY)!");
        validDate = false;
      }
    }
  }


  let userInputMovie = new Movie(name, selectedGenres, runningTime, releaseDate, [0, 0], []);
  movieList.push(userInputMovie);

  return "\nMovie added successfully.";

}


//                              function call for add rating
function addRating() {
  let movieRatingname = "";
  console.log("Select the movie to add a rating:");
  for (let i = 0; i < movieList.length; i++) {
    movieRatingname += `\t${i + 1}) ${movieList[i].Name}\n`;
  }
  movieRatingname += `\t${movieList.length + 1}) Go Back to the main menu`;

  console.log(movieRatingname);
  let userInput = input.question("\t>> ");

  if (userInput === `${movieList.length + 1}`) {
    return "Returning to the main menu.";
  } else {
    let selectedMovieIndex = Number(userInput) - 1;
    if (selectedMovieIndex >= 0 && selectedMovieIndex < movieList.length) {
      let selectedMovie = movieList[selectedMovieIndex];
      let rating = 0;


      while (true) {
        let ratingInput = input.question(`Enter your rating for "${selectedMovie.Name}" (1 to 5 inclusive): `);
        rating = Number(ratingInput);

        if (rating >= 1 && rating <= 5 && Number.isInteger(rating)) {
          break;

        } else {
          console.log("Enter a valid rating!");
        }
      }

      selectedMovie.Rating[0] += 1;
      selectedMovie.Rating[1] += rating;

      return `Rating added successfully for "${selectedMovie.Name}".`;


    } else {
      return "Invalid movie selection. Choose the movie provided and please try again!  ";
    }
  }
}


//                              function call for latest 3 release dates
function displayLatestReleaseDates() {
  // Create a copy of the movie list
  const movieListCopy = [...movieList];

  // Sort the copied movie list based on release dates in descending order
  movieListCopy.sort((a, b) => new Date(b.ReleaseDate) - new Date(a.ReleaseDate));

  // Get the first three movies from the sorted movie list
  const latestMovies = movieListCopy.slice(0, 3);

  console.log("The latest 3 movies are:");
  latestMovies.forEach((movie, index) => {
    console.log(`${index + 1}) ${movie.ReleaseDate} - ${movie.Name}`);
  });

  return "Returning to the main menu.";
}


//                              function call for filter by genre
function filterByGenre() {
  console.log("Please select a genre:");
  let genreOptions = ["Thriller", "Sci-Fi", "Mystery", "Horror", "Fantasy", "Drama", "Crime", "Adventure", "Action"];
      genreOptions.sort();

  genreOptions.forEach((genre, index) => {
    console.log(`\t${index + 1}) ${genre}`);
  });

  let userInput = input.question("\t>> ");
  let genreIndex = Number(userInput) - 1;

  if (genreIndex >= 0 && genreIndex < genreOptions.length) {
    let selectedGenre = genreOptions[genreIndex];
    let moviesWithGenre = movieList.filter(movie => movie.Genre.includes(selectedGenre));

    if (moviesWithGenre.length > 0) {
      console.log(`\nYou have selected "${selectedGenre}" genre:`);
      moviesWithGenre.forEach((movie, index) => {
        console.log(`${index + 1}) ${movie.Name}`);
      });
    } else {
      console.log(`\nThere are no movies in the "${selectedGenre}" genre.`);
    }
  } else {
    console.log("\nPlease enter a valid genre input!");
  }

  return "Returning to the main menu.";
}


//                              function call for add/view comments
function addCommentSession() {
  console.log("Select the movie to add/view a comment:");
  for (let i = 0; i < movieList.length; i++) {
    console.log(`\t${i + 1}) ${movieList[i].Name}`);
  }

  let userInput = input.question("\t>> ");
  let selectedMovieIndex = Number(userInput) - 1;

  if (selectedMovieIndex >= 0 && selectedMovieIndex < movieList.length) {
    let selectedMovie = movieList[selectedMovieIndex];

    console.log(`\nYou have selected "${selectedMovie.Name}".`);
    console.log("Select an option:");
    console.log("\t1) Add a comment");
    console.log("\t2) View comments");

    userInput = input.question("\t>> ");

    if (userInput === "1") {
      let comment = input.question("Enter your comment: ");
      selectedMovie.addComment(comment);
      return "Comment added successfully.";
    } else if (userInput === "2") {
      if (selectedMovie.Comment.length > 0) {
        console.log(`\nComments for "${selectedMovie.Name}":`);
        selectedMovie.Comment.forEach((comment, index) => {
          console.log(`${index + 1}) ${comment}`);
        });
      } else {
        console.log(`\nNo comments available for "${selectedMovie.Name}".`);
      }
      return "";
    } else {
      return "Invalid option. Returning to the main menu.";
    }
  } else {
    return "Invalid movie selection. Choose the movie provided and please try again!";
  }
}


//                              Main Program run
console.log("\nWelcome to Silver Vintage Movie Review Program.");
this.user = input.question("Please enter your name:");

var loop = true;
while (loop) {
  console.log(`\nHi ${this.user}, please select your choice:`);
  console.log("\t1. Display All Movies");
  console.log("\t2. Add Movie");
  console.log("\t3. Add Rating");
  console.log("\t4. Latest 3 Release Dates");
  console.log("\t5. Filter by Genre");
  console.log("\t6. Add/View Comments");
  console.log("\t7. Exit");

  let choice = input.question("\t>>");

  switch (choice) {
    case "1":
      console.log(displayAllMovies());
      break;
    case "2":
      console.log(addMovie());
      break;
    case "3":
      console.log(addRating());
      break;
    case "4":
      console.log(displayLatestReleaseDates());
      break;
    case "5":
      console.log(filterByGenre());
      break;
    case "6":
      console.log(addCommentSession());
      break;
    case "7":
      console.log("Thank you for visiting Silver Vintage Movie Review Program. See you again!");
      loop = false;
      break;
    default:
      console.log("Invalid input number. Please choose a valid option provided. [Number 1 to 6 (decimal number not provied yet.)].");
  }
}



