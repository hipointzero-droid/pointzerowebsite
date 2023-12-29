import { BACKEND, CMS, DATABASE, DEVOPS, DIGIAL_MARKETING, FRONTEND, MOBILE } from "./constants";

export const initialState = {
  tech: [
    [MOBILE, ["android", "ios", "flutter", "react_native", 
    // "xamarin"
  ]],
    [FRONTEND, ["react", "next"
    // , "angular"
    , "vue", "jquery"]],
    [BACKEND, ["node", "django", "spring_boot", 
    // "asp_net",
     "laravel"]],
    [CMS, ["wordpress", "hubspot", 
    // "joomla",
     "woocommerce", "drupal"]],
    [DATABASE, ["postgres", "mongodb", "mysql", "redis"
    // , "firebase"
  ]],
    [DEVOPS, ["docker", "kubernetes", "aws",
    //  "azure",
      "google_cloud"]],

      [DIGIAL_MARKETING, ["buffer", "google_adwords", "google_analytics",
    //  "azure",
      "hootsuite"]],
  ],
  selected: 0,
};

