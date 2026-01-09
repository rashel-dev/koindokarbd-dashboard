import React, { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
const Users = () => {
    const [users, setUsers] = useState([]);

    //set title
    useEffect(() => {
        document.title = "Users | Koindokarbd";
    }, []);

    //fetch users data
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="p-4 bg-white min-h-screen font-sans">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Users list</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage your all users from here.</p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative grow md:grow-0">
                        <input type="text" placeholder="Search.." className="input input-bordered w-full md:w-64 bg-white border-gray-300 focus:border-primary focus:outline-none h-10 rounded-none" />
                    </div>
                    <button
                        className="btn bg-primary hover:bg-[#009663] border-none text-white flex items-center gap-2 h-10 min-h-0 px-4 rounded-sm font-medium"
                    >
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
                            <th className="py-4 px-6 font-bold text-center border-none w-16 text-base"></th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">User</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Email</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Role</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Address</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Join at</th>
                            <th className="py-4 px-4 font-bold text-left border-none text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-6 px-6 text-center font-bold text-gray-800 text-lg">{index + 1}</td>
                                <td className="py-6 px-4">
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-14 h-14 rounded-full border border-gray-300 overflow-hidden bg-white flex items-center justify-center">
                                                {user.avatar ? (
                                                    <img src={user.avatar} alt={user.name} className="object-cover" />
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
                                        <div className="flex flex-col">
                                            <span className="text-gray-800 font-medium text-base">{user.name}</span>
                                            {user.phone && <span className="text-gray-800 text-base">{user.phone}</span>}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-6 px-4">
                                    <a href={`mailto:${user.email}`} className="text-[#00b074] hover:underline font-medium text-base">
                                        {user.email}
                                    </a>
                                </td>
                                <td className="py-6 px-4">
                                    <span
                                        className={`px-4 py-1.5 rounded-none text-sm font-medium inline-block min-w-[80px] text-center ${
                                            user.role === "Admin" ? "bg-[#00bafe] text-white" : "bg-[#00c292] text-white"
                                        }`}
                                    >
                                        {user.role}
                                    </span>
                                </td>
                                <td className="py-6 px-4 text-gray-800 text-base whitespace-pre-line">{user.address}</td>
                                <td className="py-6 px-4 text-gray-800 text-base">{user.joinAt}</td>
                                <td className="py-6 px-4">
                                    {user.isCurrentUser ? (
                                        <span className="text-gray-400 text-base">This you</span>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <button className="flex items-center gap-2 bg-[#00bafe] hover:bg-[#00a3e0] text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer shadow-sm">
                                                <FaEdit className="text-xs" /> Edit
                                            </button>
                                            <button className="flex items-center gap-2 bg-[#f85a7e] hover:bg-[#e04a6c] text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors cursor-pointer shadow-sm">
                                                <FaTrash className="text-xs" /> Delete
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
