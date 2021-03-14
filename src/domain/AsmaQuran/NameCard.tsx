import React, { Component } from 'react'
import styled from 'styled-components'

const CardFlip = styled.span`
    height: 50px;
    width: 50px;
    line-height: 3em;
    border-radius: 50%;
    background-color: green;
    color: white;
    letter-spacing: 0.1em;
    font-weight: bold;
    align-self: flex-end;
`;


const CardInner = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;


const Card = styled.div`
    border-radius: 2px;    
    height: 300px;
    margin: 1rem;
    width: 350px;
    padding: 1em;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: transparent;
    border: 1px solid #f1f1f1;
    perspective: 1000px;

    &:hover ${CardInner} {
        animation-name: flip-animation;
        transition-delay: 0.5s;
        transform: rotateY(180deg);
    }

    .ar-name {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.2em;
    }

    .en-name {
        font-size: 1.5em;
    }

    .meaning {
        font-style: italic;
        font-size: 1.25em;
    }

`

const CardFront = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
`;

const CardBack = styled.div`
    position: absolute;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    transform: rotateY(180deg);
    padding: 15%;
    font-size: 1.5em;
`;

type NameCardProp = {
    english: string;
    arabic: string;
    meaning: string;
    references?: string;
}


export class NameCard extends Component<NameCardProp> {

    constructor(props: any) {
        super(props);
    }

    render() {
    
        return (
            <Card>
                <CardInner>
                    <CardFront>
                        {/* <CardFlip>flip</CardFlip> */}
                        <h2 className="ar-name">{this.props.arabic}</h2>
                        <h2 className="en-name">{this.props.english}</h2>
                        <span className="meaning">{this.props.meaning}</span>
                    </CardFront>
                    <CardBack>
                        {this.props.references}
                    </CardBack>
                </CardInner>
            </Card>

        )
    }
}

export default NameCard
