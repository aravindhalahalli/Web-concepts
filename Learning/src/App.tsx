import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
// import UserComp from './features/User/User'
import AddUser from './features/User/Adduser'
// import InstallationUi from './features/ReleaseUI/InstallationUi';
import FreshInstallation from './features/ReleaseUI/freshInstall';
import FinalInstallationUi from './features/User/finalTest';
// import TableComp from './features/User/test';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FinalInstallationUi />} />
          <Route path="zenbridge-custom-pipeline">
            <Route path="new-fresh-installation" element={<FreshInstallation />} />
            <Route index element={<FinalInstallationUi />} />
          </Route>
          <Route path='/adduser' element={<AddUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
