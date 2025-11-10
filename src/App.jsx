import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Plans from './components/Plans'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [plans, setPlans] = useState([
    { name: 'free', price_monthly: 0, features: ['1 strategy', 'Paper trading', 'Community support'] },
    { name: 'pro', price_monthly: 49, features: ['Unlimited strategies', 'Live trading', 'Priority support', 'Webhooks'] },
    { name: 'enterprise', price_monthly: 299, features: ['SLA', 'Dedicated infra', 'Custom integrations'] },
  ])

  useEffect(() => {
    fetch(`${API}/plans`).then(r => r.json()).then(setPlans).catch(() => {})
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <section id="get-started" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Connect, choose, go live</h2>
            <p className="text-gray-600 mb-4">Bring your own broker APIs (crypto, equities, options, forex, futures). Choose a strategy, set risk limits, and let automation handle execution 24/7.</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Multi-asset support across top brokers and exchanges</li>
              <li>• Paper and live trading modes</li>
              <li>• Webhook and signal ingestion</li>
              <li>• Activity logs and performance snapshots</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="/test" className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 font-semibold">Check backend</a>
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-white text-black px-4 py-2 font-semibold border border-gray-200">Explore plans</a>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Broker/Exchange</label>
                <select className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                  <option>alpaca</option>
                  <option>binance</option>
                  <option>bybit</option>
                  <option>kraken</option>
                  <option>oanda</option>
                  <option>ibkr</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input placeholder="API key" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
                <input placeholder="API secret" className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <button type="button" className="rounded-lg bg-black text-white px-4 py-2 font-semibold">Save connection</button>
            </form>
          </div>
        </div>
      </section>
      <Plans plans={plans} />
      <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} AI Hedge SaaS. All rights reserved.</footer>
    </div>
  )
}
