import React from 'react';
import { Card } from 'react-bootstrap';
import step1 from '../img/step-one.PNG';
import step2 from '../img/step-two.PNG';
import step3 from '../img/step-three.PNG';

const HowToSteps = () => {
    return (
        <div className="">
            <Card className="how-to-steps border-0">
                <Card.Body className="">
                    <div className="all-steps ml-5">
                        <img className="steps" src={step1} alt="step one" />
                        <img className="steps" src={step2} alt="step two" />
                        <img className="steps" src={step3} alt="step three" />
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default HowToSteps;