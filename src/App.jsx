import Hero from "./components/Hero";
import PoemsGallery from "./components/PoemsGallery";
import AboutPoet from "./components/AboutPoet";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-serif text-xl">Poet</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#poems" className="text-stone-600 hover:text-stone-900">Poems</a>
            <a href="#about" className="text-stone-600 hover:text-stone-900">About</a>
            <a href="#contact" className="text-stone-600 hover:text-stone-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <PoemsGallery />
        <AboutPoet />
        <Contact />
      </main>
    </div>
  );
}
