import axios from 'axios'
import { ethers } from 'ethers'

export async function GetWallet(userAddress,chain){

    const options = {
        url:'tokens/getTokens',
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'get',
        params: {
            userAddress : userAddress,
            chain : chain
        }
    }

    const result = await axios.request(options)
    // console.log(result)
    return result
}

export async function Transfer(selectedChain,seedPhrase,senderAddress,Amount) {
   
    const provider = new ethers.JsonRpcProvider(selectedChain?.rpcUrl)
    const privateKey = ethers.Wallet.fromPhrase(seedPhrase).privateKey

    const wallet = new ethers.Wallet(privateKey, provider)

    const tx = {
        to: senderAddress,
        value: ethers.parseEther(Amount.toString())
    }

    const transaction = await wallet.sendTransaction(tx)
    const reciept = await transaction.wait();
   


    const transaction_details = {
        reciept : reciept
    }

    return transaction_details

}

export async function getWalletHistory(userAddress,chain){
    const options = {
        url:'wallet/history',
        baseURL: process.env.REACT_APP_BASE_URL,
        method: 'get',
        params: {
            userAddress : userAddress,
            chain : chain
        }
    }

    const result = await axios.request(options)
    // console.log(result)
    return result
}