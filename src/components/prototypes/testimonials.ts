/** Field reports — shared across the design prototypes. */
export const testimonials = [
  {
    quote:
      "He is a leader who combines the grit of a firefighter with the foresight of a strategist.",
    name: "Lt Mohd Nizam Bin Walat",
    role: "Supervisor, AFFOSB",
    org: "Singapore Civil Defence Force",
  },
  {
    quote:
      "Apollo is a future-ready leader who combines technical vision with the moral courage to ask hard questions and the humility to learn from the answers.",
    name: "Clarence Foo",
    role: "Human Resources Executive",
    org: "SBS Transit Ltd",
  },
  {
    quote:
      "What stands out most is his quiet consistency. He does not seek recognition, but he consistently puts in the work, supports others, and focuses on what benefits the community.",
    name: "Anas Ismail",
    role: "President",
    org: "NTU Sentinels",
  },
  {
    quote: "He is a rare gem that any organisation would be lucky to have.",
    name: "Liew Yoon Hin",
    role: "Senior Lecturer",
    org: "Ngee Ann Polytechnic",
  },
  {
    quote:
      "Given his can-do attitude and interest in Cyber Security, he was able to work under tight deadlines and was exposed to various situations that required him to think on his feet.",
    name: "Rene Teo",
    role: "Senior Security Consultant",
    org: "Thinkture Pte Ltd",
  },
];

export type Testimonial = (typeof testimonials)[number];
