import Slider from "react-slick";

interface Props {
  teachers: Teacher[];
}

const TeacherSlider = ({ teachers }: Props) => {
  const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <Slider {...options}>
        {teachers.map((teacher, index) => (
          <div key={index}>{teacher.name}</div>
        ))}
      </Slider>
    </div>
  );
};

export default TeacherSlider;
