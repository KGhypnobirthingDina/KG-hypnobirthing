import SideBar from "../components/SideBar";
import Header from "../components/Header";
import ArticlesComp from "../components/ArticlesComp";
import WhatsappSmall from "../components/WhatsappSmall";
import SideBarSmall from "../components/SideBarSmall";
import Contact from "../components/Contact";
export default function Articles() {
  return (
    <div>
      <SideBar />
      <SideBarSmall />
      <Header>מאמרים</Header>
      <ArticlesComp />
      <Contact />
      <WhatsappSmall />
    </div>
  );
}
