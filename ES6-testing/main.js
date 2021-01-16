// MAPS
const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black'
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black'
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrador',
    color: 'chocolate'
  }
];

const filters = new Map().set('breed', 'labrador').set('size', 'large').set('color', 'chocolate');
console.log('Whole Filter Object ', filters);
console.log('size ', filters.get('size'));
console.log('breed', filters.get('breed'));
console.log('test', filters.set('test', 'test'));
console.log('delete', filters.delete('test'));


const errors = new Map([
  [100, 'Invalid name'],
  [110, 'Name should only contain letters'],
  [200, 'Invalid']
]);

console.log(errors.get(100));
console.log(errors.get(110));
console.log(errors.get(200));


//DESTRUCTURING OBJECTS

const ninja = {
  level: 'Kage'
}

const { level } = ninja; // prints out 'Kage'

const testPhoto = {
  title: 'bankai',
  // location: 'location',
  src: 'src',
  size: 'large'
}

const copy = { ...testPhoto }; // will be an exact copy of testPhoto object
const { photographer = 'Ichigo', ...details } = testPhoto; // 'details' will be an object with all the properties from testPhoto except for 'photographer'. 'photographer' property will be equal to 'Ichigo'

const { size, ...otherProperties } = testPhoto; // 'size' will be a variable on its own that's extracted from 'testPhoto'. 'otherProperties' will be an object with the rest of the properties from testPhoto, but without 'size'

const landScape = {
  src: '/landscape.jpg'
}

const { src: url } = landScape; // 'url' will print out '/landscape.jpg'


// DESTRUCTURING ARRAYS

// Example 1
const coordinates = {
  locations: [32.7122222, -103.1405556]
};

const { locations } = coordinates;
const [latitude, longitude] = locations;
// 'latitude' prints out 32.7122222
// 'longitude' prints out -103.1405556


const landScape2 = {
  locations2: [32.7122222, -103.1405556]
}

const { locations2: [latitude2, longitude2] } = landScape2;
// 'latitude2' prints out 32.7122222
// 'longitude2' prints out -103.1405556

function displayPhoto(photo) {
  const {
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...other
  } = photo;

  const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);

  return (
    `<img> alt="Photo of ${title} by ${photographer}" src=${url}/>
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude}</div>
    <div>Longitude: ${longitude}</div>
    <div>${additional.join('<br/>')}</div>
    `);
}

// passing in the destructuring into parameter, which automatically destructure
function displayPhoto2({ title, photographer = 'Anonymous', location: [latitude, longitude],
  src: url, ...other }) {
  // ...other is an object with the other properties, which is why other[key] works
  const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);

  return (
    `<img> alt="Photo of ${title} by ${photographer}" src=${url}/>
    <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${latitude}</div>
    <div>Longitude: ${longitude}</div>
    <div>${additional.join('<br/>')}</div>
    `);
}

function getArguments(str, num) {
  console.log([...arguments]);
}

getArguments('chidori', 5);

console.log(['Spirited Away', 'Princess Mononoke'].map((film, ...other) => {
  console.log(other);
  return film.toLowerCase();
}));


// Example 2
const queue = ['stop', 'collaborate', 'listen'];
const [first, ...remaining] = queue;
console.log(first);
console.log(remaining);
