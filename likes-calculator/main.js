const likes = (names) => {
  const likesStr = 'likes this';
  const likeStr = 'like this';
  const namesLength = names.length;
  if (!namesLength) return `no one ${likesStr}`;
  if (namesLength === 1) return `${names[0]} ${likesStr}`;
  if (namesLength === 2) return `${names[0]} and ${names[1]} ${likeStr}`;
  if (namesLength === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} ${likeStr}`;
  return `${names[0]}, ${names[1]} and ${namesLength - 2} others ${likeStr}`;
};

function likes2(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}
