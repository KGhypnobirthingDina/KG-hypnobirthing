import React from "react";
import Questions from "../components/Questions";
import Contact from "../components/Contact"
import SideBarSmall from "../components/SideBarSmall"
import WhatsappSmall from "../components/WhatsappSmall"
import Header from "../components/Header";
import SideBar from "../components/SideBar";
export default function QuestionsAndAnswers () {

    return(
        <div>
         
         
         <Header>שאלות שכיחות</Header>
         <SideBarSmall />
          <SideBar />
       
          <Questions />
          <WhatsappSmall />
          <Contact />
        </div>
     

    )
}