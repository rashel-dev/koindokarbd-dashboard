import React, { useEffect } from "react";
import { FaPlus, FaPrint, FaFileInvoice, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Sales = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Sales | Koindokarbd";
    }, []);

    return (
        <div className="p-4 md:p-8 bg-white min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Sales list</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your all sales from here.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative grow md:grow-0">
                        <input type="text" placeholder="Search.." className="input input-bordered w-full md:w-72 bg-white border-gray-300 focus:border-primary focus:outline-none h-10" />
                    </div>
                    <button
                        onClick={() => navigate("/dashboard/add-sales")}
                        className="btn bg-primary hover:bg-[#009663] border-none text-white flex items-center gap-2 h-10 min-h-0 px-4 rounded-md font-medium"
                    >
                        <FaPlus className="text-sm" /> Add sales
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto border border-gray-100 rounded-sm">
                <table className="table w-full border-collapse">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-primary text-white">
                            <th className="py-4 px-4 font-semibold text-center border-none first:rounded-tl-sm"></th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Customer</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Total</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Pay</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Due</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Extra</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Payment type</th>
                            <th className="py-4 px-4 font-semibold text-left border-none">Delivery status</th>
                            <th className="py-4 px-4 font-semibold text-left border-none last:rounded-tr-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-6 px-4 text-center font-bold text-gray-700">1</td>
                            <td className="py-6 px-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-800">Name: Walking customer</span>
                                    <span className="text-gray-800">Phone: N/A</span>
                                </div>
                            </td>
                            <td className="py-6 px-4 text-gray-800">450.00 Tk</td>
                            <td className="py-6 px-4 text-gray-800">450.00 Tk</td>
                            <td className="py-6 px-4 text-primary font-medium">Paid</td>
                            <td className="py-6 px-4 text-gray-800">--</td>
                            <td className="py-6 px-4">
                                <span className="bg-secondary text-white px-3 py-1 rounded-sm text-xs font-medium uppercase">Cash</span>
                            </td>
                            <td className="py-6 px-4">
                                <span className="bg-[#ffb000] text-white px-3 py-1 rounded-sm text-xs font-medium uppercase">Pending</span>
                            </td>
                            <td className="py-6 px-4">
                                <div className="flex flex-col gap-2">
                                    <button className="flex items-center gap-2 bg-secondary hover:bg-[#00a3e0] text-white px-3 py-1.5 rounded-sm text-xs font-medium w-28 transition-colors cursor-pointer">
                                        <FaPrint className="text-[10px]" /> Challan
                                    </button>
                                    <button className="flex items-center gap-2 bg-secondary hover:bg-[#00a3e0] text-white px-3 py-1.5 rounded-sm text-xs font-medium w-28 transition-colors cursor-pointer">
                                        <FaFileInvoice className="text-[10px]" /> Invoice
                                    </button>
                                    <button className="flex items-center gap-2 bg-primary hover:bg-[#009663] text-white px-3 py-1.5 rounded-sm text-xs font-medium w-28 transition-colors cursor-pointer">
                                        + Due Collect
                                    </button>
                                    <button className="flex items-center gap-2 bg-[#ffb000] hover:bg-[#e69e00] text-white px-3 py-1.5 rounded-sm text-xs font-medium w-28 transition-colors cursor-pointer">
                                        <FaEdit className="text-[10px]" /> Edit
                                    </button>
                                    <button className="flex items-center gap-2 bg-[#f85a7e] hover:bg-[#e04a6c] text-white px-3 py-1.5 rounded-sm text-xs font-medium w-28 transition-colors cursor-pointer">
                                        <FaTrash className="text-[10px]" /> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sales;
