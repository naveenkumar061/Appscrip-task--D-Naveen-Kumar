import { MdKeyboardArrowDown } from "react-icons/md";
import "./Filters.css";

function Filters() {
  return (
    <div className="filters-main">
      <div className="filters-sub">
        <div className="filter-checkbox">
          <input type="checkbox" />
          <p>Cusomizble</p>
        </div>
        <div></div>
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Ideal For</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Occasion</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Work</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Fabric</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Segment</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Suitable For</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Raw Materials</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
      <div className="filters-sub">
        <div className="fss">
          <h3>Pattern</h3>
          <p>All</p>
        </div>
        <MdKeyboardArrowDown />
      </div>
    </div>
  );
}

export default Filters;
