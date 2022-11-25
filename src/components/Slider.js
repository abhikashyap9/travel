import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={6}
        // centeredSlides={false}
        spaceBetween={10}
        pagination={{
          type: "fraction"
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg' alt='first'/>
         <Typography sx={{marginTop:'10px'}}>India</Typography>
        </SwiperSlide>
        <SwiperSlide> 
              <img src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg' alt='first'/>
              <Typography sx={{marginTop:'10px'}}>India</Typography>
              
            
        </SwiperSlide>
        <SwiperSlide> 
                
             <img src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg' alt='first'/>
             
             <Typography sx={{marginTop:'10px'}}>India</Typography>
        </SwiperSlide>
        <SwiperSlide> 
        <img src='https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg' alt='first'/>
        <Typography sx={{marginTop:'10px'}}>India</Typography>
        </SwiperSlide>
        <SwiperSlide>
         <img src='https://img.freepik.com/free-photo/landscape-shot-beautiful-cholatse-mountains-body-water-khumbu-nepal_181624-24825.jpg?w=1380&t=st=1669309704~exp=1669310304~hmac=d7b3dacd126fccfe9bff242c0b3ccd1b79f02169871ee954887296147ee5b403' alt='first'/>
         <Typography sx={{marginTop:'10px'}}>India</Typography>
         </SwiperSlide>
        <SwiperSlide> 
        <img src='https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?w=1060&t=st=1669309739~exp=1669310339~hmac=46ab44659455173e1c60a61687271d44dbd2bf6712f31afa183285237975054e' alt='first'/><Typography sx={{marginTop:'10px'}}>India</Typography></SwiperSlide>
        <Typography sx={{marginTop:'10px'}}>India</Typography>
        <SwiperSlide>
         <img src='https://img.freepik.com/free-photo/wooden-bridge-koh-nangyuan-island-surat-thani-thailand_335224-1082.jpg?w=996&t=st=1669309783~exp=1669310383~hmac=e64bca75983400fccd42a8ffb42b7f27659d15799f427618b22b5cb3352b90b9' alt='first'/><Typography sx={{marginTop:'10px'}}>India</Typography></SwiperSlide>
         <Typography sx={{marginTop:'10px'}}>India</Typography>
        <SwiperSlide> <img src='https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg' alt='first'/>
        <Typography sx={{marginTop:'10px'}}>India</Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
