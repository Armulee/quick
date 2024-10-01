"use client"
import { useState } from "react"

export default function Envelope() {
    const [open, setOpen] = useState(false)
    return (
        <div class='envelope-container'>
            <div
                class={`envelope ${open ? "open" : ""}`}
                onClick={() => {
                    setOpen(true)
                }}
            >
                <div class='flap' />
                <div class='letter'>
                    <b>ถึงยุ่ย ☀️,</b>
                    <p>
                        วันนี้ครบรอบ 7 ปีแหน่ะ 7 ปีเลยนะ มันนานมาก
                        คิดดูว่าถ้าเรามีลูกกันตั้งแต่คบเลยอะ ลูกเรา ป.1 แล้วนะ
                        🚌
                    </p>
                    <p>
                        เราผ่านเรื่องอะไรมาเยอะมาก ตัวเค้าเองก็เติบโตขึ้น
                        อ้วนเองก็ด้วย ต่างคนต่างเจอหลากล้านพันเรื่อง
                        เค้าขอโทษที่ทำตัวเปลี่ยนไป ขอโทษที่ตอนนั้นทำให้เจ็บปวด
                        🙏
                    </p>
                    <p>
                        แต่เราขอบคุณจริงๆ
                        มันเป็นเพราะยุ่ยไม่ทิ้งเราและเราก็ไม่ทิ้งยุ่ย
                        เพราะว่ายุ่ยดีที่สุดสำหรับเราแหละ 😁
                    </p>
                </div>
            </div>
        </div>
    )
}
