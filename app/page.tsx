const activeVisitors = [
  { id: 1, name: "John Doe", visiting: "B12", timeIn: "3:45 PM" },
  { id: 2, name: "Mary Smith", visiting: "A05", timeIn: "4:10 PM" },
  { id: 3, name: "Carlos Tan", visiting: "C03", timeIn: "4:55 PM" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10">
      <section className="mx-auto w-full max-w-6xl space-y-6">
        <header className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Guard Dashboard
            </h1>
            <p className="text-sm text-slate-600">
              Register visitors quickly and monitor who is currently inside.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.location.assign("/visitor-form")}
            className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
          >
            New Visitor
          </button>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Today&rsquo;s visitor count
            </p>
            <p className="text-3xl font-semibold text-slate-900">
              {activeVisitors.length}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Currently inside
            </p>
            <p className="text-3xl font-semibold text-slate-900">
              {activeVisitors.length}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Pending check-outs
            </p>
            <p className="text-3xl font-semibold text-slate-900">
              {activeVisitors.length}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Visiting</th>
                <th className="px-6 py-3">Time In</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeVisitors.map((visitor) => (
                <tr key={visitor.id} className="border-t border-slate-200">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {visitor.name}
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    {visitor.visiting}
                  </td>
                  <td className="px-6 py-4 text-slate-700">{visitor.timeIn}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="rounded-md bg-rose-500 px-4 py-2 text-white hover:bg-rose-600"
                      onClick={() => alert(`Checked out ${visitor.name}`)}
                    >
                      Check Out
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
