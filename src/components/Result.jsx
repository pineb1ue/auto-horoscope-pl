import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import '../styles/Result.css'

const HoroscopeResult = (props) => {
    const result = props.result

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

    return (
        <>
            <div className="result">
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
        </>
    )
}

export default HoroscopeResult
