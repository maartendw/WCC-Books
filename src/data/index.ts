import {db} from './init'
import {books, Book} from '../books'

export function getAllBooks(search:string, fn:(books:Book[]) => void) {
  const sql = `
              SELECT b.id, b.title, b.image, b.rating, b.numberrating, b.category,
              GROUP_CONCAT(a.name, ', ') as authors
              FROM Book b
              INNER JOIN author_book ab ON b.id = ab.book_id
              INNER JOIN author a ON a.id = ab.author_id
              WHERE b.title LIKE '%' || ? || '%'
              GROUP BY b.id
              `
  const params:string[] = [search]
  return db.all(sql, params, (err, rows) => {
    if( err ) {
      console.log("error in database: "+err)
      fn([])
    } else {
      console.log(rows)
      fn(rows)
    }
  })
}

export function getOneBook(id:number, fn:(book:Book|null) => void) {
  const sql = `
            SELECT b.id, b.title, b.image, b.rating, b.numberrating, b.category,
            GROUP_CONCAT(a.name, ', ') as authors
            FROM Book b
            INNER JOIN author_book ab ON b.id = ab.book_id
            INNER JOIN author a ON a.id = ab.author_id
            WHERE b.id = ?
            `
  const params:string[] = [""+id]
  return db.get(sql, params, (err, row) => {
    if( err ) {
      console.log("error in database: "+err)
      fn(null)
    } else {
      console.log(row)
      fn(row)
    }
  })
}

export function addOneBook(s:Book) {
  const insertAuthor = 'INSERT INTO author (name) VALUES (?)' // autoincrement, so no id provided
  const insertBook = 'INSERT INTO book (title, image, rating, numberrating, category) VALUES (?,?,?,?,?)' // autoincrement, so no id provided
  const insertRelation = 'INSERT INTO author_book (author_id, book_id) VALUES (?,?)'

  db.run(insertBook, [s.title, s.image, s.rating, s.numberrating, s.category]) // add book in book table
  // here we have to find something to get the id of the just written book

  s.authors.forEach(author => {
    const sqlAuthor = `SELECT id
                       FROM author
                       WHERE name = ?`

    const paramsAuthor:string = author

    const sqlBook = `SELECT id
                     FROM book
                     ORDER BY id DESC LIMIT 1`

    // Check if author already exits
    db.get(sqlAuthor, paramsAuthor, (err, row) => {
      const authorID = JSON.stringify(row)

      if (row === undefined) {  // If author does not exist:

        console.log(author + ' does not exist in db')
        // Insert author into author table (ID is inserted automatically via autoincrement)
        db.run(insertAuthor, author)
        console.log(author + ' now added in db')
        // Fetch ID auf newly inserted author
        db.get(sqlAuthor, paramsAuthor, (err3, row3) => {
          const authorIDnew = JSON.stringify(row3.id)
          console.log(author + 's ID is now: ' + authorIDnew)
        // Fetch ID of newly created Book
          db.get(sqlBook,(err2, row2) => {
            const bookIDnew = JSON.stringify(row2.id)
          // Insert author / book relation with the corresponding IDs
            db.run(insertRelation, authorIDnew, bookIDnew)
          } )

        })

    } else { // else if author already exists

      const authorIDold = JSON.stringify(row.id)
      console.log(author + ' - author already in database with ID - ' + authorIDold)
      // Fetch ID book ID
      db.get(sqlBook,(err2, row2) => {
        const bookIDnew = JSON.stringify(row2.id)
      // Insert author / book relation with the corresponding IDs
        db.run(insertRelation, authorIDold, bookIDnew)
      } )


    }
  })

  })}


// export function getbookratings(fn:(entries:[]) => void) {

//   const sqlbookratings = `SELECT COUNT(id) as count, rating
//                        FROM book
//                        GROUP BY rating;`

//   return db.get(sqlbookratings,(err, rows) => {
//     console.log('getbookratings function activated')
//     if (err) {
//       console.log('error connecting to database')
//       fn([])
//     } else {

//       // console.log(rows)
//       fn(rows)
//     }

//   })
// }
