import "bootstrap/dist/css/bootstrap.min.css";
import OLX from "../assets/olxtransparent.png";
import { IoCarSportOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import SYMBOL from "../assets/OLX-Symbol.png";
import LocationSelect from "./antd/LocationSelect";
import SearchInput from "./antd/SearchInput";
import { FaPlus } from "react-icons/fa6";
import AppModal from "./antd/modal";

function NavLayout() {
  return (
    <div className="bg">
      <div className="container px-2 py-4">
        <div className="d-flex gap-4 mb-4 ms-5 align-items-center">
          <img width={30} src={OLX} alt="" />
          <div className="d-flex align-items-center gap-4">
            <IoCarSportOutline size={30} />
            Motors
          </div>
          <div className="d-flex gap-4">
            <BsBuildings size={30} />
            Property
          </div>
        </div>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-2">
              <img width={75} src={SYMBOL} alt="" />
            </div>
            <div className="d-flex align-items-center gap-2 col-7">
              <div className="col-3">
                <LocationSelect />
              </div>
              <div className="col-9">
                <SearchInput />
              </div>
            </div>
            <div className="col-2 d-flex gap-2">
                <AppModal/>
              {/* <button>Login</button> */}
              <button className="d-flex gap-2 align-items-center">
                {<FaPlus />}Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavLayout;
