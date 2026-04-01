import { getAuth } from "firebase/auth";
import CheckoutButton from "./CheckoutButton";
import FormButton from "./FormButton";
import { app } from "@/lib/firebase";


const activeVisitors = [
  { id: 1, name: "John Doe", visiting: "B12", timeIn: "3:45 PM" },
  { id: 2, name: "Mary Smith", visiting: "A05", timeIn: "4:10 PM" },
  { id: 3, name: "Carlos Tan", visiting: "C03", timeIn: "4:55 PM" },
];

export default function Home() {
  const auth = getAuth(app);
const user  =  auth.currentUser




  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-10 mt-2">
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
          {user ? (
            <FormButton>
              New Visitor <span>+</span>
            </FormButton>
          ) : (
            ""
          )}
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Today&rsquo;s visitor
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
                    <CheckoutButton visitor={visitor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="visitors-trend rounded-xl bg-white p-4 shadow md:col-span-2">
            <h2 className="text-sm uppercase tracking-wide text-slate-500">
              Visitors trend
            </h2>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Visitors trend over the last 7 days
            </p>
          </div>

          <div className="incidents rounded-xl bg-white p-4 shadow md:col-span-1">
            <h2 className="text-sm uppercase tracking-wide text-slate-500">
              Incidents
            </h2>
            <p className="mt-2 text-base font-semibold text-slate-900">
              Incidents and alerts
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
