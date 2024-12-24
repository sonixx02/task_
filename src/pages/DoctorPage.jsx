import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

function DoctorPage() {
  const filters = ["Expertise", "Gender", "Fees", "Languages"];
  const activeFilters = [
    { label: "Hair care", id: 1 },
    { label: "Female", id: 2 },
    { label: "Rs.0-Rs.500", id: 3 },
    { label: "Hindi", id: 4 },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Neha Sharma",
      expertise: "Dermatologist",
      location: "Mumbai",
      fees: "Rs. 300",
      image: "https://via.placeholder.com/150", // Placeholder image
      description: "Experienced Dermatologist specializing in skin and hair care.",
    },
    {
      id: 2,
      name: "Dr. Rajesh Gupta",
      expertise: "Cardiologist",
      location: "Delhi",
      fees: "Rs. 500",
      image: "https://via.placeholder.com/150",
      description: "Expert Cardiologist with a focus on heart health and fitness.",
    },
  ];

  const handleViewProfile = (doctor) => {
    // Save the selected doctor to localStorage
    localStorage.setItem("selectedDoctor", JSON.stringify(doctor));
  };

  return (
    <>
      <div className="bg-primary-light py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>

          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="flex-1">
                <span>Select Location</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>

            <Input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="flex-[2]"
            />

            <Button variant="default" className="px-8 py-3">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 mb-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="hover:border-primary hover:text-primary"
              >
                {filter}
              </Button>
            ))}
            <Button variant="outline" className="hover:border-primary hover:text-primary">
              All filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge key={filter.id} variant="secondary" className="flex items-center gap-2">
                {filter.label}
                <button className="text-gray-500 hover:text-gray-700">✕</button>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border p-4 rounded-md shadow-sm hover:shadow-md transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{doctor.name}</h3>
              <p className="text-gray-500">{doctor.expertise}</p>
              <p className="text-gray-500">{doctor.location}</p>
              <p className="text-gray-700 font-semibold">{doctor.fees}</p>
              <Link
                to={`/doctor/${doctor.id}`}
                className="mt-4 inline-block text-primary hover:underline"
                onClick={() => handleViewProfile(doctor)}
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DoctorPage;
