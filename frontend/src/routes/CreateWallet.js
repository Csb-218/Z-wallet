import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertIconsTitleTextWarning from '../Components/Alert';
import SeedPhraseCard from '../Components/SeedPhraseCard';
import {ethers} from 'ethers';
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from '../store/UserSlice';

const CreateWallet = () => {

    const [newSeedPhrase, setNewSeedPhrase] = useState();
    const navigate = useNavigate();
  
    const dispatch = useDispatch();

    const warning = `Once you generate the seed phrase, save it securely in order to recover your wallet in future.`

    function generateWallet(){
        const mneumonic = ethers.Wallet.createRandom().mnemonic.phrase;
        setNewSeedPhrase(mneumonic);
    }

    function setWalletAndMneumonic(){

        const login_info={
            wallet : ethers.Wallet.fromPhrase(newSeedPhrase).address,
            seedPhrase : newSeedPhrase,
        }

        dispatch(userActions.login(login_info))
       
    }

    return (
        <div className='relative h-full space-y-10'>

            <AlertIconsTitleTextWarning warning={warning} />

            {
                newSeedPhrase && <SeedPhraseCard phrase={newSeedPhrase}/>
            }


            <div className='flex flex-col gap-y-2 absolute bottom-10 w-full'>
                {/* Component: Base primary basic button */}
                <button 
                className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none"
                onClick={generateWallet}
                >
                    <span>Generate seed phrase</span>
                </button>
                {/* End Base primary basic button */}


                {/* Component: Base outline basic button  */}
                <button 
                disabled={!newSeedPhrase}
                className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 border rounded focus-visible:outline-none whitespace-nowrap border-indigo-500 text-indigo-500 hover:border-indigo-600 hover:text-indigo-600 focus:border-indigo-700 focus:text-indigo-700 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:text-indigo-300 disabled:shadow-none"
                onClick={setWalletAndMneumonic}
                >
                    <span>Open your new wallet</span>
                </button>
                {/* End Base outline basic button  */}
            </div>


            <footer className="w-full border-2 absolute bottom-0">
                {/*       Main footer */}

                <p onClick={() => navigate('/')}>Back Home</p>
            </footer>

        </div>

    )
}

export default CreateWallet