// App
import React from 'react'
import Home from '@/pages/Home'
import LogoWebpack from '@assets/images/svg/webpack.svg'
import LogoReact from '@assets/images/svg/react.svg'
import LogoSASS from '@assets/images/svg/sass.svg'

class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <h1 className="d-f ai-c">
          <LogoWebpack /> Webpack Boilerplate (<LogoReact />
          React + <LogoSASS /> SASS)
        </h1>
      </>
    )
  }
}

export default App
