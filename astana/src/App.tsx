// import { Suspense, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Checkin from './components/Checkin/Checkin'
import Menu from './components/Menu/Menu'
import Page from './components/Page/Page'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Frame from 'react-frame-component';
function App() {
  // Load react component in iframe

  return <>
    <Menu />
    {/* <Frame
      style={{ marginTop: "200px" }}
      title="my-iframe"
      width="800px"
      height="500px"
    // srcDoc={ReactDOMServer.renderToString(<Checkin />)}
    >
      <Checkin />
    </Frame> */}

    {/* <BrowserRouter>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route>
            <Route path="/" element={'Comp_01'} />
            <Route path="/signage" element={'Comp_02'} />
            <Route path="/:agent" element={'Comp_03'} />
            <Route path="/:agent/reservation" element={'Comp_04'} />
            <Route path="/:agent/step-one" element={'Comp_05'} />
            <Route path="*" element={'<NotFound />'} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter> */}

    <Page />

  </>
}

export default App
