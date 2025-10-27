import { BookOpen } from "lucide-react";

const samplePoems = [
  {
    id: 1,
    title: "Night Window",
    excerpt:
      "Moonlight unbuttons the sky, and every streetlamp learns to sing. I borrow a note, tuck it under my tongue, and walk home softer than rain.",
    tags: ["nocturne", "quiet"],
  },
  {
    id: 2,
    title: "Tea Leaves",
    excerpt:
      "Steam writes cursive on winter glass. I read the warmth aloud until the room believes in summer again.",
    tags: ["domestic", "winter"],
  },
  {
    id: 3,
    title: "River Grammar",
    excerpt:
      "The current conjugates stones into smooth. I learn to be a sentence that bends without breaking.",
    tags: ["nature", "becoming"],
  },
  {
    id: 4,
    title: "Postcard to Myself",
    excerpt:
      "If you arrive before you, wait by the orange door. The key is inside the echo.",
    tags: ["memory", "self"],
  },
];

export default function PoemsGallery() {
  return (
    <section id="poems" className="bg-stone-50 py-20 text-stone-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-rose-100 p-2 text-rose-700">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Selected Poems</h2>
            <p className="text-stone-600">A handful of small constellations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samplePoems.map((poem) => (
            <article
              key={poem.id}
              className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-serif text-2xl tracking-tight">
                {poem.title}
              </h3>
              <p className="mt-3 text-stone-700">
                {poem.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {poem.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-rose-200" />
                <div className="absolute -bottom-12 -left-10 h-24 w-24 rounded-full bg-amber-200" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
