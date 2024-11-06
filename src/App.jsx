import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {
  
  return (
    <>
      <div className=' max-w-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto'>
      <Header></Header>
      <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
