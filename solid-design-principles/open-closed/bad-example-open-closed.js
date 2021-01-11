// Open closed principle has software entities that should be open for extension but closed to modification

// here when we change something in question, say, add a new type of question to the questions array, you have to actually go into printQuiz and change it. This should'nt have to happen . It should be closed be closed off to changes. If you change the code outside of the printQuiz function, you shouldn't have to change code inside of the printQuiz function. printQuiz should just automatically work if you add a new quiz type without having to go into printQuiz and change it. That's what the closed portion of the open closed principle is all about.

// The open portion is saying that we have the ability to add new things. You can add a new type to the questions array and allow things to work automatically without having to make changes

// Example of how not to do it
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);

    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('2. False');
        break;
      case 'multipleChoice':
        question.options.forEach((option, index) => {
          console.log(`${index + 1}. ${option}`)
        })
        break;
      case 'text':
        console.log('Answer________');
        break;
    }
    console.log('')
  });
}

// To make this open closed, what we have to do is make a class for each type of question

const questionsTest = [
  {
    type: 'boolean',
    description: 'This video is useful.'
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language?',
    options: ['CSS', 'HTML', 'JS', 'Python']
  },
  {
    type: 'text',
    description: 'Describe your favorite JS feature.'
  }
];

printQuiz(questionsTest);
