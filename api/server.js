const express = require('express')
const cors = require('cors')
const {fetchIframe} = require('./puppeteer')
const app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,       
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
app.use(express.json())


app.post('/api/iframe', async (req, res) => {
    try{
        const result = await fetchIframe(req.body.link)
        res.json(result.split('/')[5])
    } catch (err) {
        res.status(404).json(err)
        console.error(err)
    }
    
})

const listener = app.listen(8000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })