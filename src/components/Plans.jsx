export default function Plans({ plans }) {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-gray-600 text-center mb-10">Start free. Upgrade when you scale live trading.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col">
              <h3 className="text-xl font-semibold capitalize">{p.name}</h3>
              <p className="mt-2"><span className="text-4xl font-bold">${p.price_monthly}</span><span className="text-gray-500">/mo</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>{f}</li>
                ))}
              </ul>
              <button className="mt-6 inline-flex justify-center rounded-lg bg-black text-white px-4 py-2 font-semibold hover:bg-gray-900">Choose {p.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
