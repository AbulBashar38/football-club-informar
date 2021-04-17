import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faMars,} from '@fortawesome/free-solid-svg-icons';
import girlsPic from '../../images/female.png';
import boysPic from '../../images/male.png';
import './TeamDetails.css';
import facebook from '../../images/facebook-512.png';
import twitter from '../../images/new2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png';
import youTube from '../../images/free-youtube-logo-icon-2431-thumb.png'
const TeamDetails = () => {
    const { teamId } = useParams()
    const [teamDetails, setTeamDetails] = useState({})
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams[0]))
    }, [teamId])
    
    const { strGender, strDescriptionEN, strTeamBanner, strAlternate, strCountry, intFormedYear,strStadiumDescription } = teamDetails;
    const showImg = strGender === 'Male' ? boysPic : girlsPic;
    return (
        <div className='details-container'>
            <div>
                <img style={{ width: '100%' }} src={strTeamBanner} alt='' />
            </div>
            <Container>
                <Row className='clubInfo'>
                    <Col md={6} style={{ marginTop: '5%' }}>
                        <h2>{strAlternate}</h2>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>
                        <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded year: {intFormedYear}</h4>
                    </Col>
                    <Col md={6} style={{ padding: '20px' }}>
                        <img style={{ width: '100%' }} src={showImg} alt='' />
                    </Col>
                </Row>
                <div className='description'>
                    <h4>About our club</h4>
                    <p>{strDescriptionEN}</p>
                    <h4>Stadium Description</h4>
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="img-style">
                <img style={{width:'8%', margin:'10px'}} src={facebook} alt=""/>
                <img style={{width:'8%',margin:'10px'}} src={twitter} alt=""/>
                <img style={{width:'10%',margin:'6px'}} src={youTube} alt=""/>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;