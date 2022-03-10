import {db} from './init'
import {books, Book} from '../books'

export function getAllBooks(search:string, fn:(books:Book[]) => void) {
  const sql = `
              SELECT * FROM Book b
              WHERE b.title LIKE '%' || ? || '%'
              `
  const params:string[] = [search]
  return db.all(sql, params, (err, rows) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn([])
    } else {
      console.log(rows)
      // Now get the authors for each book and add it to the result
      fn(rows)
    }
  })
}

export function getOneBook(id:number, fn:(book:Book|null) => void) {
  const sql = "SELECT * FROM Book WHERE id = ?"
  const params:string[] = [""+id]
  return db.get(sql, params, (err, row) =>{
    if( err ) {
      console.log("error in database: "+err)
      fn(null)
    } else {
      console.log(row)
      // get the authors of the book and add it to the book
      fn(row)
    }
  })}

export function addOneBook(s:Book) {
  // insert one new book into the database
  // Don't forget to add the relation to authors
  // The relation to authors is established using the author identifiers
}