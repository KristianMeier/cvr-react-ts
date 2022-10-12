import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Catch from './Pages/Unfinshed'
import Help from './Pages/Help'
import Landing from './Pages/Landing'
import Layout from './Pages/Layout/Layout'
import CvrHelp from './Pages/Components/CvrHelp/CvrHelp'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path='help' element={<Help />} />
        <Route path='cvrhelp' element={<CvrHelp />} />
        <Route path=':routeParams' element={<Catch />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
