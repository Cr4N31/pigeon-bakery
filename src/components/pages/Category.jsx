function Category() {
  const categories = [
    {
      id: 1,
      title: "Bathroom Essentials",
      description: "Everyday toilet and bathroom utilities designed for comfort and hygiene.",
    },
    {
      id: 2,
      title: "Smart Bathroom Gadgets",
      description: "Modern gadgets that upgrade your bathroom experience with technology.",
    },
    {
      id: 3,
      title: "Cleaning & Maintenance",
      description: "Tools and accessories to keep your bathroom spotless and fresh.",
    },
  ];

  return (
    <section className="mt-12 bg-white min-h-screen px-6 py-20" data-aos="fade-up">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
          Shop by Category
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore Uniflow’s range of carefully selected toilet utilities and
          modern bathroom gadgets designed for everyday living.
        </p>
      </div>

      {/* Category Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              border 
              border-gray-200 
              rounded-lg 
              p-6 
              hover:shadow-lg 
              transition
              group
            "
          >
            <h2 className="text-xl font-semibold text-teal-500 mb-2 group-hover:underline">
              {category.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {category.description}
            </p>

            <button
              className="
                text-teal-500 
                font-medium
                hover:text-teal-600
                transition
              "
            >
              View products →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
