import { createFileRoute } from "@tanstack/react-router";
import { Index } from "./page";

export const Route = createFileRoute("/")({
  component: Index,
});
