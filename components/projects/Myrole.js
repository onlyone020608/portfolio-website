import { TechTitle, Line } from "@/styles/MyroleStyles";
export default function Myrole({ project }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div style={{ fontWeight: 300 }}>{project.myrole.summary}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <TechTitle>
          Backend Development
          <Line />
        </TechTitle>
        <div>
          {project.myrole.backend.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <TechTitle>
          Frontend Development
          <Line />
        </TechTitle>
        <div>
          {project.myrole.frontend.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
