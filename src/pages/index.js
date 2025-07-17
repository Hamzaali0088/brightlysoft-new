import Navbar from "../../components/common/Navbar";
import Hero from "../../components/container/Home/Hero"
import Brands from "../../components/container/Home/Brands"
import Video from "../../components/container/Home/Video"
import About from "../../components/container/Home/About"
import Category from '../../components/container/Home/Category'
import Contact from '../../components/container/Home/Contact'
import Footer from '../../components/common/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video id="video" />
      <Brands />
      <About />
      <Category />
      <Contact />
      <Footer />
    </div>
  );
}
