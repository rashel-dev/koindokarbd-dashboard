import React, { useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";

const Dashboard = () => {

    useEffect(() => {
        document.title = "Dashboard | Koindokarbd";
    }, []);
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-[#464255]">Dashboard</h1>
                <p className="text-[#A3A3A3] mt-1">Hi, Test User. Welcome back to admin panel!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                {/* Card 1: Total Seles */}
                <div className="bg-primary p-5 text-white relative overflow-hidden flex items-center gap-2 justify-between h-40">
                    <div className="bg-white/20 p-2 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">$</div>
                    <div>
                        <p className="text-xl font-bold">108678.46 Tk</p>
                        <p className="text-sm opacity-90">Total seles</p>
                    </div>
                </div>

                {/* Card 2: Total Payment */}
                <div className="bg-[#ffb86a] p-5 text-white relative overflow-hidden flex items-center gap-2 justify-between h-40">
                    <div className="bg-white/20 p-2 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">$</div>
                    <div>
                        <p className="text-xl font-bold">108678.46 Tk</p>
                        <p className="text-sm opacity-90">Total seles</p>
                    </div>
                </div>

                {/* Card 3: Total Due */}
                <div className="bg-[#ff6467] p-5 text-white relative overflow-hidden flex items-center gap-2 justify-between h-40">
                    <div className="bg-white/20 p-2 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">$</div>
                    <div>
                        <p className="text-xl font-bold">108678.46 Tk</p>
                        <p className="text-sm opacity-90">Total seles</p>
                    </div>
                </div>

                {/* Card 4: Total Purchase */}
                <div className="bg-[#615fff] p-5 text-white relative overflow-hidden flex items-center gap-2 justify-between h-40">
                    <div className="bg-white/20 p-2 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
                        <IoCartOutline />
                    </div>
                    <div>
                        <p className="text-xl font-bold">108678.46 Tk</p>
                        <p className="text-sm opacity-90">Total seles</p>
                    </div>
                </div>

                {/* Card 5: Total Sales (White) */}
                <div className="bg-white p-5 text-black relative overflow-hidden flex items-center gap-2 justify-between h-40">
                    <div className="bg-primary/20 text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">
                        <IoCartOutline />
                    </div>
                    <div>
                        <p className="text-xl font-bold">108678.46 Tk</p>
                        <p className="text-sm opacity-90">Total seles</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
