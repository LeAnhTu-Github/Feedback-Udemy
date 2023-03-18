import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)


    let average =feedback.reduce((acc,cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0s/, '')
    // Conver so => so thap phan va ap dung cho tat ca cac ki tu khac

    return (
        <div className='feedback-stats'>
        <h3>{feedback.length} Reviews</h3>
        <h3>Average rating: {isNaN(average) ? 0 : average}</h3>
        </div>
    )
}


export default FeedbackStats
