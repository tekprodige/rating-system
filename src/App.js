import logo from './logo.svg';
import './App.css';
import StarRating from './star-rating.omponent';
import { useState } from 'react';

function App() {

const [productRating, setProductRating] = useState(0)

  return (
    <div className="">
        <h1>Current Product Rating: {productRating}</h1>
        <StarRating maxRating={10} onChange={setProductRating}/>
    </div>
  );
}

export default App;
