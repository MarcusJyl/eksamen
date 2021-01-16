import { useState } from "react"
import {makeOptions, handleHttpErrors} from "../facades/fetchUtils";
import {bookURL as url} from "../facades/settings"
import {Table, Form, Button } from "react-bootstrap";


export default function DeleteBook({books}){

    const[bookId, setBookId] = useState("");
    const[selectedBook, setSelectedBook] = useState({});

    const onChange = (evt) => {
        setBookId(evt.target.value)
    }

    const onEdit = (evt) => {
        setSelectedBook({
          ...selectedBook,
          [evt.target.id]: evt.target.value,
        });
      };

      const onClick = (evt) =>{
        evt.preventDefault();
        const options = makeOptions("DELETE", true);
        fetch(url + bookId, options)
            .then(handleHttpErrors)
            .then((data) => {})
            .catch(err =>{
                if(err.status){
                  err.fullError.then(e=> alert(e.message))
                }
                else{console.log("Network error"); }
             });
            
        
        }

        const onClickEdit = (evt) =>{
            evt.preventDefault();
            const options = makeOptions("PUT", true, selectedBook);
            fetch(url + selectedBook.id, options)
                .then(handleHttpErrors)
                .then((data) => {
                    setSelectedBook({}) 
                })
                .catch(err =>{
                    if(err.status){
                      err.fullError.then(e=> alert(e.message))
                    }
                    else{console.log("Network error"); }
                 });
                
            
            }

        const Push = (book)=>{
            //kloner book opbjektet
            setSelectedBook({...book})
            console.log(book)
        }

        
    return(
        <div>
            <h1>Select book in table to be editet</h1>
            <Table>
                <thead><tr><td>isbn</td>
                <td>Title</td>
                <td>author</td>
                <td>publisher</td>
                <td>publish year</td></tr></thead>
                <tbody>{books.map((p) => {
                    return (
                        <tr onClick={() => Push(p)} key={p.isbn}>
                          <td>{p.isbn}</td>
                          <td>{p.title}</td>
                          <td>{p.authors}</td>
                          <td>{p.publisher}</td>
                          <td>{p.publishYear}</td></tr>
                        )
                })}</tbody>
            </Table>
            <h1>Edit info</h1>
            <Form.Group onChange={onEdit} className="m-5"> 
                <Form.Label for="isbn">First name:</Form.Label><br/>
                <Form.Control value={selectedBook.isbn} type="text" id="isbn"/><br/>
                <Form.Label for="title">Last name:</Form.Label><br/>
                <Form.Control value={selectedBook.title} type="text" id="title" name="lname"/><br/>
                <Form.Label for="authors">Last author:</Form.Label><br/>
                <Form.Control value={selectedBook.authors} type="text" id="authors" name="lname"/><br/>
                <Form.Label for="publishers">publisher</Form.Label><br/>
                <Form.Control value={selectedBook.publisher}type="text" id="publishers" name="lname"/><br/>
                <Form.Label for="publishYear">publishYear:</Form.Label><br/>
                <Form.Control value={selectedBook.publishYear}type="text" id="publishYear" name="lname"/><br/>
                <Button type="button" onClick={onClickEdit}>Send</Button>
            </Form.Group>
            <h1>Delete Book</h1>
            <Form.Group onChange={onChange} className="m-5">
                <Form.Label for="bookId">ID of book to be deleted:</Form.Label><br/>
                <Form.Control type="text" id="bookId"/><br/>
                <Button type="button" onClick={onClick}>Delete</Button>
            </Form.Group>
        </div>
    )
}