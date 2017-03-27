import express from 'express'

let app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/quarantines', (req, res) => {
    res.json({
        quarantines: [{
            id: 1,
            name: 'RFS',
            time: '11/31/2016',
            exception: 'Infinite Loop',
            cost: '2M'
            },{
            id: 2,
            name: 'COMPS',
            time: '2/30/2017',
            exception: 'Stack Overflow',
            cost: '3M'
        }]
    })
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App's listening on http://localhost:${PORT}/`)
})

