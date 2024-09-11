import Contact from "../components/Contact"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Images from "../components/Images"
import WhatsappSmall from "../components/WhatsappSmall"
import SideBarSmall from "../components/SideBarSmall"
export default function Recommendations () {

    return (
        <div>
             <SideBar />
             <SideBarSmall />
             <Header>המלצות</Header>
           <Images />
          <Contact />
          <WhatsappSmall />
        </div>
    )
}