import React from 'react'
import './App.css'
import Header from "./components/header/header.tsx";
import Content from "./components/content/content.tsx";
import Footer from "./components/footer/footer.tsx";
import {navItems} from "./utils/constants.ts";
import {StarWarsContext} from "./utils/context.ts";

function App() {
  const [page, setPage] = React.useState(navItems[0]);
  return (
      <div className={'mx-2'}>
        <StarWarsContext value={{page, changePage: setPage}}>
          <Header />
          <Content />
          <Footer />
        </StarWarsContext>
      </div>
  )
}

export default App
