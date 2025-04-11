
export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Panel użytkownika – CleanDoc Pro</h1>
      <ul className="space-y-3">
        <li className="bg-white p-4 rounded shadow">Pomieszczenia, urządzenia, akcesoria</li>
        <li className="bg-white p-4 rounded shadow">Instrukcje mycia i dezynfekcji</li>
        <li className="bg-white p-4 rounded shadow">Plan higieny i harmonogramy</li>
        <li className="bg-white p-4 rounded shadow">Księga higieny (PDF)</li>
        <li className="bg-white p-4 rounded shadow">Konsultant: zarządzanie firmami</li>
      </ul>
    </div>
  );
}
