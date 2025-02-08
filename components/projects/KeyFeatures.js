import {
  FeatureWrapper,
  Title,
  Description,
  Container,
  ImageWrapper,
} from "@/styles/KeyFeaturesStyle";
import Image from "next/image";
export default function KeyFeatures({ project }) {
  return (
    <div>
      <Container>
        {project.keyfeatures?.map((el, index) => (
          <FeatureWrapper key={index}>
            <ImageWrapper>
              <Image src={el.img} fill style={{ objectFit: "contain" }} />
            </ImageWrapper>
            <Title>{el.title}</Title>
            <Description>{el.description}</Description>
          </FeatureWrapper>
        ))}
      </Container>
    </div>
  );
}
