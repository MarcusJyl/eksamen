import facade from "../facades/fetchFacade";
import React, { useState, useEffect } from "react";
import {bookURL as url} from "../facades/settings"; 
import { handleHttpErrors, makeOptions } from "../facades/fetchUtils";
import {Table} from "react-bootstrap";



export default function Home({books, setBooks}) {
    
    useEffect(() => {
        const options = makeOptions("GET", true);
        fetch(url + "all", options)
            .then(handleHttpErrors)
            .then((data) => {
                console.log(...data)
                setBooks([...data])
            })
    }, [])
  
  
  
  /*const [dataFromServer, setDataFromServer] = useState({ isEmpty: true });
  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer(data));
  }, []);*/

  return (
    <Table striped bordered hover className="m-5">
                <thead><tr><td>isbn</td><td>Title</td><td>author</td><td>publisher</td><td>publish year</td></tr></thead>
                <tbody>{books.map((p) => {
                    return (
                        <tr key={p.isbn}>
                          <td>{p.isbn}</td>
                          <td>{p.title}</td>
                          <td>{p.authors}</td>
                          <td>{p.publisher}</td>
                          <td>{p.publishYear}</td></tr>
                        )
                })}</tbody>
            </Table>
  );
}
