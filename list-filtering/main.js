const filter_list(l) = l.filter((v) => typeof v == 'number');
const accum = (s) => s.split('').map((letter, i) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(i)}`).join('-');
const isSquare = n => Math.sqrt(n) * Math.sqrt(n);
