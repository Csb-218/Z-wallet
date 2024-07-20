import React from 'react'
import { logo } from '../Assets'
import FooterFiveColsLogoSubFooter from '../Components/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='relative  h-full'>

            <div className="m-5 grid grid-cols-1 justify-items-center  items-center text-center ">
                <img src={logo} className='w-14 h-14' alt="brand logo" />
                <p className='mt-3 text-3xl '>wallet</p>
            </div>

            <div className='text-center space-y-4'>
                <p className="text-3xl font-semibold">Hey There! 👋🏻</p>
                <p className="text-lg">Welcome to your web3 wallet.</p>
            </div>

            <div className='h-40'></div>

            <div className='flex flex-col p-4 gap-y-3 '>
                <button 
                className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-purple-500 hover:bg-purple-600 focus:bg-purple-700 disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-300 disabled:shadow-none"
                onClick={()=>navigate('/yourwallet')}
                >
                    <span>Create Wallet</span>
                </button>

                <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-purple-50 text-purple-500 hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-200 focus:text-purple-700 disabled:cursor-not-allowed disabled:border-purple-300 disabled:bg-purple-100 disabled:text-purple-400 disabled:shadow-none"
                onClick={()=>navigate('/recover')}
                >
                    <span>Sign In with a seed phrase</span>
                </button>

            </div>


            <FooterFiveColsLogoSubFooter/>
        </div>
    )
}

export default Home