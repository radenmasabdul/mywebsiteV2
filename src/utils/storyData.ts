import Pict1 from "../assets/pictures/4fa3444a-507d-4aa0-999c-e6002086c606.jpg";
import Pict2 from "../assets/pictures/517415be-7e14-41da-a3f8-2194803460c5.jpg";
import Pict3 from "../assets/pictures/newlogo.jpg";
import Pict4 from "../assets/pictures/IMG_0630.jpg";
import Pict5 from "../assets/pictures/IMG_1316.jpg";
import { StoryImage } from "../types/story";

export const images: StoryImage[] = [
  { src: Pict1, caption: "Meowsterpiece 🐾", nail: "bg-red-600" },
  { src: Pict2, caption: "Crafting life, one line at a time ✨", nail: "bg-yellow-500" },
  { src: Pict3, caption: "My signature, my story ✍️", nail: "bg-green-600" },
  { src: Pict4, caption: "My happiest place is always next to you ❤️", nail: "bg-blue-600" },
  { src: Pict5, caption: "A garage full of dreams 🛞", nail: "bg-pink-600" },
];

export const descriptionKey = "story.description";
export const descriptionTextKey = "story.descriptionText";