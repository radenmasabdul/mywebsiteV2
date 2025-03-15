import { useState } from "react";
import Menu from "../components/Menu";
import Home from "../components/Home";
import Work from "../components/Work";
import Story from "../components/Story";
import Chat from "../components/Chat";

export default function Layout() {
  const [homeTrigger, setHomeTrigger] = useState(0);

  return (
    <main className="relative min-h-screen">
      {/* menu */}
      <div className="fixed top-4 w-full flex justify-center z-50">
        <Menu onHomeClick={() => setHomeTrigger((prev) => prev + 1)} />
      </div>

      {/* sections */}
      <section id="home">
        <Home triggerAnimation={homeTrigger} />
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
