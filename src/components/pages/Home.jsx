import pigeonText from "../../assets/icons/pig.png"

function Home({ currentPage, setCurrentPage }) {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-7xl flex flex-col justify-center items-center text-center" data-aos="fade-up">
        
        <div className="absolute">
            <img src={pigeonText} className="relative bottom-10 opacity-90"/>
        </div>

        <div className="relative mt-36">
          <p className="text-stone-600 max-w-2xl mx-auto text-lg mt-16 mb-10 leading-relaxed">
            Freshly baked breads, buttery pastries, rich tarts, and cookies made with love — delivered straight from our oven to your table.
            📍Baytown, TX
          </p>

          <button
            onClick={() => setCurrentPage("Products")}
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-400 transition duration-300 shadow-md"
          >
            Explore Our Bakery
          </button>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="bg-amber-50 py-20 mt-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">
              Freshly Baked Daily
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Every loaf, tart, and cookie is baked fresh using quality ingredients to ensure the best taste and texture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">
              Made With Love
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Our recipes are crafted with care to bring warmth, comfort, and sweetness to every bite.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-xl font-semibold text-stone-800 mb-3">
              Easy Ordering
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Browse, add to cart, and checkout smoothly — getting your favorite treats has never been simpler.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
