import projectData from "@/data/projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import { getDisplayName } from "next/dist/shared/lib/utils";
const contentStyle = {
  // margin: 0,
  height: "160px",
  // width: "80%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const tempStyle = {
  width: "100%",
  // backgroundColor: "red",
  minWidth: "0",
};

const temp2 = {
  marginBottom: "50px",
  width: "100%",
  overflowWrap: "break-word",
};

export default function Overview({ project }) {
  console.log(project);
  return (
    <div style={tempStyle}>
      <div style={temp2}>{project.overview.overviewContent}</div>

      <Carousel arrows infinite={false}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
