import { PAST_EVENTS } from "@/lib/constants";

const BASE_URL = "https://www.bereguedeeafins.com.br";

export default function sitemap() {
  const routes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...PAST_EVENTS.map((event) => ({
      url: `${BASE_URL}/eventos/${event.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return routes;
}
