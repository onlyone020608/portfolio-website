import { TechTitle } from "@/styles/TechstackStyles";
export default function Techstack({ project }) {
  return (
    <div>
      <TechTitle>Backend</TechTitle>
      <div>
        {project.techstack.backend.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      <TechTitle>Frontend</TechTitle>
      <div>
        {project.techstack.frontend.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      <TechTitle>DevOps</TechTitle>
      <div>
        {project.techstack.devops.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
}
