const countSmileys = (arr) => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
