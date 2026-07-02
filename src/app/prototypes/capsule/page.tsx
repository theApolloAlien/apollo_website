import type { Metadata } from "next";
import { CapsulePrototype } from "@/components/prototypes/CapsulePrototype";

export const metadata: Metadata = {
  title: "Prototype 03 — Capsule",
};

export default function CapsulePage() {
  return <CapsulePrototype />;
}
