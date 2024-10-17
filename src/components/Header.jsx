import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div className="header-title" onClick={() => props.handleShow(false)}>
        Baked by MJ.
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search for cakes..."
      />
      <div className="header-cart" onClick={() => props.handleShow(true)}>
        Cart <sup>{props.count}</sup>
      </div>
    </div>
  );
}

export default Header;
