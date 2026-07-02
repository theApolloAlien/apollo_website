import Link from "next/link";

/* Prototype chooser — three candidate overhauls of the portfolio. */

const protos = [
  {
    href: "/prototypes/fury",
    n: "01",
    name: "Fury",
    vibe: "Dark editorial longread — acid serif over monochrome photography",
    style: { backgroundColor: "#121210", color: "#E3EE4F" },
    nameClass: "font-fury italic",
  },
  {
    href: "/prototypes/herald",
    n: "02",
    name: "HERALD",
    vibe: "Green broadsheet front page — columns, rules, barcode, ticker",
    style: { backgroundColor: "#25703A", color: "#F2EDE4" },
    nameClass: "font-newsprint",
  },
  {
    href: "/prototypes/capsule",
    n: "03",
    name: "CAPSULE",
    vibe: "Dithered sighting archive — grey paper, case files, stickers",
    style: { backgroundColor: "#C9CBC6", color: "#17181A" },
    nameClass: "font-tech",
  },
];

export default function PrototypesIndex() {
  return (
    <main className="min-h-screen font-archivo px-6 py-16" style={{ backgroundColor: "#0A0A0A", color: "#E9E7DB" }}>
      <div className="proto-grain proto-grain--soft" aria-hidden />
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] opacity-60 uppercase">Design lab / 3 candidates</p>
        <h1 className="text-4xl font-semibold mt-3">Pick a universe.</h1>
        <p className="text-sm opacity-70 mt-2 max-w-md leading-relaxed">
          Three full-page overhaul prototypes, each running on the live portfolio content.
          Same pilot, different saucers.
        </p>

        <div className="mt-12 space-y-4">
          {protos.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex items-center gap-6 border border-white/15 p-5 hover:border-white/60 transition-colors"
            >
              <span className="flex items-center justify-center w-24 h-24 shrink-0 text-3xl border border-black/10" style={p.style}>
                <span className={p.nameClass}>{p.name.slice(0, 2)}</span>
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] tracking-[0.3em] opacity-50">PROTOTYPE {p.n}</span>
                <span className={`block text-3xl mt-1 ${p.nameClass}`}>{p.name}</span>
                <span className="block text-sm opacity-70 mt-1">{p.vibe}</span>
              </span>
              <span className="ml-auto font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity shrink-0">
                OPEN ↗
              </span>
            </Link>
          ))}
        </div>

        <p className="font-mono text-[11px] opacity-50 mt-12 leading-relaxed">
          NOTE: photo slots read from <code>/public/photos/booth.jpg</code> and{" "}
          <code>/public/photos/reach.jpg</code> — drop the two portraits there and every
          prototype picks them up automatically. Current site remains untouched at{" "}
          <Link href="/" className="underline underline-offset-2 hover:opacity-80">/</Link>.
        </p>
      </div>
    </main>
  );
}
