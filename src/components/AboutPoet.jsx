import { User } from "lucide-react";

export default function AboutPoet() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-stone-800">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-stone-900 p-2 text-white">
            <User className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl">About the Poet</h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          <div className="order-2 md:order-1 md:col-span-2">
            <p className="text-lg leading-relaxed text-stone-700">
              I write to map the weather inside a body. My work leans toward
              quiet rooms, long walks, night windows, and the small rituals that
              keep us human. I believe poems are invitations rather than
              answers—doors left slightly open so light can find its way out.
            </p>
            <p className="mt-4 leading-relaxed text-stone-700">
              Published in tiny magazines, train tickets, and the margins of
              library books. When not writing, I collect secondhand mugs and
              name stray cats after constellations.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/60 to-amber-200/60 mix-blend-multiply" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-serif text-xl text-stone-600">portrait</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
