import Image from "next/image";

export default function AboutTech({ icons }) {
  return (
    <div>
      {icons.map((icon) => (
        <Image src={icon} width={40} height={40}></Image>
      ))}
    </div>
  );
}
