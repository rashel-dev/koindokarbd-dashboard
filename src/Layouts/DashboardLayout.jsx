import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router";

function DashboardLayout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", icon: "🏠", path: "/dashboard" },
        { name: "Sales", icon: "🎯", path: "/dashboard/sales" },
        { name: "Add Sales", icon: "🛒", path: "/dashboard/add-sales" },
        { name: "Products", icon: "📦", path: "/dashboard/products" },
        { name: "Categorys", icon: "📁", path: "/dashboard/categorys" },
        { name: "Brand", icon: "🏷️", path: "/dashboard/brand" },
        { name: "Grade", icon: "⭐", path: "/dashboard/grade" },
        { name: "Color", icon: "🎨", path: "/dashboard/color" },
        { name: "Size", icon: "📏", path: "/dashboard/size" },
        { name: "Purchase", icon: "📊", path: "/dashboard/purchase" },
        { name: "Customer", icon: "👥", path: "/dashboard/customer" },
        { name: "Company", icon: "🏢", path: "/dashboard/company" },
        { name: "Users", icon: "👤", path: "/dashboard/users" },
    ];

    return (
        <div className="flex h-screen bg-[#F3F4F8]">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-6">
                        <img src="/logo.png" alt="Logo" className="h-12 w-auto mx-auto" />
                    </div>
                    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const active = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                                        active ? "bg-[#E7F7F2] text-[#00B074] border-l-4 border-[#00B074]" : "text-[#464255] hover:bg-gray-100"
                                    }`}
                                >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-[#f3f4f8] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden mr-4 text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {/* add new sales button */}

                        <button onClick={() => navigate('/dashboard/add-sales')} className="bg-[#00B074] text-white p-2 rounded-md tooltip tooltip-right cursor-pointer" data-tip="add new sales">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-[#464255] font-medium">
                            Hello, <span className="font-bold text-black">Test User</span>
                        </span>
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                            <img src="https://via.placeholder.com/40" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"></div>}
        </div>
    );
}

export default DashboardLayout;
