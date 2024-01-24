import Animals from "../assets/animals.png";
import Bikes from "../assets/bikes.png";
import Books from "../assets/books.png";
import Business from "../assets/business.png";
import Electronics from "../assets/electronics.png";
import Fashion from "../assets/fashion.png";
import Furniture from "../assets/furniture.png";
import Jobs from "../assets/jobs.png";
import Kids from "../assets/kids.png";
import Mobiles from "../assets/mobiles.png";
import Property from "../assets/property.png";
import Rent from "../assets/rent.png";
import Services from "../assets/services.png";
import Vehicles from "../assets/vehicles.png";

const categories = [
  {
    image: Mobiles,
    name: "Mobiles",
  },
  {
    image: Vehicles,
    name: "Vehicles",
  },
  {
    image: Property,
    name: "Property For Sale",
  },
  {
    image: Rent,
    name: "Property For Rent",
  },
  {
    image: Electronics,
    name: "Electronics & Home Appliances",
  },
  {
    image: Bikes,
    name: "Bikes",
  },
  {
    image: Business,
    name: "Business, Industrial & Agriculture",
  },
  {
    image: Services,
    name: "Services",
  },
  {
    image: Jobs,
    name: "Jobs",
  },
  {
    image: Animals,
    name: "Animals",
  },
  {
    image: Furniture,
    name: "Furniture & Home Decor",
  },
  {
    image: Fashion,
    name: "Fashion & Beauty",
  },
  {
    image: Books,
    name: "Books, Sports & Hobbies",
  },
  {
    image: Kids,
    name: "Kids",
  },
];

const ShowCategory = () => {
  //   console.log(categories);
  return (
    <div className="container p-5">
      <div className="d-flex flex-wrap gap-3 align-items-start justify-content-start">
        {categories.map((category, index) => (
          <div className="col text-center" key={index}>
            <img src={category.image} alt={category.name} />
            <p className="fw-bold mt-3">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCategory;
