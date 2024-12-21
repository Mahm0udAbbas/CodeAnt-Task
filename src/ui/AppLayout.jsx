import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavigationToggle from "./NavigationToggle";

export default function AppLayout() {
  return (
    <div className="grid md:grid-cols-[16rem_1fr]">
      <div className="border-r">
        <NavigationToggle>
          <SideBar />
        </NavigationToggle>
      </div>

      <section className="mt-[90px] md:mt-0 md:p-3">
        <Outlet />
      </section>
    </div>
  );
}
