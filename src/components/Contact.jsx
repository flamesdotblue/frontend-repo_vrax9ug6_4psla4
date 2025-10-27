import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-stone-950 py-20 text-stone-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-rose-500 p-2 text-white">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl">Stay in the Quiet</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <p className="md:col-span-2 text-stone-300">
            New poems arrive like postcards—brief, honest, unrushed. Leave an
            address and I will send you one when the night feels kind.
          </p>

          <form onSubmit={onSubmit} className="md:col-span-1">
            {submitted ? (
              <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-emerald-300">
                Thank you. The next letter will find you soon.
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-md border border-white/10 bg-white/10 px-4 py-2 text-white placeholder:text-stone-300 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  required
                />
                <button
                  type="submit"
                  className="whitespace-nowrap rounded-md bg-rose-500 px-4 py-2 font-medium text-white transition hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  Send
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-stone-400">
          © {new Date().getFullYear()} The Poet. All soft rights reserved.
        </div>
      </div>
    </section>
  );
}
