import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';
import { fetchTennisData, addTennisData, deleteTennisData, updateTennisData } from '../services/tennis';

export default function TennisTeam() {

    const [ tennisData, setTennisData ] = useState([]);
    const [show, setAddShow] = useState(false);

    const [ id, setId ] = useState(0)
    const [ fullName, setFullName ] = useState('')
    const [ bornDate, setBornDate ] = useState('')
    const [ plays, setPlays ] = useState('')
    
    const [ deleteShow, setDelete ] = useState(false);
    const [ deleteTennisPlayerData, setDeleteTennisData ] = useState(null)
    
    const [ editTennisRecord, setEditTennisRecord ] = useState(null)

    /**** Add tennis records */

    const addTennisRecords = () => {
        let data = {
            Full_Name: fullName,
            Born: bornDate,
            Plays: plays
        };
        addTennisData(data).then((response) => {
            let tennisNewData = tennisData;
            tennisNewData.push(response.data);
            setTennisData([...tennisNewData]);
        });
        setAddShow(false);
    }

    const handleClose = () => setAddShow(false);

    const handleCloseWithClearData = () => {
        setId(0);
        setFullName('');
        setBornDate('');
        setPlays('');    
        setAddShow(false);
    }

    const handleShow = () => setAddShow(true);

    const handleDelete = (event) => {
        setDeleteTennisData(event);
        setDelete(true);
    }

    const handleEditRecord = (event) => {
        setEditTennisRecord(event)
        // setTennisData(event);
        setFullName(event.Full_Name);
        setBornDate(event.Born);
        setPlays(event.Plays);
        setAddShow(true);
    }

    const updateTennisRecord = () => {
        let updatedData = {
            Full_Name: fullName,
            Born: bornDate,
            Plays: plays
        }
        updateTennisData(editTennisRecord.id, updatedData).then((response) => {
            let tennisNewData = tennisData;
            tennisNewData.push(response.data);
            
            console.log('response from update tennisData,',tennisData, tennisNewData);
            setTennisData([...tennisNewData]);
            setAddShow(false);
        })
    }
    
    const handleDeleteYes = () => {
        deleteTennisData(deleteTennisPlayerData).then((response) => {
            let tennisNewData = tennisData.filter(obj => obj.id !== deleteTennisPlayerData);
            setTennisData([...tennisNewData]);
        });
        setDelete(false);
    }
    
    const handleDeleteNo = () => setDelete(false);
    
    useEffect(() => {
        fetchTennisData().then((res)=> {
            setTennisData(res.data)
        })
    }, [])
    
    return(
        <div>
        {console.log('editTennisRecord', editTennisRecord)}
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
                        <Form.Control type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        <br />
                        <Form.Control type="text" placeholder="Born" value={bornDate} onChange={e => setBornDate(e.target.value)} />
                        <br />
                        <Form.Control type="text" placeholder="Plays" value={plays} onChange={e => setPlays(e.target.value)} />
                    </Form.Group>
                    <Modal.Footer>

                        {
                            fullName ?
                            <Button variant="secondary" onClick={handleCloseWithClearData}>
                                Close with clear
                            </Button>:
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        }
                    {
                    editTennisRecord ?
                    <Button variant="primary" onClick={updateTennisRecord}>
                        Save Changes
                    </Button> : 
                    <Button variant="primary" onClick={addTennisRecords}>
                        Add
                    </Button>
                    }
                    </Modal.Footer>
                </Modal>

                {/** Delete players record */}

                    <Modal show={deleteShow} onHide={handleDeleteYes} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Players record</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Sure, you want to delete this records.</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteNo}>
                            No
                        </Button>
                        <Button variant="primary" onClick={handleDeleteYes}>
                            Yes
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Born</th>
                    <th>Plays</th>
                    <th>Operations</th>
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
                                <td>

                                <Button key={item.id} variant="primary" onClick={() => { handleEditRecord(item)}}>
                                    Edit
                                </Button>

                                <Button key={item.id} variant="primary" onClick={() => { handleDelete(item.id)}}>
                                    Delete
                                </Button>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}