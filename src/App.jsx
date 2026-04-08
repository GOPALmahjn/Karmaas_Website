const products = [
  {
    name: 'Karmaas Indigo Powder',
    price: '₹229',
    image: 'https://m.media-amazon.com/images/I/618PT2bLcZL._SY355_.jpg',
    description: '100% natural and organic indigo powder hair colour — chemical free, vegan, and ideal for healthy shiny hair.',
    url: 'https://www.amazon.in/Karmaas-Natural-Organic-Chemical-Healthy/dp/B0FLW3K27G',
    rating: 4.7,
    badge: 'Popular',
  },
  {
    name: 'Karmaas Rosemary + Rice Water Spray',
    price: '₹296.66',
    image: 'https://m.media-amazon.com/images/I/711hR2ngmGL._SY355_.jpg',
    description: 'Natural hair strengthening and growth booster spray with rosemary and rice water for fuller, healthier hair.',
    url: 'https://www.amazon.in/Karmaas-Rosemary-Water-Growth-Spray/dp/B0FR3Q597M',
    rating: 4.8,
    badge: 'Best Seller',
  },
  {
    name: 'Karmaas Dual-Sided Neem Wood Comb',
    price: '₹155',
    image: 'https://m.media-amazon.com/images/I/71a6VlO8dvL._SY355_.jpg',
    description: 'Handcrafted dual-sided neem wood comb for anti-dandruff, hair fall control, and gentle detangling.',
    url: 'https://www.amazon.in/Karmaas-Dual-Sided-Anti-Dandruff-Hairfall-Handcrafted/dp/B0FDMVHRYP',
    rating: 4.6,
    badge: null,
  },
  {
    name: 'Karmaas Amla Powder',
    price: '₹235',
    image: 'https://m.media-amazon.com/images/I/611rEC+Ez-L._SY450_.jpg',
    description: '100% natural organic amla powder rich in vitamin C for hair growth, glowing skin, and digestion support.',
    url: 'https://www.amazon.in/Karmaas-Natural-Organic-Vitamin-Digestion/dp/B0FK4W8BF8',
    rating: 4.7,
    badge: 'Popular',
  },
  {
    name: 'Karmaas Moringa Leaf Powder',
    price: '₹229',
    image: 'https://m.media-amazon.com/images/I/6138h9G8WTL._SY450_.jpg',
    description: 'Pure moringa superfood powder for immunity, energy, and antioxidant support — perfect for smoothies and wellness routines.',
    url: 'https://www.amazon.in/Karmaas-Organic-Antioxidants-Immunity-Superfood/dp/B0FL1C3KYP',
    rating: 3.4,
    badge: null,
  },
  {
    name: 'Karmaas Premium Multani Mitti Powder',
    price: '₹165',
    image: 'https://m.media-amazon.com/images/I/61ZCQp3wQqL._SY355_.jpg',
    description: '100% natural fuller earth powder for face and hair — brightening, cleansing, and nourishing skin naturally.',
    url: 'https://www.amazon.in/Karmaas-Premium-Multani-Natural-Organic/dp/B0FFT156TD',
    rating: 4.5,
    badge: 'Best Seller',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Karmaas
            </a>
            <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
              Curated essentials for a balanced lifestyle, designed to feel elevated every day.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300 sm:text-base">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <main>
          <section
            id="home"
            className="relative grid items-center gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-slate-950/70" />

            <div className="relative z-10 space-y-6">
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-500 ring-1 ring-brand-500/20">
                Modern essentials
              </p>
              <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
                Welcome to Karmaas — beauty, body, and calm curated in one place.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Elevated everyday essentials for modern living.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                >
                  Explore products
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-transparent" />
              <div className="relative flex h-full flex-col justify-between gap-6 rounded-[1.75rem] bg-slate-900/80 p-6 sm:p-8">
                <div className="rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-transparent p-6 shadow-lg shadow-black/10">
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-500">New season</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Elevated self-care for every ritual.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Fresh textures, warm scents, and a stylish collection made to live beautifully in your home.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">100% clean</p>
                    <p className="mt-4 text-xl font-semibold text-white">Sustainably sourced</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-slate-900/90">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Premium feel</p>
                    <p className="mt-4 text-xl font-semibold text-white">Designed to impress</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="grid gap-12 py-16 items-center md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">About Karmaas</p>
              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
                Karmaas is a modern <span className="text-brand-400">self-care brand</span> designed for people who value <span className="text-brand-400">simplicity, quality,</span> and <span className="text-brand-400">everyday elegance</span>.
              </h2>
              <p className="text-base leading-7 text-slate-300">
                We believe that <span className="font-semibold text-white">self-care</span> should feel effortless and <span className="font-semibold text-white">intentional</span>. Every product is crafted with <span className="font-semibold text-white">natural ingredients</span>, thoughtful sourcing, and a commitment to <span className="font-semibold text-white">sustainability</span>. From hair care to skin wellness, Karmaas transforms your daily routine into moments of <span className="font-semibold text-white">calm and confidence</span>.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-brand-500/10 border border-brand-500/20 p-5 text-slate-300 ring-1 ring-brand-500/30 transition hover:bg-brand-500/15">
                  <p className="text-lg font-bold text-brand-300">✓ 100% Natural</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Pure, organic formulas with no harmful additives.</p>
                </div>
                <div className="rounded-3xl bg-brand-500/10 border border-brand-500/20 p-5 text-slate-300 ring-1 ring-brand-500/30 transition hover:bg-brand-500/15">
                  <p className="text-lg font-bold text-brand-300">✓ Eco-Conscious</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Sustainable sourcing and planet-friendly packaging.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80"
                alt="Karmaas self-care products"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </section>

          <section id="features" className="py-16">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-brand-500/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-3xl">
                  ✨
                </div>
                <h3 className="text-lg font-semibold text-white">100% Clean</h3>
                <p className="text-sm leading-6 text-slate-400">
                  No chemicals, additives, or harmful ingredients — pure natural formulas
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-300">
                  ✔ Verified
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-brand-500/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-3xl">
                  🌱
                </div>
                <h3 className="text-lg font-semibold text-white">Sustainable</h3>
                <p className="text-sm leading-6 text-slate-400">
                  Eco-friendly sourcing and packaging — caring for planet and people
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-300">
                  ✔ Certified
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-brand-500/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-3xl">
                  💎
                </div>
                <h3 className="text-lg font-semibold text-white">Premium Quality</h3>
                <p className="text-sm leading-6 text-slate-400">
                  Hand-selected, tested, and crafted with highest standards
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-300">
                  ✔ Premium
                </span>
              </div>

              <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-brand-500/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 text-3xl">
                  👥
                </div>
                <h3 className="text-lg font-semibold text-white">Trusted by Customers</h3>
                <p className="text-sm leading-6 text-slate-400">
                  Loved by thousands with 4.7+ avg rating and proven results
                </p>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-300">
                  ✔ Proven
                </span>
              </div>
            </div>
          </section>

          <section id="why-choose" className="py-16">
            <div className="max-w-3xl space-y-4 mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">Why Choose Karmaas</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">The Karmaas Difference</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Transparency, purity, and real results. Here's why thousands trust Karmaas for their daily wellness.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  🌿
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Clean Ingredients</h3>
                <p className="text-base leading-7 text-slate-300">
                  100% natural, organic, and plant-based formulas. Every ingredient is thoughtfully sourced to deliver maximum benefit without compromise.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ Organic certified</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Cold-pressed extracts</p>
                  <p className="text-sm font-semibold text-brand-300">✓ No fillers or additives</p>
                </div>
              </div>

              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  ⚛️
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">No Chemicals</h3>
                <p className="text-base leading-7 text-slate-300">
                  Zero synthetic additives, parabens, sulfates, or harmful preservatives. Pure nature in every jar.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ Paraben-free</p>
                  <p className="text-sm font-semibold text-brand-300">✓ No sulfates or silicones</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Dermatologist approved</p>
                </div>
              </div>

              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  ⭐
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Trusted Results</h3>
                <p className="text-base leading-7 text-slate-300">
                  Proven formulas backed by thousands of satisfied customers and 4.7+ average ratings across platforms.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ 4.7+ star rating</p>
                  <p className="text-sm font-semibold text-brand-300">✓ 10,000+ happy customers</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Money-back guarantee</p>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="space-y-8 py-16">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">Featured products</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Shop the collection</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Six curated herbal essentials designed for daily luxury and calm confidence.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/90 shadow-lg transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-500/20 hover:border-brand-500/50"
                >
                  {product.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                        ⭐ {product.badge}
                      </span>
                    </div>
                  )}

                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white leading-snug">{product.name}</h3>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-500'}>
                                ⭐
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-medium text-slate-400">{product.rating}</span>
                        </div>
                      </div>
                      <span className="rounded-lg bg-brand-500/20 px-3 py-2 text-sm font-bold text-brand-300 border border-brand-500/30">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-slate-400">{product.description}</p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-brand-500/50 hover:-translate-y-1 active:scale-95"
                    >
                      🛍️ View on Amazon
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="why-choose" className="py-16">
            <div className="max-w-3xl space-y-4 mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">Why Choose Karmaas</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">The Karmaas Difference</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Transparency, purity, and real results. Here's why thousands trust Karmaas for their daily wellness.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  🌿
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Clean Ingredients</h3>
                <p className="text-base leading-7 text-slate-300">
                  100% natural, organic, and plant-based formulas. Every ingredient is thoughtfully sourced to deliver maximum benefit without compromise.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ Organic certified</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Cold-pressed extracts</p>
                  <p className="text-sm font-semibold text-brand-300">✓ No fillers or additives</p>
                </div>
              </div>

              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  ⚛️
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">No Chemicals</h3>
                <p className="text-base leading-7 text-slate-300">
                  Zero synthetic additives, parabens, sulfates, or harmful preservatives. Pure nature in every jar.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ Paraben-free</p>
                  <p className="text-sm font-semibold text-brand-300">✓ No sulfates or silicones</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Dermatologist approved</p>
                </div>
              </div>

              <div className="group rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-8 transition duration-300 hover:border-brand-500/50 hover:bg-gradient-to-br hover:from-slate-800/60 hover:to-slate-900/80 hover:shadow-2xl hover:shadow-brand-500/20">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-500/20 text-4xl mb-4 group-hover:bg-brand-500/30 transition">
                  ⭐
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Trusted Results</h3>
                <p className="text-base leading-7 text-slate-300">
                  Proven formulas backed by thousands of satisfied customers and 4.7+ average ratings across platforms.
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm font-semibold text-brand-300">✓ 4.7+ star rating</p>
                  <p className="text-sm font-semibold text-brand-300">✓ 10,000+ happy customers</p>
                  <p className="text-sm font-semibold text-brand-300">✓ Money-back guarantee</p>
                </div>
              </div>
            </div>
          </section>

          <section id="how-to-use" className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/80 p-10 sm:p-12 py-16">
            <div className="max-w-3xl space-y-4 mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">How to Use</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Simple Steps for Maximum Benefits</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Especially designed for our powder collection. Follow these easy methods to get the best results.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">1</div>
                <h3 className="text-xl font-semibold text-white">Measure</h3>
                <p className="text-base leading-6 text-slate-300">
                  Take 1-2 teaspoons of powder. For <span className="font-semibold text-brand-300">Indigo & Amla</span>, adjust based on hair length and thickness.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">2</div>
                <h3 className="text-xl font-semibold text-white">Mix</h3>
                <p className="text-base leading-6 text-slate-300">
                  Add water or yogurt to the powder to form a smooth, consistent paste. No lumps — smooth application is key.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">3</div>
                <h3 className="text-xl font-semibold text-white">Apply</h3>
                <p className="text-base leading-6 text-slate-300">
                  Apply to hair roots or face (for <span className="font-semibold text-brand-300">Multani Mitti</span>). Section by section for even coverage.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">4</div>
                <h3 className="text-xl font-semibold text-white">Wait</h3>
                <p className="text-base leading-6 text-slate-300">
                  Let it sit for <span className="font-semibold text-brand-300">20-30 minutes</span> for hair treatments. For face masks, <span className="font-semibold text-brand-300">10-15 minutes</span>.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">5</div>
                <h3 className="text-xl font-semibold text-white">Rinse</h3>
                <p className="text-base leading-6 text-slate-300">
                  Rinse with lukewarm water until all powder is completely removed. Use a gentle shampoo if needed.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 text-2xl font-bold text-brand-300">6</div>
                <h3 className="text-xl font-semibold text-white">Hydrate</h3>
                <p className="text-base leading-6 text-slate-300">
                  Follow with conditioner or face moisturizer. Use <span className="font-semibold text-brand-300">2-3 times weekly</span> for best results.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 p-8 ring-1 ring-brand-500/30">
              <h3 className="text-lg font-semibold text-brand-300 mb-4">💡 Pro Tips</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-brand-400">✓</span>
                  <span><span className="font-semibold text-white">Indigo Powder:</span> Mix with hibiscus powder for enhanced shine and deeper color.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400">✓</span>
                  <span><span className="font-semibold text-white">Amla Powder:</span> Combine with coconut oil for extra nourishment and reduced itching.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400">✓</span>
                  <span><span className="font-semibold text-white">Moringa Powder:</span> Add to smoothies, teas, or water for daily wellness.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400">✓</span>
                  <span><span className="font-semibold text-white">Multani Mitti:</span> Best used once a week to avoid over-drying skin.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="reviews" className="space-y-8 py-16">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-brand-500">Customer reviews</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">Loved by people who trust natural care.</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                Real feedback from customers who rely on Karmaas formulas for hair, skin, and everyday wellness.
              </p>
            </div>

            <style>{`
              @keyframes scroll-reviews {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .review-carousel {
                animation: scroll-reviews 40s linear infinite;
              }
              .review-carousel:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="overflow-hidden">
              <div className="review-carousel flex gap-6 pb-4">
                {[
                  {
                    name: 'Aarti K.',
                    status: 'Verified Buyer',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                    review: 'The Indigo Powder gave my hair rich shine without any harsh chemicals. Packaging is premium and the texture is smooth.',
                    rating: 5
                  },
                  {
                    name: 'Rohan S.',
                    status: 'Happy Customer',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                    review: 'The Moringa Leaf Powder is now a daily staple. It blends easily and gives noticeable energy and skin benefits.',
                    rating: 5
                  },
                  {
                    name: 'Sneha P.',
                    status: 'Repeat Buyer',
                    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
                    review: 'Karmaas Amla Powder has become my favorite for glowing skin and stronger hair. The scent and quality feel authentic.',
                    rating: 5
                  },
                  {
                    name: 'Priya M.',
                    status: 'Verified Buyer',
                    image: 'https://images.unsplash.com/photo-1517841905240-74386c5402b9?auto=format&fit=crop&w=150&q=80',
                    review: 'The Neem Wood Comb is gentle on my scalp and my hair feels stronger. Best eco-friendly choice ever!',
                    rating: 4
                  },
                  {
                    name: 'Dev T.',
                    status: 'Happy Customer',
                    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                    review: 'Organic products at reasonable prices. The Rosemary Spray has made a real difference in my hair growth journey.',
                    rating: 5
                  }
                ].concat([
                  {
                    name: 'Aarti K.',
                    status: 'Verified Buyer',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
                    review: 'The Indigo Powder gave my hair rich shine without any harsh chemicals. Packaging is premium and the texture is smooth.',
                    rating: 5
                  },
                  {
                    name: 'Rohan S.',
                    status: 'Happy Customer',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                    review: 'The Moringa Leaf Powder is now a daily staple. It blends easily and gives noticeable energy and skin benefits.',
                    rating: 5
                  }
                ]).map((review, idx) => (
                  <article key={idx} className="min-w-[350px] flex-shrink-0 rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 text-slate-300 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-500/30">
                    <div className="flex items-center gap-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-500/30"
                      />
                      <div>
                        <p className="text-base font-semibold text-white">{review.name}</p>
                        <p className="text-sm text-slate-400">{review.status}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-slate-600'}>★</span>
                      ))}
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-300">
                      "{review.review}"
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft sm:p-10">
            <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-500">Contact</p>
                  <h2 className="mt-3 text-4xl font-semibold text-white">Start your next order or ask a question.</h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                    Share your needs and we&apos;ll follow up with styling suggestions, delivery details, or product advice.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="https://wa.me/918800000000?text=Hi%20Karmaas%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/50 hover:scale-105 active:scale-95"
                  >
                    📱 WhatsApp
                  </a>
                  <a
                    href="mailto:hello@karmaas.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/5 px-6 py-3 text-sm font-semibold text-brand-400 transition duration-300 hover:border-brand-500/60 hover:bg-brand-500/15 hover:shadow-lg hover:shadow-brand-500/30 hover:scale-105 active:scale-95"
                  >
                    ✉️ hello@karmaas.com
                  </a>
                </div>
              </div>

              <form className="space-y-5 rounded-[1.75rem] bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-slate-300">
                    Name
                    <input type="text" placeholder="First name" className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm text-slate-300">
                    Email
                    <input type="email" placeholder="you@example.com" className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Message
                  <textarea rows="5" placeholder="Tell us about your request" className="min-h-[160px] rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"></textarea>
                </label>
                <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-brand-500/50 hover:scale-105 active:scale-95">
                  Send message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
