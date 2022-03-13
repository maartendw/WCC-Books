import {db} from './init'
import {books, Book} from '../books'

export function getAllBooks(search:string, fn:(books:Book[]) => void) {
  const sql = `
              SELECT b.id, b.title, b.image, b.rating, b.numberrating,
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
            SELECT b.id, b.title, b.image, b.rating, b.numberrating,
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
  const insertBook = 'INSERT INTO book (title, image, rating, numberrating) VALUES (?,?,?,?)' // autoincrement, so no id provided
  const insertRelation = 'INSERT INTO author_book (author_id, book_id) VALUES (?,?)'

  db.run(insertBook, [s.title, s.image, s.rating, s.numberrating]) // add book in book table
  // here we have to find something to get the id of the just written book

  console.log('book created in db')

  db.serialize(() => {

  s.authors.forEach(author => {

    const sqlAuthor = `
                  SELECT *
                  FROM author
                  WHERE name = ?`

    const paramsAuthor:string[] = [author]

    db.get(sqlAuthor, paramsAuthor, (err, row) => {

      if (err) {
        return console.error(err.message);
      } else {
      if (typeof row !== 'undefined'){
        console.log('recognized author in db: ' + author)
        db.run(insertRelation, [row.id, s.id])
        console.log('relation written' + row.id + "&" + s.id)
      } else {
        console.log('UNrecognized author in db: ' + author + ". Adding...")
        db.run(insertAuthor, [author])
        db.get(sqlAuthor, paramsAuthor, (err2, row2) => {

          if (err2) {
            return console.error(err2.message);
          } else {
            console.log('author now recognized in db: ' + author)
            db.run(insertRelation, [row2.id, s.id])
            console.log('relation written' + row2.id + "&" + s.id)
          }

      })

      }


  }


  }
    )

  })}

)}



// OLD but newer
//   s.authors.forEach(author => {
//     const sql1 = `
//                   SELECT id
//                   FROM author
//                   WHERE name = ?
//                   `
//     const params1: string[] = [author]
//     console.log("sql1 defined")

//     db.get(sql1, params1, (err, res) => {
//       if( err ) {
//         console.log("error in database: "+err)
//       } else {
//         if (typeof res === 'undefined') {
//           console.log('author not yet in db, adding...')
//           db.run(insertAuthor, [author]) // add author
//           console.log('author added')
//           // now get its id and add the relation
//           db.get(sql1, params1, (err2, res2) => {
//             if( err2 ) {
//               console.log("error in database: "+ err2)
//             } else {
//               console.log('author is (!) now in db and adding relation...')
//               db.run(insertRelation, [res2.id, s.id])
//         }})}
//         console.log('author already known in db, adding relation...')
//         db.run(insertRelation, [res.id, s.id]) // add relation
//       }
//     })
//   })
// }




// OLD ------------

//   function getauthorid(name: string) {

//     const params1: string[] = [name]
//     db.get(sql1, params1, (err, res) => {
//       if (err) {
//         console.log('no author with id')
//         db.run(insertAuthor, [name])
//         const sql2 = `
//         SELECT id
//         FROM author
//         WHERE name = ?'
//         `
//         const params2: string[] = [name]
//         const authorId = db.get(sql2, params2)
//         db.run(insertBook, [s.title, s.image, s.rating, s.numberrating])
//         db.run(insertRelation, [authorId, s.id ])

//       }
//       else {
//        console.log('author already exists')
//        db.run(insertBook, [s.title, s.image, s.rating, s.numberrating])
//        db.run(insertRelation, [res.id, s.id ])
//       }
//       })
//     }
// }