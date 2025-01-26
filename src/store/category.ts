export interface Event {
  id: number;
  title: string;
  date: string;
  price: string;
  location: string;
  image: string;
}

export interface Category {
  name: string;
  events: Event[];
}

export const categories: Category[] = [
  {
    name: "Music",
    events: [
      { id: 1, title: "Rock Fest", date: "2025-03-01", price: "₹799", location: "Mumbai", image: "/rockfest.jpg" },
      { id: 2, title: "Jazz Night", date: "2025-03-15", price: "₹599", location: "Delhi", image: "/jazznight.jpg" },
    ],
  },
  {
    name: "Art",
    events: [
      { id: 3, title: "Art Expo", date: "2025-02-20", price: "₹299", location: "Pune", image: "/artexpo.jpg" },
    ],
  },
  {
    name: "Sports",
    events: [
      { id: 4, title: "Football Championship", date: "2025-02-25", price: "₹999", location: "Bangalore", image: "/football.jpg" },
    ],
  },
];
