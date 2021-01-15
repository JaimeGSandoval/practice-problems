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
