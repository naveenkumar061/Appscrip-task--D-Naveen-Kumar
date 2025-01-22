import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import "./Products.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Sort from "../sort/Sort"; // Assuming Sort component is in a separate file
import Filters from "../filters/Filters";

function Products() {
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  function toggleSort() {
    setShowSort(!showSort);
  }

  function toggleFilter() {
    setShowFilter(!showFilter);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-main">
      <div className="product-main-top">
        <div className="pmtleft">
          <p className="pmlength">{products.length} items</p>
          {showFilter ? (
            <p onClick={() => toggleFilter()} className="pmshowfilter">
              <MdOutlineKeyboardArrowLeft />
              Hide Filter
            </p>
          ) : (
            <p onClick={() => toggleFilter()} className="pmhidefilter">
              <MdOutlineKeyboardArrowRight />
              Show Filter
            </p>
          )}
        </div>
        <div className="pmobile">
          <p className="pmmobilefilter">Filter</p>
          <p onClick={() => toggleSort()} className="pmsort">
            <p>Recommended</p>
            <MdOutlineKeyboardArrowDown />
          </p>
          {showSort && <Sort />}
        </div>
      </div>
      <div className="productlast">
        {showFilter && <Filters />}
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="product-description">
                <p>{product.description}</p>
                <CiHeart className="product-desc-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
