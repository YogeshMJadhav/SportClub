import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';
import { fetchTennisData, addTennisData, deleteTennisData } from '../services/tennis';

export default function TennisTeam() {

    const [ tennisData, setTennisData ] = useState([]);
    const [show, setShow] = useState(false);

    const [ deleteShow, setDelete ] = useState(false);

    const [ fullName, setFullName ] = useState('')
    const [ bornDate, setBornDate ] = useState('')
    const [ plays, setPlays ] = useState('')

    /**** Add tennis records */

    const addTennisRecords = () => {
        let data = {
            Full_Name: fullName,
            Born: bornDate,
            Plays: plays
        };
        addTennisData(data);
        setShow(false);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (event) => {
        console.log('event pass form delete button', event);
        deleteTennisData(event);
        setDelete(true);
    }
    const handleDeleteShow = () => setDelete(false);
    const handleDeleteClose = () => setDelete(false);

    useEffect(() => {
        fetchTennisData().then((res)=> {
            setTennisData(res.data)
        })
        }, [])
    
    return(
        <div>
            <Table striped bordered hover>
                <thead>

                        {/*****Add players record */}

                <Button variant="primary" onClick={handleShow}>
                    Add Players
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Player Info</Modal.Title>
                    </Modal.Header>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Full Name" onChange={e => setFullName(e.target.value)} />
                        <br />
                        <Form.Control type="text" placeholder="Born" onChange={e => setBornDate(e.target.value)} />
                        <br />
                        <Form.Control type="text" placeholder="Plays" onChange={e => setPlays(e.target.value)} />
                    </Form.Group>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addTennisRecords}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

                {/** Delete players record */}

                    <Modal show={deleteShow} onHide={handleDeleteShow} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Players record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Sure, you want to delete this records.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteClose}>
                            No
                        </Button>
                        <Button variant="primary" onClick={handleDeleteShow}>
                            Yes
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Born</th>
                    <th>Plays</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {tennisData.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.Full_Name}</td>
                                <td>{item.Born}</td>
                                <td>{item.Plays}</td>

                    <Button key={item.id} variant="primary" onClick={() => { handleDelete(item.id)}}>
                        Delete
                    </Button>

                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}