const parse = require('csv-parse')
const fs = require('fs')

const results = [];

const { resourceLimits } = require('worker_threads')

fs.createReadStream('./cumulative_2022.12.25_09.02.55.csv')
// .pipe(parse({
//     comment:'#',
//     columns:true,
// }))
.on('data', (data) => {
    results.push(data)
})
.on('error', (err) => {
    console.log(err)
})
.on('end', () =>{
    console.log(results)
})