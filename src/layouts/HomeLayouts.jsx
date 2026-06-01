import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayouts/LeftAside";
import RighAside from "../components/homelayouts/RighAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        <section className="main col-span-6">
          <Outlet />
        </section>

        <aside className="col-span-3">
          <RighAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;