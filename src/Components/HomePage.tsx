import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-10 gap-8">
        <div className="space-y-6">
          <div className="flex flex-col space-y-6">
            <Link to="/barbell-pad">
              <img
                src="category-barbell-pad.png"
                alt="category-barbell-pad"
                className="border rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <Link to="/ankle-straps">
              <img
                src="category-ankle-straps.png"
                alt="category-ankle-straps"
                className="border rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col space-y-6">
            <Link to="/chalk">
              <img
                src="category-chalk.png"
                alt="category-chalk"
                className="border rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <Link to="/liquid-chalk">
              <img
                src="category-liquid-chalk.png"
                alt="category-liquid-chalk"
                className="border rounded-lg w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
