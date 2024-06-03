import { useState } from 'react'
import ProductCard from '../components/Product-card';

const Search = () => {
  const [search,setSearch] = useState("");
  const [sort,setSort] = useState("");
  const [maxPrice,setMaxPrice] = useState(1000000);
  const [category,setCategory] = useState("");
  const [page,setPage] = useState(1);
  

  const addToCartHandler = ()=>{};
  const img = "https://img.tatacliq.com/images/i7/658Wx734H/MP000000008740105_658Wx734H_202102091316351.jpeg";

  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  return (
    <div className='product-search-page'>
    <aside>
      <h2>Filters</h2>
      <div>
        <h4>Sort</h4>
        <select value={sort}
        onChange={(e)=>setSort(e.target.value)}
        >
          <option value="">None</option>
          <option value="asc">Price(Low to High)</option>
          <option value="dsc">Price(High to Low)</option>
        </select>
      </div>
      <div>
        <h4>Max Price : {maxPrice || ""}</h4>
        <input type="range" min={100} max={1000000} 
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <h4>Category</h4>
        <select value={category}
        onChange={(e)=>setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="">Sample1</option>
          <option value="">Sample2</option>
        </select>
      </div>
    </aside>
    <main>
      <h1>Products</h1>
      <input type="text" 
      placeholder='Search by name...' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-product-list">
        <ProductCard productId='dasdsa' 
      name='Macbook' price={154556} stock={548}
       handler={addToCartHandler} photo={img} />
      </div>
      <article>
        <button
        disabled = {!isPrevPage}
        onClick={() => setPage(prev => prev-1)}>Prev</button>
        <span>{page} of {4}</span>
        <button
        disabled ={!isNextPage} 
        onClick={() => setPage(prev => prev+1)}>Next</button>
      </article>
      </main>  
    </div>
  )
}

export default Search