class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}


class MultipleChoiceQuestions {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`)
    })
  }
}

class TextQuestion {
  constructor(description, options) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Answer: ____________');;
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Minimum: ____________');
    console.log('Maximum: ____________');
  }
}


// Closed but opened to be extended. You can add another class and question and not have to change this to have it display.
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description)
    question.printQuestionChoices();
    console.log('');
  })
}

const questions = [
  new BooleanQuestion('This video is useful'),
  new MultipleChoiceQuestions('Who is you favorite Hokage?', ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh']),
  new TextQuestion('Describe your favorite Jutsu'),
  new RangeQuestion('What\'s the kunai limit in your village?')
];

printQuiz(questions);

// When you see those big switch statements or big if statements, always realize that your almost always violating the open closed principle and you should always refactor that code to use for example classes, or functions, or modules, something that breaks out that logic into individual classes or functions that have the logic in them, and then that crazy switch statement can be broken down into one single function call

// IMPLEMENTATION GUIDELINES
// - The simplest way to apply open closed principle is to implement the new functionality on new derived classes
// - Allow clients to access the original class with abstract interface

// Software elements (classes, modules, functions, etc) should be open for extension but closed for modification

// You should build your classes in a way that you can extend them via child classes and inheritance. Once you've created the class, you no longer need to be changed
