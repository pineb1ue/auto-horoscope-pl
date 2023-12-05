import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

const HoroscopeForm = () => {
    const [formData, setFormData] = useState({
        yyyy: 1997,
        mm: 12,
        dd: 30,
        HH: 23,
        MM: 20,
    })

    const [result, setResult] = useState(null)

    const planetNames = ['太陽', '月', '水星', '金星', '火星', '木星', '土星']
    const signNames = [
        '牡羊座',
        '牡牛座',
        '双子座',
        '蟹座',
        '獅子座',
        '乙女座',
        '天秤座',
        '蠍座',
        '射手座',
        '山羊座',
        '水瓶座',
        '魚座',
    ]

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
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Horoscope Form
                    </Typography>
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '20px' }}
                        >
                            Submit
                        </Button>
                    </form>

                    {/* 結果の表示 */}
                    {result && (
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="h6" align="center" gutterBottom>
                                Result:
                            </Typography>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>惑星</TableCell>
                                            <TableCell>星座</TableCell>
                                            <TableCell>説明</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {result.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{planetNames[item.planet_id]}</TableCell>
                                                <TableCell>{signNames[item.sign_id]}</TableCell>
                                                <TableCell>{item.description}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    )}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default HoroscopeForm
