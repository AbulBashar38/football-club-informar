import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleTeam from '../SingleTeam/SingleTeam';
import Banar from '../../images/awseme-covered-football-stadium-website-header.jpg';
import './AllTeams.css'
const AllTeams = () => {
    const [allTeams,setAllTeams]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setAllTeams(data.teams))
    },[])
    return (
        <>
        <div className='img-container'>
        <img src={Banar} alt=""/>
        <div className='centered'>
        <h1 style={{fontSize: '4vw'}}>Football Club Informer</h1>
        <h5 style={{fontSize: '2vw'}}>You can find all club information here</h5>
        </div>
        </div>
        <div className='card-container'>
        <Container>
        <Row>
            {allTeams.map(Team=><SingleTeam key={Team.idTeam} team={Team}></SingleTeam>)}
        </Row>
        </Container>
        </div>
        </>
    );
};

export default AllTeams;