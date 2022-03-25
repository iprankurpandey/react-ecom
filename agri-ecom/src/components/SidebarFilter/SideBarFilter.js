import { ItemCard } from "../Produclisting/ItemCard";
import "./SideBarFilter.css";

function SideBarFilter() {
  return (
    <div>
      <div className="catagory-items-page">
        <nav className="side-item-container">
          <div className="search-items">
            <input type="search" placeholder="search item" />
            <span className="material-icons sidebar-icon">search </span>{" "}
          </div>
          <hr />
          <h3 className="Price-sort-by">Price sort by : </h3>
          <input type="radio" name="" id="" />
          Low to High <br />
          <input type="radio" name="" id="" />
          High to Low <br />
          <hr />
          <div className="price-range">
            {" "}
            Price Range
            <input type="range" min={25} max={100} value={75} />{" "}
          </div>
          <hr />
          <h3 className="catagories-sort-by">Catagories sort by : </h3>
          <input type="checkbox" name="" id="" />
          Machine <br />
          <input type="checkbox" name="" id="" />
          Electronic <br />
          <input type="checkbox" name="" id="" />
          Seeds & Fertilizers <br />
          <input type="checkbox" name="" id="" />
          Pesticides <br />
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <input type="checkbox" name="" id="" />
          Exclude Out of Stock <br />
          <input type="checkbox" name="" id="" />
          Fast Delivery Only <br />
          <hr />
          <h3 className="rating-sort-by">Brands : </h3>
          <input type="checkbox" name="" id="" />
          Patanjali <br />
          <input type="checkbox" name="" id="" />
          Dabur
          <br />
          <input type="checkbox" name="" id="" />
          Vaidyanath <br />
        </nav>
        <ItemCard />
      </div>
    </div>
  );
}

export { SideBarFilter };
