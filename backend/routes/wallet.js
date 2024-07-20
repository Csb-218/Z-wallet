var express = require('express');
var router = express.Router();
const Moralis = require('moralis').default;
const cors = require('cors')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wallet' });
});

router.get('/history', async function(req, res, next) {

    const{chain,userAddress} = req.query
    console.log(chain,userAddress)
    
    if(chain && userAddress){

      let jsonResponse;
      try {
        const response = await Moralis.EvmApi.wallets.getWalletHistory({
          "chain": chain,
          "order": "DESC",
          "address": userAddress
        });


        jsonResponse={
          result : response.raw
        }
        
        console.log(response.raw);
        return res.status(200).json(jsonResponse)

        
      } catch (e) {
        
        console.error(e?.message);
        return res.status(404).send(e?.message)

      }
    }
    else{
      return res.status(400).send('query parameters missing')
    }
});



module.exports = router;