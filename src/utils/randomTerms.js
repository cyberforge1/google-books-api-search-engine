// utils/randomTerms.js
const terms = [
    "History", "Science", "Fiction", "Technology", "Art",
    "Philosophy", "Biography", "Poetry", "Mystery", "Fantasy",
    "Thriller", "Romance", "Self-Help", "Cooking", "Travel",
    "Health", "Sports", "Music", "Religion", "Gardening",
    "Economics", "Politics", "Culture", "Adventure", "Psychology",
    "Education", "Crime", "Drama", "Children", "War",
    "Space", "Nature", "Engineering", "Computing", "Magic",
    "Horror", "Science Fiction", "Historical Fiction", "Westerns", "Legal",
    "Medical", "Urban", "Pets", "Crafts", "Fashion",
    "Marketing", "Entrepreneurship", "Environmental Science", "Astrophysics", "Mythology",
    "Archaeology", "Geography", "Linguistics", "Sociology", "Anthropology",
    "Cybersecurity", "AI and Robotics", "Quantum Computing", "Virtual Reality", "Graphic Novels"
];

export const getRandomTerm = () => {
  const index = Math.floor(Math.random() * terms.length);
  return terms[index];
};
