import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from '../store/UserSlice';
import AlertIconsTitleTextWarning from '../Components/Alert'
import TextArea from '../Components/TextArea'





const Recover = ({ setWallet, setSeedPhrase }) => {
   
  const [typedSeed,setTypedSeed] = useState("");
  const [invalid,setInvalid] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const warning = "Type your seed phrase in the field below to recover your wallet(it should include 12 words separated with spaces)"

  
  function seedAdjust(e){
    setTypedSeed(e.target.value)
  }

  function recoverWallet(){

    let recoveredWallet;
    try{
      recoveredWallet = ethers.Wallet.fromPhrase(typedSeed)
    }catch(err){
      setInvalid(true);
      return
    }
    
    const login_info={
      wallet : recoveredWallet.address,
      seedPhrase : typedSeed
    }

    dispatch(userActions.login(login_info))
    navigate('/yourwallet');
    return

  }

  return (
    <div className='space-y-6'>
      Recover
      <AlertIconsTitleTextWarning warning={warning} />

      <TextArea
        typedSeed={typedSeed}
        seedAdjust={seedAdjust}
      />
      
      {invalid && <p className="text-red-500">Invalid seed phrase</p>}

     <div className='space-y-2'>
       <button 
       className="inline-flex w-full items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide text-white transition duration-300 rounded-sm shadow-md focus-visible:outline-none justify-self-center whitespace-nowrap bg-indigo-500 shadow-indigo-200 hover:bg-indigo-600 hover:shadow-sm hover:shadow-indigo-200 focus:bg-indigo-700 focus:shadow-sm focus:shadow-indigo-200 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none"
       disabled={ typedSeed?.split(" ").length !== 12 || typedSeed.slice(-1) === " " }
       onClick={recoverWallet}
       >
        <span>Recover Wallet</span>
      </button>

      <button 
      className="inline-flex w-full items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide transition duration-300 rounded-sm shadow-md focus-visible:outline-none justify-self-center whitespace-nowrap bg-indigo-50 text-indigo-500 shadow-indigo-100 hover:bg-indigo-100 hover:text-indigo-600 hover:shadow-md hover:shadow-indigo-100 focus:bg-indigo-200 focus:text-indigo-700 focus:shadow-md focus:shadow-indigo-100 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none"
      onClick={()=> navigate('/')}
      >
        <span>Back Home</span>
      </button>
     </div>
     


    </div>
  )
}

export default Recover