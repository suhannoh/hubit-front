import { Swiper, SwiperSlide } from "swiper/react";
// 필수 CSS 로드
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay"; 
// 필수 모듈 임포트
import { Autoplay, FreeMode } from "swiper/modules";
import RecruitmentCard from "./RecruitmentCard";
import styles from "./CardSlider.module.css";
export default function CardSlider({ items = [] }) {
  
  const handleDetail = ( item ) => {
    // alert( JSON.stringify(item));
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Swiper
        // [중요] 모듈을 배열에 넣어야 기능이 활성화됩니다!
        modules={[Autoplay, FreeMode]} 
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={items.length >= 6}
        speed={9000}
        // 드래그 및 터치 활성화
        allowTouchMove={true}
        grabCursor={true}
        // freeMode 설정 (객체 방식)
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        // 자동 재생 설정
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.recruitmentId}`} style={{ width: 300}}>
            <article onClick={() => handleDetail(item)} className={styles.card}>
              <RecruitmentCard item={item} cardType={"new"}/>
              <span className={styles.badge}>N</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}