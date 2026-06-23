import { AI, BACKEND, CMS, DATABASE, DEVOPS, DIGIAL_MARKETING, FRONTEND, MOBILE } from "./constants";

export const initialState = {
  tech: [
    [AI, [
      "openai",
      "anthropic",
      "gemini",
      "llama",
      "mistral",
      "tensorflow",
      "pytorch",
      "langchain",
      "vertex_ai",
      "pinecone",
      "pgvector",
      "huggingface",
    ]],
    [MOBILE, ["android", "ios", "flutter", "react_native"]],
    [FRONTEND, ["react", "next", "vue", "jquery"]],
    [BACKEND, ["node", "django", "spring_boot", "laravel"]],
    [DATABASE, ["postgres", "mongodb", "mysql", "redis"]],
    [CMS, ["wordpress", "hubspot", "woocommerce", "drupal"]],
    [DEVOPS, ["docker", "kubernetes", "aws", "google_cloud"]],
    [DIGIAL_MARKETING, ["buffer", "google_adwords", "google_analytics", "hootsuite"]],
  ],
  selected: 0,
};

