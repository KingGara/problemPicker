/*
    This is a leet code problem selector. As I continue solving I'll update the 
    object. The idea is to randomly select a 'n' problems a day to complete 
    in preperation for a remote software engineering position.
*/


const readline = require('readline');
const problems = require('./dataBase');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const validInputs = ["easy", "medium", "hard"];
let attempts = 0;


const question = () => {
    rl.question('\nWhat difficulty? (Easy, Medium, Hard)\n\n> ', (difficulty) => {
        difficulty = difficulty.toLowerCase().trim();

                            // if no valid inputs are included in difficulty
        if (!validInputs.includes(difficulty)) {
            attempts++;
            if (attempts < 3) {
                console.log('Not a valid input, try again\n');
                setTimeout(() => question(), 900);
            } else {
                console.log('\nToo many invalid attempts, closing');
                setTimeout(() => rl.close(), 900);
            }
            return
        }

        const filteredProblems = Object.values(problems).filter(problem =>
            problem.toLowerCase().includes(difficulty)
        );

        if (filteredProblems.length === 0) {
            console.log('\nNo problems found for this difficulty');
            rl.question('Try another input? (yes/no)\n\n> ', (response) => {
                const newResponse = response.trim().toLowerCase();
                
                if(newResponse === 'yes') {
                    question();
                } else {
                    console.log('\nGoodbye!');
                    setTimeout(() => rl.close(), 900);
                }
            });
            return
        }

        const randomIndex = Math.floor(Math.random() * filteredProblems.length)
        const randomKey = filteredProblems[randomIndex];
        console.log(`\n${randomKey}`);
        setTimeout(() => rl.close(), 900);
    });
}

question();



//const readline = require('readline');
//const problems = require('./dataBase');
//
//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});
//
//const validDifficulties = ["Easy", "Medium", "Hard"]
//
//let attempts = 0;
//
//const question = () => {
//    rl.question('What level question would you like? (Easy, Medium, Hard)\n\n> ', (difficulty) => {
//        difficulty = difficulty.trim();
//
//                            //Check if input was left empty
//        if(!validDifficulties.includes(difficulty)) {
//            attempts++
//            if(attempts < 3) {
//                console.log("\nInput cannot be empty, try again");
//                question();
//            } else {
//                console.log("\nNo valid input recognized, closing");
//                setTimeout(() => rl.close(), 1500);
//            }
//            return
//        }
//
//                            // Filter based on difficulty
//        const filteredProblems = Object.values(problems).filter(problem =>
//            problem.includes(difficulty)
//        );
//
//                            //Checks if filteredProblems is empty due to unrecognized difficulty
//        if(filteredProblems.length === 0) {
//            attempts++;
//            if(attempts < 3) {
//                console.log(`No problems found for "${difficulty}". Please try again.`);
//                question();
//            } else {
//                console.log("No valid input recognized, Closing.");
//                setTimeout(() => rl.close(), 1500);
//            }
//        } else {
//            const randomIndex = Math.floor(Math.random() * filteredProblems.length);
//            const randomKey = filteredProblems[randomIndex]
//            console.log(`\n${randomKey}`)
//            setTimeout(() => rl.close(), 1500);
//        }
//    });
//};
//
//question();



























