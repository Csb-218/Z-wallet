import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Home from './routes/Home';
import { logo } from './Assets';
import Recover from './routes/Recover';
import CreateWallet from './routes/CreateWallet';
import Select from './Components/Select';
import WalletView from './routes/WalletView';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { userActions } from './store/UserSlice';

const cookies = new Cookies(null, { path: '/' });

function App() {

  const navigate = useNavigate()
  const wallet = useSelector(state => state.user.wallet)
  const seedPhrase = useSelector(state => state.user.seedPhrase)

  const dispatch = useDispatch();

  useEffect(() => {

    const Wallet = cookies.get('wallet');
    const SeedPhrase = cookies.get('seedPhrase')

    const login_info = {
      wallet: Wallet,
      seedPhrase: SeedPhrase
    }

    if (Wallet && SeedPhrase) {
      dispatch(userActions.login(login_info))
      navigate('/yourwallet');
    }



  }, [navigate, dispatch])




  return (
    <div className="App ">

      <div
        className="w-full h-full duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly"
      >
        <div
          className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
        ></div>
        <div
          className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
        ></div>
        <div
          className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
        ></div>
        <div
          className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
        ></div>
        <div className="z-10 flex flex-col justify-evenly w-full h-full">
        <header className='flex justify-end absolute top-0 right-4 '>
        {/* <img src={logo} className='w-14 h-14' alt='brand logo' /> */}
        {wallet && seedPhrase && <Select />}
      </header>
          {
        wallet && seedPhrase ?
          <Routes>
            <Route path='/yourwallet' element={<WalletView />} />
          </Routes>

          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recover' element={<Recover />} />
            <Route path='/yourwallet' element={<CreateWallet />} />
          </Routes>
      }
        </div>
      </div>


      

    </div>
  );
}

export default App;
