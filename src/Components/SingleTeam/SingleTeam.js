
import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import './SingleTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const SingleTeam = (props) => {
    
    const { strTeam, strCountry, strTeamBadge, idTeam } = props.team
    return (

        <Col md={3}>
            <Card className='card-style'>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        {strCountry}
                    </Card.Text>
                    <Link to ={`/team/${idTeam}`} >
                    <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTeam;