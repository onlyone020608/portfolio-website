import { TechTitle } from "@/styles/MyroleStyles";
export default function Myrole({ project }) {
  return (
    <div>
      <div>{project.myrole.summary}</div>
      <TechTitle>Backend Development</TechTitle>
      <div>
        {project.myrole.backend.map((el) => (
          <div>{el}</div>
        ))}
      </div>
      <TechTitle>Frontend Development</TechTitle>
      <div>
        {project.myrole.frontend.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
}
