import './App.css'
import Header from "./components/header/header.tsx";
import Content from "./components/content/content.tsx";
import Footer from "./components/footer/footer.tsx";
import {StarWarsContext} from "./utils/context.ts";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";

function App() {
    const [hero, setHero] = useState(defaultHero);
  return (
      <div className={'mx-2'}>
          <StarWarsContext value={{hero, changeHero: setHero}} >
              <Header />
              <Content />
              <Footer />
          </StarWarsContext>
      </div>
  )
}

export default App
