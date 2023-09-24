import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contacts/Contacts'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    )
  );

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
