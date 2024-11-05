import { motion } from "framer-motion";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar isAuthenticated={true} isAdmin={true} />
      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our mission is to create innovative solutions that empower teams to
          collaborate seamlessly and reach new heights. We are committed to
          delivering excellence in every project.
        </motion.p>
      </section>

      {/* Meet the Team Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member Card */}
          {[
            {
              name: "Alice Johnson",
              role: "CEO",
              bio: "Visionary leader with 15+ years in tech.",
              img: "path/to/alice.jpg",
            },
            {
              name: "Michael Lee",
              role: "CTO",
              bio: "Tech enthusiast leading product innovation.",
              img: "path/to/michael.jpg",
            },
            {
              name: "Sara Kim",
              role: "COO",
              bio: "Operations expert streamlining processes.",
              img: "path/to/sara.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-12 text-center bg-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Founded in 2010, our journey started with a small team of innovators
          passionate about transforming the workspace. Over the years, we’ve
          evolved, driven by a commitment to excellence and a focus on our
          customers’ needs.
        </motion.p>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
