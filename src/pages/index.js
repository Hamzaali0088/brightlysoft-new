import Navbar from "../../components/common/Navbar";
import Hero from "../../components/container/Home/Hero"
import Brands from "../../components/container/Home/Brands"
import Video from "../../components/container/Home/Video"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Video />
      <Brands />
    </div>
  );
}
