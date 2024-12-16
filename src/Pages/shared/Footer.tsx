import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between gap-5">
          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:contact@company.com"
                  className="hover:underline"
                >
                  contact@company.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+11234567890" className="hover:underline">
                  +1 (123) 456-7890
                </a>
              </li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Rashedul islam. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
