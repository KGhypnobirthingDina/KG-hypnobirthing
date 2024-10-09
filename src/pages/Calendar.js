import CourseCalendar from "../components/CourseCalendar";
import SideBar from "../components/SideBar";

import SideBarSmall from "../components/SideBarSmall";
export default function Calendar() {
  return (
    <div>
      <SideBar />
      <SideBarSmall />

      <CourseCalendar />
    </div>
  );
}
