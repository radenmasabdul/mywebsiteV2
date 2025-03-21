import Menu from "../components/Menu";
import Home from "../components/Home";
import Work from "../components/Work";
import Story from "../components/Story";
import Chat from "../components/Chat";

export default function Layout() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed top-4 w-full flex justify-center z-50">
        <Menu />
      </div>

      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="chat">
        <Chat />
      </section>
    </main>
  );
}
