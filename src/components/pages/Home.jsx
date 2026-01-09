
function Home({ currentPage, setCurrentPage }) {
  return (
    <div className="bg-white min-h-screen pt-24 px-6">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto text-center py-20" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Shop Smarter with{" "}
          <span className="text-teal-500">Uniflow</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
          Discover quality products, seamless shopping, and a smooth checkout
          experience — all in one place.
        </p>

        <button
          onClick={() => setCurrentPage("Products")}
          className="bg-teal-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-teal-600 transition"
        >
          Check out our store
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-teal-50 py-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-6">

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-teal-500 mb-3">
              Quality Products
            </h3>
            <p className="text-gray-600">
              We curate products that meet high standards of quality and value.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-teal-500 mb-3">
              Smooth Experience
            </h3>
            <p className="text-gray-600">
              From browsing to checkout, everything is designed to be fast and simple.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-teal-500 mb-3">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Your data and payments are handled with care and modern security practices.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
