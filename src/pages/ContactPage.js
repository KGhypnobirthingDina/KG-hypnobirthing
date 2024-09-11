
import SideBar from "../components/SideBar"
import SideBarSmall from "../components/SideBarSmall"
import Contact from "../components/Contact"
import ContactDetails from "../components/ContactDetails"
import Header from "../components/Header"
export default function ContactPage() {

    return (
        <div>
            <Header>צרי קשר</Header>
            <SideBar />
            <SideBarSmall />
            <ContactDetails />
            <Contact style={"style"} />
        </div>
    )
}