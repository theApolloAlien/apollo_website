import type { Metadata } from "next";
import { HeraldPrototype } from "@/components/prototypes/HeraldPrototype";

export const metadata: Metadata = {
  title: "Prototype 02 — Apollo Herald",
};

export default function HeraldPage() {
  return <HeraldPrototype />;
}
