import Slider from "react-slick";

interface Props {
  teachers: Teacher[];
}

const TeacherSlider = ({ teachers }: Props) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 5,
  };
  return (
    <div className="slider">
      <Slider {...options}>
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="gap-5 rounded-none border-2 border-gray-200 bg-transparent p-5"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-4">img</div>
              <div className="col-span-7">right</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeacherSlider;
