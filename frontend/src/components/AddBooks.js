import react, { useState } from "react";
import {makeOptions, handleHttpErrors} from "../facades/fetchUtils";
import {bookURL as url} from "../facades/settings"
import {Table, Form, Button } from "react-bootstrap";

export default function AddBooks({books}){
    const init = {
        isbn: "",
        title: "",
        authors: "",
        publishers: "",
        publishYear: "",         
    }

    const [book, setBook] = useState({...init})

    const onChange = (evt) => {
        setBook({
          ...book,
          [evt.target.id]: evt.target.value,
        });
      };

    const onClick = (evt) =>{
        evt.preventDefault();
        const options = makeOptions("POST", true, book);
        fetch(url, options)
            .then(handleHttpErrors)
            .then((data) => {
                setBook({...init}) 
            })
            .catch(err =>{
                if(err.status){
                  err.fullError.then(e=> alert(e.message))
                }
                else{console.log("Network error"); }
             });
            
        }
    
    return(
        <div>
             <h1>Add Book</h1>
            <Form.Group onChange={onChange} className="m-5"> 
                <Form.Label for="isbn">First name:</Form.Label><br/>
                <Form.Control type="text" id="isbn" name="fname"/><br/>
                <Form.Label for="title">Last name:</Form.Label><br/>
                <Form.Control type="text" id="title" name="lname"/><br/>
                <Form.Label for="authors">Last author:</Form.Label><br/>
                <Form.Control type="text" id="authors" name="lname"/><br/>
                <Form.Label for="publishers">publisher</Form.Label><br/>
                <Form.Control type="text" id="publishers" name="lname"/><br/>
                <Form.Label for="publishYear">publishYear:</Form.Label><br/>
                <Form.Control type="text" id="publishYear" name="lname"/><br/>
                <Button type="button" onClick={onClick}>Send</Button>
            </Form.Group>
        </div>
    )

}
