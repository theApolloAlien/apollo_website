import type { Metadata } from "next";
import { Instrument_Serif, DM_Serif_Display, Archivo, Michroma } from "next/font/google";
import "./prototypes.css";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Prototypes — Joshua Apollo",
  robots: { index: false, follow: false },
};

export default function PrototypesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${instrument.variable} ${dmSerif.variable} ${archivo.variable} ${michroma.variable}`}>
      {children}
    </div>
  );
}
