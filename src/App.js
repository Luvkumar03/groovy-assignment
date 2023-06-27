
import { useSelector } from 'react-redux';
import './App.css';
import Register from './User/Register';
import Login from './User/Login';
// import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
// import Home from './Components/Modules/Home';

function App() {
  const products=useSelector(state=>state.products)

  const users = useSelector(state=>state.users)



  return (
    //  <div>
    //   <Header/>
    //   <Home/>
    //   <Footer/>
    //  </div>

    <div>
      {
        products.map(product=>
          <div key={product.name}>{product.name}:{product.price}</div>
          )
      }

      {
        users.map(user=> <div key={user.id}>{user.name}-{user.username}</div>)
      }

      <Register/>
      <Login/>
    </div>
  );
}

export default App;
