import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from '../store/UserSlice';
import TabsLgBasicFullWidth from '../Components/WalletTabs';
import { useMutation } from '@tanstack/react-query';
import { GetWallet } from '../Services/service';
import { logo } from '../Assets';

const WalletView = () => {
    
    const navigate = useNavigate()
    const wallet = useSelector(state => state.user.wallet)
    const seedPhrase = useSelector(state => state.user.seedPhrase)
    const selectedChain = useSelector(state => state.chain.selectedChain)

    const dispatch = useDispatch();

    const { data, isPending , mutate } = useMutation({
        mutationKey: 'wallet',
        mutationFn: () => GetWallet(wallet, selectedChain?.value),
        retry: 3,
       
    })

    function Logout() {
        dispatch(userActions.logout())
        navigate('/',{replace: true})
    }



    useEffect(() => {
        selectedChain && seedPhrase && mutate()
    }, [selectedChain, mutate, seedPhrase])

   

    return (
        <div className='relative '>
            <div className='flex flex-col'>
              <img src={logo} className='h-16' alt=""/>
            <p className='text-xl'>Wallet</p>
            {
                `${wallet?.slice(0, 4)}...${wallet?.slice(38, 42)}`
            }  
            </div>
            
            <button
                className="absolute right-0 top-0 inline-flex items-center justify-center h-8 gap-2 px-4 text-xs font-medium tracking-wide transition duration-300 rounded-full focus-visible:outline-none justify-self-center whitespace-nowrap bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600 focus:bg-indigo-200 focus:text-indigo-700 disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-100 disabled:text-indigo-400 disabled:shadow-none"
                onClick={Logout}
            >
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="log-out"><g fill="none" stroke="#000" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="1.5"><path d="M19.25 15.631l2.41-3.105a1.023 1.023 0 00-.008-1.265l-2.335-2.926M21.481 11.89l-12.363.016M15.215 19.694A8.953 8.953 0 1115.15 3.87"></path></g></svg>
                </span>
            </button>

            <TabsLgBasicFullWidth seedPhrase={seedPhrase} tokens={data?.data?.tokens} nfts={data?.data?.nfts} balance={data?.data?.balance} isLoading={isPending} selectedChain={selectedChain} getWallet={mutate} />
        </div>
    )
}

export default WalletView