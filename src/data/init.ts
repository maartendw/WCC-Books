import sqlite from 'sqlite3'
import {books} from '../books'

const sqlite3 = sqlite.verbose()

export const db = new sqlite3.Database("db.sqlite",
    (err) => {
        if( err ) {
            console.log(err.message)
            throw err
        } else {
            console.log("Connected to the database")
db.run(
`
CREATE TABLE author(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
)
`
, (dberr) => { if(dberr) {
                    console.log("Authors' table already created.")
               } else {
                    const insert = 'INSERT INTO author (id,name) VALUES (?,?)'
                    db.run(insert, [0,"Philip K. Dick"])
                    db.run(insert, [1,"Frank Herbert"])
                    db.run(insert, [2,"Anne Frank"])
                    db.run(insert, [3,"Markus Zusak"])
                    db.run(insert, [4,"Larry Collins"])
                    db.run(insert, [5,"Dominique Lapierre"])
                    db.run(insert, [6,"Roger S. Pressman"])
                    db.run(insert, [7,"Bruce Maxim"])
                    db.run(insert, [8,"Voltaire"])
                    db.run(insert, [9,"Mark Twain"])
                    db.run(insert, [10,"Douglas Adams"])
                    db.run(insert, [11,"Washington Irving"])
                    db.run(insert, [12,"Jim Davis"])
                    db.run(insert, [13,"Edith Konecky"])
                    db.run(insert, [14,"Philip Neil"])
                    db.run(insert, [15,"Star Wars"])
                    db.run(insert, [16,"William Shakespeare"])
                    db.run(insert, [17,"William Dufris"])
                    db.run(insert, [18,"Bram Stoker"])
                    db.run(insert, [19,"Arthur Conan Doyle"])
                    db.run(insert, [20,"Agatha Christie"])
                    db.run(insert, [21,"Thomas Hardy"])
                    db.run(insert, [22,"Charles Dickens"])









                }
            })
db.run(
`
CREATE TABLE book(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    image TEXT,
    rating INTEGER,
    numberrating INTEGER
)
`
, (dberr) => { if(dberr) {
                    console.log("Books' table already created.")
               } else {
                    const insert =
`
INSERT INTO book (id,title, image, rating, numberrating) VALUES (?,?,?,?,?)
`
                    books.forEach( b => {
                        db.run(insert, [b.id, b.title, b.image, b.rating, b.numberrating])
                    })
                }
            })

db.run(
`
CREATE TABLE author_book(
    author_id INTEGER,
    book_id INTEGER,
    FOREIGN KEY(author_id) REFERENCES author(author_id),
    FOREIGN KEY(book_id) REFERENCES book(book_id)
)
`

, (dberr) => { if(dberr) {
                  console.log("Book/Author relation table already created.")
               } else {
                    const insert =
`
INSERT INTO author_book (author_id, book_id) VALUES (?,?)
`
                    db.run(insert, [0,1])
                    db.run(insert, [0,2])
                    db.run(insert, [0,3])
                    db.run(insert, [0,4])
                    db.run(insert, [1,5])
                    db.run(insert, [2,6])
                    db.run(insert, [3,7])
                    db.run(insert, [4,8])
                    db.run(insert, [5,8])
                    db.run(insert, [6,9])
                    db.run(insert, [7,9])
                    db.run(insert, [8,10])
                    db.run(insert, [9,11])
                    db.run(insert, [10,12])
                    db.run(insert, [11,13])
                    db.run(insert, [11,14])
                    db.run(insert, [11,15])
                    db.run(insert, [12,16])
                    db.run(insert, [13,17])
                    db.run(insert, [14,18])
                    db.run(insert, [15,19])
                    db.run(insert, [15,20])
                    db.run(insert, [15,21])
                    db.run(insert, [15,21])
                    db.run(insert, [16,22])
                    db.run(insert, [9,23])
                    db.run(insert, [17,23])
                    db.run(insert, [18,23])
                    db.run(insert, [19,25])
                    db.run(insert, [20,26])
                    db.run(insert, [21,27])
                    db.run(insert, [22,28])
                    db.run(insert, [22,29])
                    db.run(insert, [22,30])
                }
            })
        }
    })

