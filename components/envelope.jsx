"use client"
import Image from "next/image"
import { useState } from "react"
import seal from "../assets/seal.png"

import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"

export default function Envelope() {
    const [open, setOpen] = useState(false)
    const pics = [pic1, pic2, pic3, pic4, pic5]
    return (
        <div className='envelope-container'>
            <div
                className={`envelope ${open ? "open" : ""}`}
                onClick={() => {
                    setOpen(true)
                }}
            >
                <div className='flap' />
                <Image
                    className={`seal ${open ? "open" : ""}`}
                    src={seal}
                    alt=''
                />

                <div className='letter'>
                    <b>ถึงยุ่ย ☀️,</b>
                    <p>
                        วันนี้ครบรอบ 7 ปีแหน่ะ 7 ปีเลยนะ มันนานมาก
                        คิดดูว่าถ้าเรามีลูกกันตั้งแต่คบเลยอะ ลูกเรา ป.1 แล้วนะ
                        🚌
                    </p>
                    <hr />
                    <p>
                        เราผ่านเรื่องอะไรมาเยอะมาก ตัวเค้าเองก็เติบโตขึ้น
                        อ้วนเองก็ด้วย ต่างคนต่างเจอหลากล้านพันเรื่อง
                        เค้าขอโทษที่ทำตัวเปลี่ยนไป ขอโทษที่ตอนนั้นทำให้เจ็บปวด
                        🙏
                    </p>
                    <hr />
                    <p>
                        แต่เราขอบคุณจริงๆ
                        มันเป็นเพราะยุ่ยไม่ทิ้งเราและเราก็ไม่ทิ้งยุ่ย
                        เพราะว่ายุ่ยดีที่สุดสำหรับเราแหละ 😁
                    </p>
                    <hr />
                    <p>
                        คนอื่นน่ะ น่ากลัวมากเลยรู้ไหม?
                        เพราะอะไรถึงน่ากลัวกับเรารู้ไหม
                        เพราะว่ามันไม่ได้มีใครรักเราจริงเลยสักคน
                        ว่าความรักที่แท้จริงหรือความผูกพันกับใครสักคนนึง
                        มันต้องใช้ทั้งเวลา ใช้ทั้งน้ำตา ใช้หยาดเหงื่อมากขนาดไหน
                        🥊
                    </p>
                    <hr />
                    <br />
                    <b>อ้วนอะเป็นคนรักที่ดีที่สุดของเราเลยยย! รักนะ ❤️</b>

                    <Swiper
                        className='my-swiper'
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {pics.map((pic, index) => (
                            <SwiperSlide
                                key={`Picture ${index}`}
                                class='picture'
                            >
                                <Image src={pic} alt={`Picture ${index}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
