import ShowCategory from "./components/Categories";
import NavLayout from "./components/NavLayout";
import AppCarousel from "./components/antd/Carousel";
import ActionAreaCard from "./components/mui/card";
import PagesList from "./pages/PagesList";

function App() {
  return (
    <>
      <NavLayout />
      <PagesList />
      <AppCarousel/>
      <ShowCategory/>
      <ActionAreaCard/>
     
    </>
  );
}

export default App;
