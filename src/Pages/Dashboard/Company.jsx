import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Company = () => {
    const [companies, setCompanies] = useState([]);

    //set title
    useEffect(() => {
        document.title = "Company | Koindokarbd";
    }, []);

    //fetch companies data
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const dummyData = [
                    {
                        id: 1,
                        name: "Walton",
                        phone: "01713750597",
                        email: "giasuddin@gmail.com",
                        address: "Dhaka, Bangladesh",
                        image: null,
                    }
                ];
                setCompanies(dummyData);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
        fetchCompanies();
    }, []);

    return (
        <div className="p-4 bg-white font-sans">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Company list</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your all company from here.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative grow md:grow-0">
                        <input type="text" placeholder="Search.." className="input input-bordered w-full md:w-64 bg-white border-gray-300 focus:border-primary focus:outline-none h-10 rounded-none" />
                    </div>
                    <button className="btn bg-primary hover:bg-[#009663] border-none text-white flex items-center gap-2 h-10 min-h-0 px-4 rounded-sm font-medium">
                        <FaPlus className="text-sm" /> Add new
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-primary text-white border-none">
                            <th className="py-4 px-2 font-bold text-center border-none w-16 text-base"></th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Company</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Phone</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Email</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Address</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company, index) => (
                            <tr key={company.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-2 px-2 text-center font-bold text-gray-800 text-lg">{index + 1}</td>
                                <td className="py-2 px-2">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-white flex items-center justify-center">
                                                {company.image ? (
                                                    <img src={company.image} alt={company.name} className="object-cover" />
                                                ) : (
                                                    <div className="flex items-center justify-center w-full h-full p-2">
                                                        <svg viewBox="0 0 24 24" className="w-full h-full text-gray-400" fill="none" stroke="currentColor" strokeWidth="1">
                                                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                            <circle cx="8.5" cy="8.5" r="1.5" />
                                                            <polyline points="21 15 16 10 5 21" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-gray-800 font-medium">{company.name}</span>
                                    </div>
                                </td>
                                <td className="py-2 px-2 text-gray-800">{company.phone}</td>
                                <td className="py-2 px-2">
                                    <a href={`mailto:${company.email}`} className="text-gray-800 hover:underline">
                                        {company.email}
                                    </a>
                                </td>
                                <td className="py-6 px-4 text-gray-800 text-base whitespace-pre-line">{company.address}</td>
                                <td className="py-6 px-4">
                                    <div className="flex items-center gap-3">
                                        <button className="flex items-center gap-2 bg-[#00bafe] hover:bg-[#00a3e0] text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer shadow-sm">
                                            <FaEdit className="text-xs" /> Edit
                                        </button>
                                        <button className="flex items-center gap-2 bg-[#f85a7e] hover:bg-[#e04a6c] text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer shadow-sm">
                                            <FaTrash className="text-xs" /> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Company;
