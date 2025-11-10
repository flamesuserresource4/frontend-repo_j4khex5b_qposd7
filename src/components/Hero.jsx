import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col items-start justify-center text-left">
        <p className="text-sm md:text-base text-white/70 mb-3 tracking-wide uppercase">AI-Powered Quant Trading</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl">
          Launch automated strategies across crypto, stocks, options, forex and futures
        </h1>
        <p className="mt-4 md:mt-6 text-white/80 max-w-2xl text-base md:text-lg">
          Connect your broker, pick a strategy, and let the system execute 24/7 with risk controls.
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
          <a href="#get-started" className="inline-flex items-center rounded-lg bg-white text-black px-5 py-3 font-semibold shadow hover:shadow-lg transition">Get started free</a>
          <a href="#pricing" className="inline-flex items-center rounded-lg bg-white/10 text-white px-5 py-3 font-semibold border border-white/20 hover:bg-white/15 transition">See pricing</a>
        </div>
      </div>
    </section>
  )
}
