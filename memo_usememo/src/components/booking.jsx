import React, { useEffect, useMemo, useState } from 'react'

export const SeatBooking = () => {
    const [gold, setGold] = useState(0)
    const [premium, setPremium] = useState(0)
    // const [bookedGold, setBookedGold] = useState({available : 100, booked:0})
    // const [bookedPremium, setBookedPremium] = useState({available : 50, booked:0})

    function calculateBookedGold (){
        console.log("calculate gold")
        const cal = {available: 100 - gold, booked: gold}
        return cal
    
    }

     function calculateBookedPremium (){
        console.log("calculate premium")
        // setBookedPremium({available: bookedPremium.available - premium, booked: premium}) 
        const calp = {available: 100 - premium, booked: premium}
        return calp
    }

    // useEffect(()=>{
    //     calculateBookedGold()
    //     calculateBookedPremium()
    // }, [gold, premium])


    const calculateGold = useMemo(
        ()=> calculateBookedGold () , [gold]
    )
    const calculatePremium = useMemo(
        ()=> calculateBookedPremium () , [premium]
    )

  return (
    <div>
        <h1>seat booking</h1>
        <div>
            <p>gold tickets</p>
        <input type='number' onChange={(e)=>setGold(e.target.value)} name='goldTickets' placeholder='enter no of tickets book in gold you need' />
        <p>No of available gold tickets {calculateGold.available}</p>
        <p>No of booked gold tickets {calculateGold.booked}</p>
        </div>
        <div>
            <p>premium tickets</p>
        <input type='number' onChange={(e)=>setPremium(e.target.value)} name='premiumTickets' placeholder='enter no of tickets book in gold you need' />
        <p>No of available premium tickets {calculatePremium.available}</p>
        <p>No of booked premium tickets {calculatePremium.booked}</p>
        </div>
    </div>
  )
}
