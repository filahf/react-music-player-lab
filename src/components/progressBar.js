import React from 'react'
import './_player.scss'

function ProgressBar(props) {
    return (
        <div className="progress">
            <div className="filler" style={{ width: `${props.percentage}%` }} />
        </div>
    )
}

export default ProgressBar