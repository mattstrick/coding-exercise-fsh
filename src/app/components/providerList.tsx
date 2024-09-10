import ProviderCard from "./providerCard";

const MOCK_DATA = [
  {
    id: 1,
    img: "/joni_mitchell.jpg",
    alt: "Joni Mitchell",
    name: "Joni Mitchell",
    specialties: [
      "Weight Loss",
      "Certified Diabetes Instructor",
      "Running",
      "Intuitive Eating",
    ],
    times: ["12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"],
  },
  {
    id: 2,
    img: "/joni_mitchell.jpg",
    alt: "Joni Mitchell",
    name: "Joni Witchell",
    specialties: [
      "Weight Loss",
      "Certified Diabetes Instructor",
      "Running",
      "Intuitive Eating",
    ],
    times: ["12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"],
  },
  {
    id: 3,
    img: "/joni_mitchell.jpg",
    alt: "Joni Mitchell",
    name: "Joni Ditchell",
    specialties: [
      "Weight Loss",
      "Certified Diabetes Instructor",
      "Running",
      "Intuitive Eating",
    ],
    times: ["12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm"],
  },
];

type Props = {
    date: string;
}

export default function ProviderList({date}:Props) {
  return (
    <div>
      {MOCK_DATA.map((provider) => (
        <ProviderCard
          key={provider.id}
          name={provider.name}
          image={provider.img}
          specialties={provider.specialties}
          times={provider.times}
          alt={provider.alt}
          date={date}
        />
      ))}
    </div>
  );
}
