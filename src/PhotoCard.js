import React from "react";
import {Image,Container,Header, Divider, Modal, Button} from 'semantic-ui-react';


export default function PhotoCard({image , dt, ttl, expl }){
    if(!image) return <h3>Loading...</h3> 
    return(
    <div>
        <div>{ttl}</div>
        <div>{dt}</div>
        <Image src={image} size='huge' centered rounded />
        <Divider/>
        <Container textAlign='left' text>
            <Modal trigger={<Button inverted >Show Explanation</Button>} closeIcon>
                <Modal.Content text>
                    <Image src={image} size='medium' centered/>
                    <p></p>
                    <Header>Eplanation</Header>
                    
                    <div>{expl}</div>
                </Modal.Content>
            </Modal>
            
        </Container>
    </div>
    );
}