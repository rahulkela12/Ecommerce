import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/Product-card'


const addToCartHandler = ()=>{};
const img = "https://img.tatacliq.com/images/i7/658Wx734H/MP000000008740105_658Wx734H_202102091316351.jpeg";

const Home = () => {
  return (
    <div className='home'>
     <section></section>
     <h1>New Arrivals
     <Link to="/search" className='findmore'>More</Link>
     </h1>
     <main>
      <ProductCard productId='dasdsa' name='Macbook' price={154556} stock={548} handler={addToCartHandler} photo={img} />
     </main>
    </div>
  )
}

export default Home