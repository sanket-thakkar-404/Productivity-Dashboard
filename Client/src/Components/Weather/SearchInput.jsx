import React from "react";

const SearchInput = ({city , setCity}) => {
  return (
    <div className="flex w-2/3 p-3 items-center gap-4 bg-[#202c3c] rounded-2xl mb-5 ">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="w-full outline-none  "
      />
      <div>
        <i className="text-xl ri-search-line"></i>
      </div>
    </div>
  );
};

export default SearchInput;
