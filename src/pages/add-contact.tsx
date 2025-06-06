import SideBar from "@/components/vertical_bar/bar_function"
import { SideBarEnum } from "@/models/SideBarOptions";

export default function AddContact() {
  return (
    <>
      <SideBar activeButton= {SideBarEnum.addContactIcon}/>
    </>
  );
}
 