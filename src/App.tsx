import './App.css'
import Header from "./components/header/header.tsx";
import Content from "./components/content/content.tsx";
import Footer from "./components/footer/footer.tsx";

function App() {
  return (
      <div className={'mx-2'}>
          <Header />
          <Content />
          <Footer />
      </div>
  )
}

export default App
