import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Menu />

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

    <div>
      <a href="https://vitejs.dev" target="_blank">
        {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      </a>
      <a href="https://react.dev" target="_blank">
        {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
      </a>
    </div>

    <h1>Vite + React</h1>
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </>
}

export default App
