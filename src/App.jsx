import Announcements from "./components/Announcements/Announcements";
import CarouselComp from "./components/Carousal/CarousalComp";
import Courses from "./components/Courses/Courses";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import NavbarComp from "./components/Navbar/NavbarComp";
import Placements from "./components/Placements/Placements";

function App() {
  return (
    <>
      <NavbarComp />
      <CarouselComp />
      <Announcements />
      <Courses />
      <ImageGallery />
      <Placements />
    </>
  );
}

export default App;
