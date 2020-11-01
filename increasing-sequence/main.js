function almostIncreasingSequence(seq) {
  var bad = 0
  for (var i = 1; i < seq.length; i++) {
    if (seq[i] <= seq[i - 1]) {
      bad++
    }

    if (bad > 1) {
      return false
    }
    console.log(seq)
    console.log('seq[i]', seq[i], 'seq[i -2]', seq[i - 2], 'seq[i + 1]', seq[i + 1], 'seq[i - 1]', seq[i - 1])

    if (seq[i] <= seq[i - 2] && seq[i + 1] <= seq[i - 1]) {
      return false
    }
  }
  return true
}

almostIncreasingSequence([1, 3, 2, 1]);
