import { useNavigate } from 'react-router-dom';
import TeamImage from '../assets/images/AboutTeam.jpg';
import Logo from '../assets/images/logo.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white text-gray-800 py-12">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-100 px-5 py-10 rounded-lg shadow-lg mx-auto mb-10">
          <h1 className="flex justify-center items-center text-3xl font-bold text-center text-amber-500 mb-4 text-shadow-2xs text-shadow-gray-600">
            About GadgetNova
            <span className="ml-4">
              <img
                src={Logo}
                alt="logo"
                className=" hidden lg:block w-16 h-16 rounded-full shadow-lg"
              />
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 lg:items-center">
            {/* Left Column */}
            <div className="mb-6 sm:mb-0">
              <img
                src={TeamImage}
                alt="team image"
                className="rounded-lg object-cover w-full h-auto max-w-full max-h-[400px]"
              />
              <p className="mt-4 text-sm sm:text-base">
                <span className="text-lg font-bold text-amber-500">GadgetNova </span>
                is your destination for innovative, everyday tech that blends simplicity with smart design. We curate a premium selection of gadgets that solve real problems — whether you're upgrading your workspace, enhancing your home, or gifting something unforgettable.
              </p>
            </div>

            {/* Right Column */}
            <div className="text-sm sm:text-base p-2 sm:p-4">
              <h2 className="text-lg font-bold text-amber-500 mb-2">What We Stand For</h2>
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-gray-700">Innovation with Purpose:</span> Utility, design, and impact.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Premium Experience:</span> Seamless navigation and secure checkout.
                </li>
                <li>
                  <span className="font-semibold text-gray-700">Smart Living:</span> Tech that enhances everyday life.
                </li>
              </ul>

              <h2 className="text-lg font-bold text-amber-500 mt-6 mb-2">Our Mission</h2>
              <p>
                To deliver high-quality, affordable tech that makes life easier, more efficient, and a little more fun — without compromising on style or performance.
              </p>

              <h2 className="text-lg font-bold text-amber-500 mt-6 mb-2">Why GadgetNova?</h2>
              <ul className="list-decimal ml-4 space-y-1">
                <li>Handpicked gadgets with real-world value</li>
                <li>Fast, secure, and responsive shopping experience</li>
                <li>Trusted by tech enthusiasts and everyday users alike</li>
              </ul>

              <div className="flex justify-center sm:justify-start mt-6">
                <button
                  className="bg-red-500 hover:bg-red-600 shadow-md text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-md"
                  onClick={() => navigate('/products')}
                >
                  Shopping Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
