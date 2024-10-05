import React, { useState } from 'react';
import './AgentCard.css';

interface imgDimensions {
    src: string;
    alt: string;
    className: string
}

interface nameCardDimensions {
    name: string;
    className: string
}

function ImgCard({ src, alt, className }: imgDimensions) {
    const imgStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: 'auto',
    };

    return <img style={imgStyle} src={src} alt={alt} className={className} />;
}

function NameCard({ name, className }: nameCardDimensions) {
    const nameCardStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center', //for the text
        alignItems: 'center',

        width: '100%',
        aspectRatio: 6.5,
        backgroundColor: 'gray',

        position: 'relative', //siblings are positioned next to each other only when they are
        //both relatively positioned, so normal doc flow, if one is absolute its taken out of doc flow

        fontWeight: '800',
        fontSize: '1rem',
        overflowWrap: 'break-word',
        wordBreak: 'break-all'
    };

    return <div style={nameCardStyle} className={className}><span style={{ padding: '0.5rem' }}>{name}</span></div>
}

export interface AgentCardParams {
    imageSrc: string,
    imgAlt: string,
    nameCardName: string
}

function AgentCard(params: AgentCardParams) {

    const sibling = 'child'


    return (<div className='myAgentCardContainer' >
        <ImgCard src={params.imageSrc} alt={params.imgAlt} className={sibling} />
        <NameCard name={params.nameCardName} className={sibling}></NameCard>
        <a style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1000 }}
            href={`/Agents/${[params.nameCardName]}`}></a>
    </div>);
}


export default AgentCard;
