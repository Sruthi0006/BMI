import React, { useState } from 'react'
function BMICalculator() {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [category, setCategory] = useState("")

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmi);
            if (bmi < 18.5) {
                setCategory("Under weight")
            }
            else if (bmi >= 18.5 && bmi <= 24.99) {
                setCategory("Normal Weight")
            }
            else if (bmi >= 25.0 && bmi <= 29.99) {
                setCategory("Over Weight")
            }
            else {
                setCategory("Obesity")
            }
        }
    }

    return (
        <>

            <div className='card'>
                <h1>BMI CALCULATOR</h1>
                
                <div className='input-group'>
                    <label>Weight (Kg)</label>
                    <input type="text" value={weight} placeholder='Enter your Weight' onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label>Height (Cm)</label>
                    <input type="text" value={height} placeholder='Enter your Height' onChange={(e) => setHeight(e.target.value)} />
                </div>
                <button className=' btn btn-success' onClick={calculateBMI}>Calculate</button>
                {
                    bmi && (
                        <div className='result'>
                            <h2>Your BMI Is :  {bmi}</h2>
                            <h3>Category :  {category}</h3>

                        </div>
                    )
                }
            </div>
        </>
    )
}

export default BMICalculator
