const Card = ({ project }) => (
  <div className="space-y-3">
    <h3 className="text-lg font-bold text-gray-900">📌 {project.title}</h3>
    <p className="text-sm text-gray-600">
       <strong>기간:</strong> {project.duration} | {project.type}
    </p>
    <p className="text-sm text-gray-600">
       <strong>기술 스택:</strong> {project.stack.join(', ')}
    </p>
    <p className="text-sm text-gray-800">
       <strong>설명:</strong> {project.description}
    </p>
    <p className="text-sm text-gray-800">
       <strong>역할:</strong> {project.responsibility}
    </p>
    <p className="text-sm text-gray-800">
      <strong>결과:</strong>
    </p>
    <ul className="list-disc list-inside text-sm text-gray-700">
      {project.outcomes.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
    <p className="text-sm italic text-gray-600"> <strong>개선 제안:</strong> {project.improvement}</p>
    <a href={project.github} target="_blank" className="text-blue-600 hover:underline text-sm">
      🔗 GitHub
    </a>
  </div>
);

export default Card;
