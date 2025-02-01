import projectData from "@/data/projects";

export default function Overview({ project }) {
  console.log(project);
  return (
    <div>
      <div>{project.overview.overviewContent}</div>
      <div>아마 사진</div>
    </div>
  );
}
