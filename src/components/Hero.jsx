import { Feather, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-36">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-white/10 backdrop-blur">
            <Feather className="h-4 w-4 text-rose-300" />
            <span className="text-stone-200">Whispers of ink, echoes of soul</span>
          </div>

          <h1 className="font-serif text-4xl leading-tight sm:text-6xl md:text-7xl">
            Verses in the Dark
          </h1>
          <p className="max-w-2xl text-base/relaxed text-stone-300 sm:text-lg/relaxed">
            A quiet corner on the web for intimate poetry, fleeting thoughts,
            and gentle constellations of language. Sip something warm and stay a while.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a
              href="#poems"
              className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-5 py-2.5 font-medium text-white shadow-sm transition hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              Read Poems
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 font-medium text-stone-100 ring-1 ring-white/15 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              About the Poet
            </a>
          </div>

          <figure className="mt-10 max-w-3xl">
            <blockquote className="text-xl/relaxed text-stone-200 sm:text-2xl/relaxed">
              <Quote className="mr-3 inline h-6 w-6 -translate-y-1 text-rose-300" />
              I keep a lantern in my chest; when night arrives, I let it speak.
            </blockquote>
            <figcaption className="mt-3 text-sm text-stone-400">
              — a fragment from the collection "Night Window"
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
