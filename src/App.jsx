import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LoginPage from './views/LoginPage'
import ProfilePage from './views/ProfilePage'
import TranslationPage from './views/TranslationPage'

// routing for endpoint of our app
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <LoginPage/>}></Route>
          <Route path="/translations" element={<TranslationPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
