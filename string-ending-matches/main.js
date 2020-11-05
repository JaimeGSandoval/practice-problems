function checkEnding(str1, str2) {
  const str2Length = str2.length;
  const endOfStr = str1.slice(-str2Length)
  return str2 === endOfStr;
}
