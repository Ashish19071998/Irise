console.log()
console.log('India Team for icc cricket world cup')
console.log()

var india=["Shubham","Rohit","Virat","Surya","rahul","hardik","jadeja","ashwin","bumhra","siraj","kuldip"]

india.shift()
india.unshift("Ishan")
india.pop()
india.push("Shardul")

console.log(india.join(","))
console.log()

var A=[1,2,3,4,5,6,7,8,9]
var multiby10=A.map((i) => i*10)
console.log(multiby10.join("-"))