import banner1 from '/src/assets/img/banners/pizza-banner-1.webp';
import banner2 from '/src/assets/img/banners/pizza-banner-2.webp';
import banner3 from '/src/assets/img/banners/pizza-banner-3.webp';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { BannerImage } from '../UI/BannerImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';


type HomeBannerType = {
};

export const HomeBanner: React.FC<HomeBannerType> = ({ }) => {
  const theme = useTheme();

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{
          //@ts-ignore
          '--swiper-theme-color': theme.palette.primary.main,
        }}
      >
        <SwiperSlide>
          <BannerImage component={'img'} src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage component={'img'} src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage component={'img'} src={banner1} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
