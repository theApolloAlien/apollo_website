import type { Metadata } from "next";
import { FuryPrototype } from "@/components/prototypes/FuryPrototype";

export const metadata: Metadata = {
  title: "Prototype 01 — Fury",
};

export default function FuryPage() {
  return <FuryPrototype />;
}
