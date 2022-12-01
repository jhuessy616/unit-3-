// name

let Julia= {
    name: "Julia",
    age: 30,
    graduatedHSYear: 2010,
    pets: true,
    petNames : ["Poe", "Izzy"],
    mostRecentMovieWatched: "Luckiest Girl Alive",
    carsOwned: [{
        make: "Toyota",
        model: "Yaris"
    },
        {
            make: "Subaru",
            model: "Forester"
        }],
    favoriteSinger: "Paul McCartney",
  

};

// name

let Matt= {
    name: "Matt",
    age: 35,
    graduatedHSYear: 2005,
    pets: true,
    petNames : ["Penny", "Theo"],
    mostRecentMovieWatched: "Love Actually",
    carsOwned: [{
        make: "Ford",
        model: "Crown Vic"
    },
        {
            make: "Nissan",
            model: "Sentra"
        },
          {
            make: "Subaru",
            model: "Crosstrek"
        }
    ],
    favoriteSinger: "David Bowie",
  

};

// name

let Conor= {
    name: "Conor",
    age: 35,
    graduatedHSYear: 2006,
    pets: true,
    petNames : ["Tulip"],
    mostRecentMovieWatched: "Near Dark",
    carsOwned: [
        {
        make: "Honda",
        model: "Civic"
    },
        {
            make: "Honda",
            model: "Civic"
        },
          {
            make: "Volkswagon",
            model: "Jetta Wagon"
        }
    ],
    favoriteSinger: "Nancy Sinatra",
  

};


let myGroupArray = [Julia, Matt, Conor]
console.log(myGroupArray);

let sentence = `There were ${myGroupArray.length} people in our group. Their names were ${myGroupArray[0].name}, ${myGroupArray[1].name}, and ${myGroupArray[2].name}. ${myGroupArray[0].name} graduated in ${myGroupArray[0].graduatedHSYear}. ${myGroupArray[1].name}'s favorite singer is ${myGroupArray[1].favoriteSinger}. And ${myGroupArray[2].name} has ${myGroupArray[2].petNames.length} pet(s) and it's name is ${myGroupArray[2].petNames[0]}.`
console.log(sentence);

/* 


Students will then create an array with everyone's info from the variables they created. 

For the final part -  console log a sentence from the newly created array. 
"There were  3 . people in our group. Their names were  Rob , Ted,  Fred.  Rob graduated in 1998. Ted's favorite singer is Michael jackson. And Fred does not have any pets."

*/

// ! ALICES CODE
function petSentence(array, index) {
  let sentence = ""
  array[index].pets ? sentence += `${array[index].name.split(" ")[0]} has a pet named ${array[index].petNames[0]}.` 
  : sentence += `${array[index].name.split(" ")[0]} doesn't have any pets.`;
  return sentence;
}

function groupParagraphLog(array, index1=0, index2=1, index3=2) {
  console.log(
  `\nThere were ${array.length} people in our group. ` +
  `Their names were ${array[index1].name}, ${array[index2].name}, and ${array[index3].name}. ` + 
  `${array[index1].name.split(" ")[0]} graduated in ${array[index1].graduatedHSYear}. ` +
  `${array[index2].name.split(" ")[0]}'s favorite singer is ${array[index2].favoriteSinger}. And ${petSentence(students, index3)} `
  )
}