import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import styles from '../styles/Home.module.css'

export default function Counter() {
    const [number, setNumber] = useState(3)

    useEffect(() => {
        console.log("Komponen Counter diload..")    
    }, [])

    useEffect(() => {
        console.log("Komponen Counter dirender ulang..")
    }, [number])

    useEffect(() => {
        return () => {
            console.log("Komponen Counter ditinggalkan..")
        }
    }, [])

    return (
        <div>
            <p className={styles.description}>
                Batch {number}
            </p>
            <p>
                <Button type="primary" onClick={() => setNumber(number + 1)}>Join Yuk</Button>
                <Link href="/member">
                    <Button type="link">Go to Member Page</Button>
                </Link>
            </p>
        </div>
    )
}
