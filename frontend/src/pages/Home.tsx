import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Skeleton } from '../components/Loader';
import ProductCard from '../components/Product-card';
import { useLatestProductsQuery } from '../redux/api/productAPI';




const Home = () => {


  const addToCartHandler = ()=>{};
const {data,isLoading,isError} = useLatestProductsQuery("");  

if(isError) toast.error("Cannot Fetch the Products");

  return (
    <div className='home'>
     <section></section>
     <h1>New Arrivals
     <Link to="/search" className='findmore'>More</Link>
     </h1>
     <main>
      {isLoading?<Skeleton width="80vw"/>:(data?.products.map((i)=>(
      <ProductCard
      key={i._id}
       productId={i._id}
       name={i.name} 
       price={i.price} 
       stock={i.stock} 
       handler={addToCartHandler} 
       photo={i.photo} />
    )))
      }
     </main>
    </div>
  )
}

export default Home