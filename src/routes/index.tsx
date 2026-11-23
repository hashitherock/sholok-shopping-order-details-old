import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sholok Shopping Admin — Order Details" },
      { name: "description", content: "Sholok admin order details: shipments, payments, delivery and customer notifications." },
      { property: "og:title", content: "Sholok Shopping Admin — Order Details" },
      { property: "og:description", content: "Manage a Sholok order's shipments, payments and notifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/order-details.html"
      title="Sholok order details"
      className="block h-screen w-full border-0"
    />
  );
}
