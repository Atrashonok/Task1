if (process.argv.length < 3) {
    console.log('')
  } else {
    let s = process.argv.slice(2)
    let h = s.reduce((a, b) => a.length <= b.length ? a : b)
    let m = h.length
    outer: for (let l = m; l > 0; l--) {
      for (let t = 0; t <= m - l; t++) {
        let b = h.substring(t, t+l)
        if (s.every(e => ~e.indexOf(b))) {
          console.log(b)
          break outer
        }
      }
    }
  }