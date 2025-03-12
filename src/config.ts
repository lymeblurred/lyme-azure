export const SITE = {
  website: "https://lyme.saroprock.com/", // replace this with your deployed domain
  author: "Lyme Blurred",
  profile: "https://github.com/lymeblurred/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Lyme Azure",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/lymeblurred/lyme-azure/tree/main/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: false,
} as const;
