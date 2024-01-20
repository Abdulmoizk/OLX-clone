import "bootstrap/dist/css/bootstrap.min.css";
import OLX from "../assets/olxtransparent.png";
import { IoCarSportOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import SYMBOL from "../assets/OLX-Symbol.png";
import LocationSelect from "./antd/LocationSelect";
import SearchInput from "./antd/SearchInput";
import { FaPlus } from "react-icons/fa6";


function NavLayout() {
  return (
    <div className="container">
      <div className="d-flex gap-4 align-items-center">
        <img width={50} src={OLX} alt="" />
        <div className="d-flex gap-4">
          <IoCarSportOutline size={30} />
          <p>Motors</p>
        </div>
        <div className="d-flex gap-4">
          <BsBuildings size={30} />
          <p>Property</p>
        </div>
      </div>
      <div>
        <div>
          <img width={75} src={SYMBOL} alt="" />
        </div>
        <div>
          <LocationSelect />
          <SearchInput />
        </div>
        <div>
          <button>Login</button>
          <button>{<FaPlus  />}Sell</button>
        </div>
      </div>
    </div>
  );
}
export default NavLayout;
