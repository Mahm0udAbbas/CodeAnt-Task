import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";
import NavBar from "./NavBar";

export default function SideBar() {
  return (
    <aside className="fixed flex h-screen flex-col py-5 pl-5">
      <section className="mb-5 space-y-5">
        <Logo />
        <DropDownMenu />
      </section>
      <NavBar />
    </aside>
  );
}
