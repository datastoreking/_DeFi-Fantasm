import Topnavbar from './components/Topnavbar'
import Dashboard from './components/Dashboard'
import Mint from './components/Mint'
import Redeem from './components/Redeem'
import Farm from './components/Farm'
import Staking from './components/Staking'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return ( 
      <>
          <Topnavbar />
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="mint" element={<Mint />} />
              <Route path="redeem" element={<Redeem />} />
              <Route path="farm" element={<Farm />} />
              <Route path="staking" element={<Staking />} />
            </Routes>
          </Router>
          <Footer />
      </>
    );
}

export default App;