"use client";

import dynamic from "next/dynamic";

const NondualizerPlayer = dynamic(
  () => import("@nondualizer/NondualizerPlayer").then((mod) => mod.NondualizerPlayer),
  { ssr: false },
);

export default function NondualizerPage() {
  return <NondualizerPlayer />;
}
