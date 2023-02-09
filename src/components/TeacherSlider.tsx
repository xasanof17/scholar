import Slider from "react-slick";
import React from "react";

interface Props {
  teachers: Teacher[];
}

const TeacherSlider = ({ teachers }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="rounded-none border-y-2 border-r-2 border-gray-200 bg-transparent"
          >
            <div className="flex flex-col items-start justify-center bg-yellow">
              <div className="h-[350px] w-full">{teacher.name}</div>
            </div>
            <div className="p-5">{teacher.name}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeacherSlider;
