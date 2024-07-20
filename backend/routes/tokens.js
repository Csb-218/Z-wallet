var express = require('express');
var router = express.Router();
const Moralis = require('moralis').default;
const cors = require('cors')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Tokens' });
});


router.get('/getTokens', async function (req, res, next) {

    const { userAddress, chain } = req.query;

    console.log(userAddress.length, chain)
 
    if (userAddress && chain) {

        try{
            const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
                chain: chain,
                address: userAddress
            })
    
            const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
                chain: chain,
                address: userAddress,
                mediaItems: true,
            })
    
            const myNFTs = nfts?.raw?.result?.filter((e, i) => (e?.media?.media_collection?.high?.url && !e.possible_spam && e?.media?.category !== 'video')).map((nft,index)=>nft?.media?.media_collection?.high?.url)
    
            const balance = await Moralis.EvmApi.balance.getNativeBalance({
                chain: chain,
                address: userAddress
            })

            console.log(tokens.raw,nfts.raw,balance.raw.balance,999)
    
            const jsonResponse = {
                tokens: tokens.raw,
                nfts: myNFTs,
                balance: balance.raw.balance
            }
    
            return res.status(200).json(jsonResponse)

        }catch(err){
            return res.status(404).send("Incorrect address or chain id")
        }

    }
    
    else{
        return res.status(400).send('query parameters missing')
    }
    // return res.status(400).send('query parameters missing')

});

module.exports = router;



