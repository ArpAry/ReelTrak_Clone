import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Aboutus from "./components/aboutus/Aboutus";
import Milestones from "./components/milestones/Milestones";
import Studios from "./components/studios/Studios";
import Productions from "./components/productions/Productions";
import Download from "./components/download_app/Download";
import Footer from "./components/footer/Footer";
export default function App() {
  return (
    <div className="text-3xl">
      <Navbar></Navbar>
      <Header></Header>
      <Aboutus></Aboutus>
      <Milestones></Milestones>
      <Studios></Studios>
      <Productions></Productions>
      <Download></Download>
      <Footer></Footer>
    </div>
  );
}
