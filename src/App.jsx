import { BrowserRouter, Route, Routes }from "react-router-dom";
import Home from "./screen/Home";
import Page from "./screen/Page";
import Login from "./components/Login";
import Watch from "./screen/Watch";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Page />}/>
        <Route path="/signup" element={<Login />} />
        <Route path="/movie/:id" element={<Watch />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
