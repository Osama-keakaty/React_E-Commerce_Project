import { Routes, Route } from "react-router-dom";
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
const App = () => {
  // window.addEventListener('error', function(e){
  //   // prevent React's listener from firing
  //   e.stopImmediatePropagation();
  //   // prevent the browser's console error message 
  //   e.preventDefault();
  // });
const Shop =()=>{
return (

  <h1>shop man</h1>
);  
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
    );
}

export default App;
