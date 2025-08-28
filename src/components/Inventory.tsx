import React from 'react';
import { Calendar, Gauge, Fuel, Phone } from 'lucide-react';

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  image: string;
  features: string[];
}

const cars: Car[] = [
  {
    id: 1,
    make: 'Honda',
    model: 'Fit',
    year: 2012,
    price: 7499,
    mileage: 106000,
    fuelType: 'Gasoline',
    image: '/src/assets/IMG_9133.jpg',
    features: ['Manual', 'AC', 'Compact Size', 'Great MPG']
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Matrix',
    year: 2004,
    price: 4499,
    mileage: 146000,
    fuelType: 'Gasoline',
    image: '/src/assets/IMG_9131.jpg',
    features: ['Automatic', 'Hatchback', 'Reliable', 'Spacious']
  },
  {
    id: 3,
    make: 'Subaru',
    model: 'XV Crosstrek',
    year: 2013,
    price: 7499,
    mileage: 139000,
    fuelType: 'Gasoline',
    image: '/src/assets/IMG_9132.jpg',
    features: ['AWD', 'Crossover', 'Ground Clearance', 'All Weather']
  }
];

const Inventory: React.FC = () => {
  return (
    <section id="inventory" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Quality Used Cars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our carefully selected inventory of pre-owned vehicles. Each car is 
            thoroughly inspected and comes with our guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${car.price.toLocaleString()}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Gauge className="h-4 w-4" />
                    <span className="text-sm">{car.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span className="text-sm">{car.fuelType}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call for Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Don't see what you're looking for? We get new inventory weekly!
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Contact Us About Special Requests
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inventory;