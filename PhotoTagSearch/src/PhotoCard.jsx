import React from 'react'
import './PhotoCard.css'

//This component displays a photo and its tags
//Do not change any code in this component
const PhotoCard = ({url, tags }) => {
    return (
        <div className='photo'>
            <img src={url} alt={tags} height={100} />
            <p>
                Tags: {tags.map(tag => tag.tag).join(" ")}
            </p>
        </div>
    )
}

export default PhotoCard;