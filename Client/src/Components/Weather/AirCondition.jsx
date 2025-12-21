const AirConditions = ({ current }) => {
  if (!current) return null;

  const windKmh = (current.wind.speed * 3.6).toFixed(1); // m/s → km/h

  return (
    <div className="bg-[#1b2638] rounded-3xl p-6 mt-5 h-full text-white w-full">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm tracking-widest text-gray-400">
          AIR CONDITIONS
        </h3>
       
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-6">
        
        {/* Real Feel */}
        <div className="flex items-center gap-4">
          <i className="ri-temp-hot-line text-2xl text-gray-400"></i>
          <div>
            <p className="text-sm text-gray-400">Real Feel</p>
            <p className="text-2xl font-semibold">
              {Math.round(current.main.feels_like)}°
            </p>
          </div>
        </div>

        {/* Wind */}
        <div className="flex items-center gap-4">
          <i className="ri-windy-line text-2xl text-gray-400"></i>
          <div>
            <p className="text-sm text-gray-400">Wind</p>
            <p className="text-2xl font-semibold">{windKmh} km/h</p>
          </div>
        </div>

        {/* Chance of Rain */}
        <div className="flex items-center gap-4">
          <i className="ri-drop-line text-2xl text-gray-400"></i>
          <div>
            <p className="text-sm text-gray-400">Chance of rain</p>
            <p className="text-2xl font-semibold">
              {current.clouds.all}%
            </p>
          </div>
        </div>

        {/* UV Index (placeholder) */}
        <div className="flex items-center gap-4">
          <i className="ri-sun-line text-2xl text-gray-400"></i>
          <div>
            <p className="text-sm text-gray-400">UV Index</p>
            <p className="text-2xl font-semibold">3</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AirConditions;