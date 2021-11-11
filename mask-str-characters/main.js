const maskify = cc => cc.length <= 4 ? cc : `${cc.slice(0, -4).replace(/./g, #)}${cc.slice(-4)}`;
