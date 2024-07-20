import {  useEffect } from 'react';
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
import {useSelector,useDispatch} from 'react-redux'
import { userActions } from './store/UserSlice';

const cookies = new Cookies(null, { path: '/' });

function App() {

  const navigate = useNavigate()
  const wallet = useSelector(state => state.user.wallet)
  const seedPhrase  = useSelector(state => state.user.seedPhrase)
  
  const dispatch = useDispatch();

  useEffect(() => {

    const  Wallet = cookies.get('wallet');
    const  SeedPhrase = cookies.get('seedPhrase')

    const login_info={
      wallet : Wallet,
      seedPhrase : SeedPhrase
    }

    if (Wallet && SeedPhrase) {
      dispatch(userActions.login(login_info))
      navigate('/yourwallet');
    }
    


  }, [navigate,dispatch])




  return (
    <div className="App">

      <header className='flex justify-end  bg-white'>
        {/* <img src={logo} className='w-14 h-14' alt='brand logo' /> */}
        {wallet && seedPhrase && <Select />}
      </header>

      {
        wallet && seedPhrase ?
          <Routes>
            <Route path='/yourwallet' element={<WalletView/>} />
          </Routes>

          :
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recover' element={<Recover/>} />
            <Route path='/yourwallet' element={<CreateWallet/>} />
          </Routes>
      }

    </div>
  );
}

export default App;
