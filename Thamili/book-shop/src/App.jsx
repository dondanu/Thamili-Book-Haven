import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login'; 
import Guest from './Guest';  
import Dashboard from './Dashbord';
import Form from './Form';
import Form2 from './Form2';
import EmployeeUseRef from './EmployeeUseRef';
import Employee from './Employee';
import Categories from './Categories';
import NewArrivals from './NewArrivals'; 
import Bestsellers from './Bestsellers';
import Cart, { CartProvider } from './Cart';
import Wishlist, { WishlistProvider } from './Wishlist';
import { BooksProvider } from './BooksStore';
import Admin from './Admin';
import { AuthProvider } from './Auth';
import BookDetails from './BookDetails';
import Checkout from './Checkout';
import UserProfile from './UserProfile';
import SearchResults from './SearchResults';
import SearchTest from './SearchTest'; 
import Orders from './Orders';
import NotFound from './NotFound';


function App() {
  return (
    <AuthProvider>
      <BooksProvider>
        <WishlistProvider>
          <CartProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guest" element={<Guest />}/>
          <Route path="/dashbord" element={<Dashboard />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/form" element={<Form />} /> 
          <Route path="/employee" element={<Employee/>} /> 
          <Route path="/form2" element={<Form2 />} />  
          <Route path="/employeeUseRef" element={<EmployeeUseRef />} /> 
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/bestsellers" element={<Bestsellers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<UserProfile />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/search-test" element={<SearchTest />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
          </CartProvider>
        </WishlistProvider>
      </BooksProvider>
    </AuthProvider>
  );
}

export default App;
