const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

const powerRanger = () => console.log('Green Ranger');
powerRanger();


export default powerRanger;
// Example
// hide(document.querySelectorAll('img')); // Hides all <img> elements on the page
