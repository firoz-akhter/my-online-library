import { createSlice } from "@reduxjs/toolkit";



let bookList = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A novel about the American dream.",
        rating: 4.4,
        category: "Fiction",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a7350c9186433.560c9f1d670e4.jpg",
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian social science fiction novel.",
        rating: 4.2,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/c5/bb/9e/c5bb9e4f276d8026eeaf6374df67f5a7.jpg" 
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about racial inequality.",
        rating: 4.3,
        category: "Fiction",
        image: "https://i.pinimg.com/736x/bd/5f/b5/bd5fb566c8dbe0c3d1d51fd9fb9e8842.jpg" 
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel.",
        rating: 4.6,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/00/a9/f6/00a9f6438990cb441205e351f5d81f3e.jpg" 
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A story about teenage angst.",
        rating: 3.8,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/4b/be/9c/4bbe9c695bd2c2005847108120df0612.jpg" 
    },
    {
        id: 6,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel.",
        rating: 4.5,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/f0/ef/f7/f0eff7a12fb68b92482696951101ebcb.jpg"
    },
    {
        id: 7,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        description: "A dystopian science fiction novel.",
        rating: 4.3,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/7b/78/32/7b78321fd5d19661052bdc0d5e609830.jpg"
    },
    {
        id: 8,
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        description: "A dystopian novel.",
        rating: 4.2,
        category: "Fiction",
        image: "https://i.pinimg.com/control/564x/7a/fe/33/7afe33fbafd769cdc7f9d32c329681d3.jpg"
    },
    {
        id: 9,
        title: "The Nightingale",
        author: "Kristin Hannah",
        description: "A historical fiction novel.",
        rating: 4.6,
        category: "Fiction",
        image: "https://i.pinimg.com/control/736x/c6/1f/40/c61f40ac9df8167960ee721c54facdaa.jpg"
    },
    {
        id: 10,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        description: "A philosophical novel.",
        rating: 4.1,
        category: "Fiction",
        image: "https://i.pinimg.com/control/736x/5c/c8/92/5cc892def63aa646ba9a9925be52bc94.jpg"
    },
    {
        id: 11,
        title: "The Kite Runner",
        author: "Khaled",
        description: "A philosophical novel.",
        rating: 4.1,
        category: "Fiction",
        image: "https://i.pinimg.com/564x/9d/6a/5b/9d6a5bcfcf52b8cd82a207c3ce12b575.jpg"
    },

    {
        id: 12,
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        description: "A brief history of humankind.",
        rating: 4.5,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/736x/7e/a0/d9/7ea0d95ec9e62f6abc88917ac556a891.jpg" 
    },
    {
        id: 13,
        title: "Educated",
        author: "Tara Westover",
        description: "A memoir about self-discovery.",
        rating: 4.7,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/control/564x/e5/94/5c/e5945cc99bb9abb55fbcbb099e7d414a.jpg" 
    },
    {
        id: 14,
        title: "The Immortal Life of Henrietta Lacks",
        author: "Rebecca Skloot",
        description: "The story of Henrietta Lacks' immortal cell line.",
        rating: 4.4,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/564x/27/dd/20/27dd207ed00f7f16042bdab82977d887.jpg" 
    },
    {
        id: 15,
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        description: "A comprehensive history of science.",
        rating: 4.5,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/564x/46/4a/e6/464ae60ccbe94a972005fff30d681e19.jpg"
    },
    {
        id: 16,
        title: "The Devil in the White City",
        author: "Erik Larson",
        description: "A historical account of the 1893 World's Fair.",
        rating: 4.4,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/736x/5e/60/17/5e6017b68d390fc3e5f01acd36d75207.jpg"
    },
    {
        id: 17,
        title: "Freakonomics",
        author: "Steven Levitt and Stephen Dubner",
        description: "A unique perspective on economics.",
        rating: 4.2,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/564x/76/c0/e6/76c0e646b0e968428300a25e46773814.jpg"
    },
    {
        id: 18,
        title: "The Sixth Extinction",
        author: "Elizabeth Kolbert",
        description: "An exploration of human impact on the environment.",
        rating: 4.4,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/736x/3e/d6/cb/3ed6cb09465a4d8287f29d2a449a5e8b.jpg"
    },
    {
        id: 19,
        title: "Just Mercy",
        author: "Bryan Stevenson",
        description: "A memoir about social justice.",
        rating: 4.8,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/564x/ba/69/d7/ba69d77603d7102b3b181253224f4256.jpg"
    },
    {
        id: 20,
        title: "The New Jim Crow",
        author: "Michelle Alexander",
        description: "An analysis of systemic racism.",
        rating: 4.6,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/736x/71/4c/1d/714c1d6038dd7381a17f1f4a11929b5d.jpg"
    },
    {
        id: 21,
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond",
        description: "A comprehensive history of human societies.",
        rating: 4.5,
        category: "Non-Fiction",
        image: "https://i.pinimg.com/564x/d4/ce/10/d4ce107e2df8c5c5996ee94ca24b24fd.jpg"
    },

    {
        id: 22,
        title: "Dune",
        author: "Frank Herbert",
        description: "A classic science fiction novel.",
        rating: 4.4,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/control/564x/3a/c9/6d/3ac96daf6f926e16c6d09e63ace1a46b.jpg" 
    },
    {
        id: 23,
        title: "The Martian",
        author: "Andy Weir",
        description: "A survival story on Mars.",
        rating: 4.5,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/control/564x/e5/52/02/e5520252b03ada02c6eb3f004a38b135.jpg" 
    },
    {
        id: 24,
        title: "The Three-Body Problem",
        author: "Liu Cixin",
        description: "A science fiction epic.",
        rating: 4.3,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/736x/68/8f/12/688f1282fa66786865bba738c9779a23.jpg"
    },
    {
        id: 25,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        description: "A comedic science fiction series.",
        rating: 4.4,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/564x/b0/94/f6/b094f6a84504589ea1d7f615e23004f5.jpg"
    },
    {
        id: 26,
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        description: "A classic dystopian novel.",
        rating: 4.2,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/564x/9d/47/84/9d4784cbad02847e46aae043e52ddd06.jpg"
    },
    {
        id: 27,
        title: "Neuromancer",
        author: "William Gibson",
        description: "A groundbreaking cyberpunk novel.",
        rating: 4.1,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/564x/37/67/91/376791bfd99d8bd8af3a8dc93be50e0c.jpg"
    },
    {
        id: 28,
        title: "The Time Machine",
        author: "H.G. Wells",
        description: "A classic time travel novel.",
        rating: 4.3,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/564x/e2/2f/e7/e22fe7df3c27c10a3aef40444b6a6ee9.jpg"
    },
    {
        id: 29,
        title: "War of the Worlds",
        author: "H.G. Wells",
        description: "A classic alien invasion novel.",
        rating: 4.2,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/736x/94/a6/4a/94a64a0ac402b2c5f5681db2dd0a7ecc.jpg"
    },
    {
        id: 30,
        title: "The Left Hand of Darkness",
        author: "Ursula Le Guin",
        description: "A thought-provoking science fiction novel.",
        rating: 4.4,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/736x/bd/43/36/bd4336c872719f68eb8846ba6fc800e6.jpg"
    },
    {
        id: 31,
        title: "Ender's Game",
        author: "Orson Scott Card",
        description: "A classic science fiction novel.",
        rating: 4.4,
        category: "Sci-Fi",
        image: "https://i.pinimg.com/564x/cc/64/1b/cc641b3205f04a7457a78b40b4bd19a4.jpg"
    },
]



const bookSlice = createSlice({
    name: "book",
    initialState: {
        items: [...bookList],
    },
    reducers: {
        addOneBook: (state, action) => {
            state.items.push(action.payload);
        }
    }
})



export const { addOneBook } = bookSlice.actions;

export default bookSlice.reducer;