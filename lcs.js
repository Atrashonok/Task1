if (process.argv.length < 3) {
    console.log('');
  } else {
    let strings = process.argv.slice(2);
    let shortest = strings.reduce((a, b) => a.length <= b.length ? a : b);
    let maxlen = shortest.length;
    outer: for (let len = maxlen; len >= 0; len--) {
      for (let start = 0; start <= maxlen - len; start++) {
        let substr = shortest.substring(start, start+len);
        if (strings.every(elem => ~elem.indexOf(substr))) {
          console.log(substr);
          break outer;
        }
      }
    }
  }