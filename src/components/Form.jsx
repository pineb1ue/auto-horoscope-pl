import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Form.css'
import Result from './Result'

const Form = () => {
    const [formData, setFormData] = useState({
        yyyy: 1997,
        mm: 12,
        dd: 30,
        HH: 23,
        MM: 20,
    })

    const [result, setResult] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:8000/api/v1/horo/sign', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()
            setResult(data.result) // 結果の部分だけセット
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Year"
                        type="number"
                        fullWidth
                        name="yyyy"
                        value={formData.yyyy}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Month"
                        type="number"
                        fullWidth
                        name="mm"
                        value={formData.mm}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Day"
                        type="number"
                        fullWidth
                        name="dd"
                        value={formData.dd}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Hour"
                        type="number"
                        fullWidth
                        name="HH"
                        value={formData.HH}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Minute"
                        type="number"
                        fullWidth
                        name="MM"
                        value={formData.MM}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                </form>
            </div>

            <div>
                <Result result={result} />
            </div>
        </>
    )
}

export default Form
