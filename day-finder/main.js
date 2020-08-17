// Define a function named dayFinder which takes in a string which represents a date(in the "MM/DD/YYYY" format) and returns a string which will be the day of the week for the argument date


function dayFinder(stringDate) {
  let date = new Date(stringDate);
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return week[date.getDay()];
}


dayFinder("05/22/1946") // -> "Wednesday"
dayFinder("01/20/2001") // -> "Saturday"
dayFinder("03/15/1988") // -> "Tuesday"
