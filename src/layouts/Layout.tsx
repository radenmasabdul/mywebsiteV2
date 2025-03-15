import Menu from "../components/Menu";
import Home from "../components/Home";

export default function Layout() {
  return (
    <main className="relative min-h-screen">
      {/* menu */}
      <div className="fixed top-4 w-full flex justify-center z-50">
        <Menu />
      </div>

      {/* home */}
      <Home />
    </main>
  );
}
