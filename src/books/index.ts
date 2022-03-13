// This module should contain all functions related with books
// For now, it only contains the list of books

export interface Book {
    id: number,
    title: string,
    authors: string[],
    image: string,
    rating: number,
    numberrating: number
}

export const books = [
    {
        id: 1,
        title: "Ubik",
        authors: [
            "Philip K. Dick"
        ],
        image: "https://covers.openlibrary.org/b/id/9251896-L.jpg",
        rating: 4,
        numberrating: 300,
    },
    {
        id: 2,
        title: "Do Androids dream of electric sheep?",
        authors: [
            "Philip K. Dick"
        ],
        image: "https://covers.openlibrary.org/b/id/11153217-L.jpg",
        rating: 5,
        numberrating: 255,
    },
    {
        id: 3,
        title: "The Man in The High Castle",
        authors: [
            "Philip K. Dick"
        ],
        image: "https://covers.openlibrary.org/b/id/10045188-L.jpg",
        rating: 5,
        numberrating: 120,
    },
    {
        id: 4,
        title: "Minority Report and other tales",
        authors: [
            "Philip K. Dick"
        ],
        image: "https://covers.openlibrary.org/b/id/911202-L.jpg",
        rating: 3,
        numberrating: 450,
    },
    {
        id: 5,
        title: "Dune",
        authors: [
            "Frank Herbert"
        ],
        image: "https://covers.openlibrary.org/b/id/911202-L.jpg",
        rating: 4,
        numberrating: 450,
    },
    {
        id: 6,
        title: "Journal de Anne Frank",
        authors: [
            "Anne Frank"
        ],
        image: "https://covers.openlibrary.org/b/id/9251896-L.jpg",
        rating: 5,
        numberrating: 150,
    },
    {
        id: 7,
        title: "The Book Thief",
        authors: [
            "Markus Zusak"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL32728761M-M.jpg",
        rating: 5,
        numberrating: 75,
    },
    {
        id: 8,
        title: "Is Paris Burning",
        authors: [
            "Larry Collins", "Dominique Lapierre"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL21794948M-M.jpg",
        rating: 5,
        numberrating: 99,
    },
    {
        id: 9,
        title: "Software engineering: a practitioner's approach",
        authors: [
            "Roger S. Pressman", "Bruce Maxim"
        ],
        image: "https://covers.openlibrary.org/b/id/10617761-L.jpg",
        rating: 3,
        numberrating: 34,
    },
    {
        id: 10,
        title: "Candide",
        authors: [
            "Voltaire"
        ],
        image: "https://covers.openlibrary.org/b/id/10397043-L.jpg",
        rating: 3,
        numberrating: 38,
    },
    {
        id: 11,
        title: "Life on the Mississippi",
        authors: [
            "Mark Twain"
        ],
        image: "https://covers.openlibrary.org/b/id/10639721-L.jpg",
        rating: 4,
        numberrating: 67,
    },
    {
        id: 12,
        title: "The Hitch Hiker's Guide to the Galaxy",
        authors: [
            "Douglas Adams"
        ],
        image: "https://covers.openlibrary.org/b/id/11464254-L.jpg",
        rating: 5,
        numberrating: 61,
    },
    {
        id: 13,
        title: "Rip Van Winkle",
        authors: [
            "Washington Irving"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL6531801M-M.jpg",
        rating: 4,
        numberrating: 33,
    },
    {
        id: 14,
        title: "Life of George Washington",
        authors: [
            "Washington Irving"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL7165004M-M.jpg",
        rating:1,
        numberrating: 10,
    },
    {
        id: 15,
        title: "The life and voyages of Christopher Columbus",
        authors: [
            "Washington Irving"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL13446609M-M.jpg",
        rating: 3,
        numberrating: 30,
    },
    {
        id: 16,
        title: "Garfield Classics (Garfield Classic Collection)",
        authors: [
            "Jim Davis"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL12569670M-M.jpg",
        rating: 4,
        numberrating: 10,
    },
    {
        id: 17,
        title: "Allegra Maud Goldman",
        authors: [
            "Edith Konecky"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL13592573M-M.jpg",
        rating: 3,
        numberrating: 5,
    },
    {
        id: 18,
        title: "Odin's family",
        authors: [
            "Philip Neil"
        ],
        image: "https://covers.openlibrary.org/b/id/362913-M.jpg",
        rating: 2,
        numberrating: 4,
    },
    {
        id: 19,
        title: "Build a Droid Sticker Activity Book",
        authors: [
            "Star Wars"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL28692298M-M.jpg",
        rating: 5,
        numberrating: 2,
    },
    {
        id: 20,
        title: "5-Minute Stories Strike Back",
        authors: [
            "Star Wars"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL28692335M-M.jpg",
        rating: 4,
        numberrating: 20,
    },
    {
        id: 21,
        title: "Luke Skywalker Dot-To-Dot Colouring and Activity Book",
        authors: [
            "Star Wars"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL28708064M-M.jpg",
        rating: 4,
        numberrating: 21,
    },
    {
        id: 22,
        title: "Hamlet",
        authors: [
            "William Shakespeare"
        ],
        image: "https://covers.openlibrary.org/b/id/12513623-L.jpg",
        rating: 5,
        numberrating: 144,
    },
    {
        id: 23,
        title: "The adventures of Tom Sawyer",
        authors: [
            "Mark Twain", "William Dufris"
        ],
        image: "https://covers.openlibrary.org/b/id/11394793-L.jpg",
        rating: 5,
        numberrating: 67,
    },
    {
        id: 24,
        title: "Dracula",
        authors: [
            "Bram Stoker"
        ],
        image: "https://covers.openlibrary.org/b/id/10749908-L.jpg",
        rating: 4,
        numberrating: 250,
    },
    {
        id: 25,
        title: "The hound of the Baskervilles",
        authors: [
            "Arthur Conan Doyle"
        ],
        image: "https://covers.openlibrary.org/b/id/10404829-L.jpg",
        rating: 4,
        numberrating: 112,
    },
    {
        id: 26,
        title: "Death on the Nile",
        authors: [
            "Agatha Christie"
        ],
        image: "https://covers.openlibrary.org/b/id/11153455-L.jpg",
        rating: 5,
        numberrating: 332,
    },
    {
        id: 27,
        title: "The mayor of Casterbridge",
        authors: [
            "Thomas Hardy"
        ],
        image: "https://covers.openlibrary.org/b/id/119702-L.jpg",
        rating: 5,
        numberrating: 32,
    },
    {
        id: 28,
        title: "The Adventures of Oliver Twist",
        authors: [
            "Charles Dickens"
        ],
        image: "https://covers.openlibrary.org/b/id/9279209-L.jpg",
        rating: 5,
        numberrating: 201,
    },
    {
        id: 29,
        title: "Pickwick Papers",
        authors: [
            "Charles Dickens"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL22890331M-M.jpg",
        rating: 4,
        numberrating: 33,
    },
    {
        id: 30,
        title: "Bleak House",
        authors: [
            "Charles Dickens"
        ],
        image: "https://covers.openlibrary.org/b/olid/OL23281904M-M.jpg",
        rating: 3,
        numberrating: 42,
    }
]