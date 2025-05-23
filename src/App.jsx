import AppRouter from "./application/Router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <Header />
      <HomePage />
      <AppRouter />
    </>
  )
}

export default App
