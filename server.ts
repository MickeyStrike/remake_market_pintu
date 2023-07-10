const axios = require('axios')

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT_SERVER || 8001

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/price-changes',async function (req, res) {
  try {
    const payload = await axios.get('https://api.pintu.co.id/v2/trade/price-changes')
    res.status(200).json({ ...payload.data })
  } catch (err) {
    res.status(500).json({ message: 'Failed' })
  }
})

app.get('/supportedCurrencies',async function (req, res) {
  try {
    const payload = await axios.get('https://api.pintu.co.id/v2/wallet/supportedCurrencies')
    res.status(200).json({ ...payload.data })
  } catch (err) {
    res.status(500).json({ message: 'Failed' })
  }
})

app.get('/market-tags',async function (req, res) {
  try {
    const payload = await axios.get('https://content.pintu.co.id/market-tags?language.name=ID&_sort=order:ASC')
    console.log(payload, 'ini market')
    res.status(200).json(payload.data)
  } catch (err) {
    res.status(500).json({ message: 'Failed' })
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`));