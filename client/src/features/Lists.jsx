import React, { useState, useEffect } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Bed, Bath } from "lucide-react";
import LocateIcon from "../assets/Icon-5.png";
import SwitchIcon from "../assets/Icon-3.png";
import ShareIcon from "../assets/Icon-4.png";
import HeartIcon from "../assets/Link.png";

const Lists = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const sortOptions = ["Default", "Rent", "Sale"];
  const propertyFilters = ["Ranch", "Contemporary", "Bungalow", "Duplex", "Flat"];

  const [selectedSort, setSelectedSort] = useState("Default");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = 5;

  const fetchProperties = async (filters = {}) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(
        `https://techstudiointernshipaugust-betahouse.onrender.com/api/property/all-properties${queryParams ? `?${queryParams}` : ""}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setProperties((data.properties || []).slice(0, itemsPerPage * totalPages));
      setCurrentPage(1);
      setError(null);
    } catch (err) {
      setError("Failed to fetch properties.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSortChange = (option) => {
    setSelectedSort(option);
    setIsSortDropdownOpen(false);

    const newPurpose = option === "Default" ? "" : option;
    setSelectedPurpose(newPurpose);
    fetchProperties({
      purpose: newPurpose,
      type: selectedType || undefined,
    });
  };

  const handleTypeFilter = (filter) => {
    const newType = selectedType === filter ? "" : filter;
    setSelectedType(newType);
    fetchProperties({
      purpose: selectedPurpose || undefined,
      type: newType || undefined,
    });
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProperties = properties.slice(startIndex, endIndex);

  if (loading) return <p className="text-center py-10">Loading properties...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <main className="wrapper">
      {/* Filter and Sort Header */}
      <section>
        <div className="relative w-full border-gray-200 bg-white px-4 py-3 flex justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
            >
              <SlidersHorizontal className="w-4 h-4" />
              More Filter
            </button>

            <span className="text-sm hidden md:block text-gray-600">
              Showing {startIndex + 1} – {Math.min(endIndex, properties.length)} of {properties.length} results
            </span>
          </div>

          <div className="relative text-sm text-gray-700">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center gap-1 font-medium hover:text-black"
            >
              Sort by: <span className="text-black">{selectedSort}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSortChange(option)}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                      selectedSort === option ? "bg-gray-100 font-semibold" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Type Filters */}
      <section className="px-4 py-3 bg-white border-t border-gray-200">
        <div className="flex flex-wrap gap-3">
          {propertyFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleTypeFilter(filter)}
              className={`px-3 py-1 rounded border text-sm ${
                selectedType === filter
                  ? "bg-[#3D9970] text-white border-[#3D9970]"
                  : "border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[54px]">
          {paginatedProperties.map((property) => (
            <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                {property.featured && (
                  <span className="absolute top-3 left-3 bg-[#3D9970] text-white text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-[#9e9999b2] text-white px-2 py-1 rounded">
                  For {property.purpose}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-[#444444] text-lg font-semibold">{property.title}</h3>
                <figure className="flex items-center">
                  <img className="p-2" src={LocateIcon} alt="" />
                  <figcaption className="text-[#373737]">{property.location}</figcaption>
                </figure>
                <div className="flex items-center text-sm text-gray-700 gap-4 my-2">
                  <span className="flex items-center gap-1">
                    <Bed /> {property.bedrooms} Bedrooms
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath /> {property.bathrooms} Bathrooms
                  </span>
                </div>
                <div className="font-semibold text-[#373737] text-base pt-2 flex justify-between border-t-gray-200 border-t">
                  {property.price}
                  <figure className="flex gap-2 pr-5">
                    <img src={SwitchIcon} alt="" />
                    <img src={ShareIcon} alt="" />
                    <img src={HeartIcon} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            &#8592;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === index + 1 ? "bg-[#3D9970] text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            &#8594;
          </button>
        </div>
      </section>
    </main>
  );
};

export default Lists;
