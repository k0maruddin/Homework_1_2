let a = "hello world!"
let b = {}

// Split array ke karakter
let d = a.split("")

// hitung perkarakter
for (let i = 0; i < d.length; i++) {
  let e = d[i];
  b[e] = (b[e] || 0) + 1
}

// Output jumlah karakter
for (let e in b) {
  console.log(e + ": " + b[e])
}

//uji coba update data