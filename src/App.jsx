import portfolio from './data/portfolio.json';
import Card from './component/Card';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900">
          {portfolio.name} <span className="text-sm text-gray-500">({portfolio.koreanName})</span>
        </h1>
        <p className="mt-1 text-sm text-gray-600 flex justify-center gap-4">
          📧 {portfolio.email} | 📞 {portfolio.phone}
        </p>
        <a href={portfolio.github} className="text-blue-600 hover:underline text-sm">{portfolio.github}</a>
      </header>

      {/* 소개 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4 flex items-center gap-2">
          👋 자기소개
        </h2>
        <p className="text-gray-700">{portfolio.summary}</p>
      </section>

      {/* 프로젝트 경험 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold border-b border-gray-300 pb-2 mb-6 flex items-center gap-2">
          🚀 프로젝트 경험
        </h2>
        <div className="space-y-10">
          {portfolio.projects.map((proj, i) => (
            <Card key={i} project={proj} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
