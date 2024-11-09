import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "./lib/utils";
import Logo from "@/assets/Logo.svg";
import { useState } from "react";
import {
  Dollarsign,
  Wallet3,
  Cards,
  Wallets,
  Setting2,
  Sms,
  Personal,
  PresentionChart,
  WalletMinus,
  WalletPlus,
  Dashboard,
} from "./components/icons/icons";
import UserAccount from "@/assets/UserAccount.svg";

const cardItems = [
  {
    title: "Balance",
    value: "$41,210",
    icon: Wallet3,
  },
  {
    title: "Income",
    value: "$41,210",
    icon: Wallets,
  },
  {
    title: "Expenses",
    value: "$41,210",
    icon: Cards,
  },
  {
    title: "Saving",
    value: "$41,210",
    icon: Dollarsign,
  },
];

const navItems: NavItem[] = [
  { name: "Dashboard", icon: Dashboard },
  { name: "Transactions", icon: WalletPlus },
  { name: "Wallet", icon: WalletMinus },
  { name: "Analytics", icon: PresentionChart },
  { name: "Personal", icon: Personal },
  { name: "Message", icon: Sms },
  { name: "Setting", icon: Setting2 },
];

interface NavItem {
  name: string;
  icon: React.ElementType;
}

export default function App() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-[#282C35]">
      {/* Sidebar */}
      <aside className="fixed top-0 bottom-0 left-0 w-64 bg-[#1A1C22] overflow-y-auto">
        <div className="flex items-center justify-between h-16 px-6">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "156.93", height: "36" }}
          />
        </div>
        <nav className="py-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={cn(
                  "w-full flex items-center pl-8 py-4 text-sm rounded-lg relative group font-semibold",
                  "transition-colors duration-150 ease-in-out",
                  activeItem === item.name
                    ? "text-[#1FCB4F]" 
                    : "text-gray-400 hover:text-gray-200" 
                )}
              >
                {activeItem === item.name && (
                  <div
                    className="absolute right-0 top-2 bg-[#FFD700] rounded-l"
                    style={{ width: "6.66px", height: "19.98px" }}
                  />
                )}
                <span
                  className={cn(
                    "h-5 w-5 mr-3 transition-colors duration-150 ease-in-out",
                    activeItem === item.name
                      ? "text-[#1FCB4F]"
                      : "text-gray-400" 
                  )}
                >
                  <item.icon className="w-full h-full" />
                </span>
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden ml-64">
        {/* Header */}
        <header className="flex items-center justify-end h-16 px-6 bg-[#1A1C22] ">
          <h1 className="text-xl font-semibold text-white mr-auto">
            {activeItem}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                className="pl-3 pr-4 py-2 w-64 rounded-md bg-[#282C35] border-none text-[#D1D5DB]"
                placeholder="Search..."
                style={{
                  width: "215px",
                  height: "33.31px",
                  fontSize: "10px",
                  lineHeight: "15px",
                }}
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={15}
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <Button className="pr-4" variant="link" size="icon">
                <Bell className=" text-gray-500 size-5" />
              </Button>
              <img
                src={UserAccount}
                alt="User"
                className="w-[33.5px] h-[33.5px] rounded-sm"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cardItems.map((card, index) => (
              <Card key={index} className="bg-[#1A1C22]">
                <CardContent className="p-6 flex items-center">
                  <div className="rounded-lg bg-white/20 p-3 mr-6 flex items-center justify-center size-10">
                    <card.icon className=" text-green-500 scale-150" />
                  </div>
                  <div className="flex flex-col gap-[6.15px]">
                    <p className="text-xs/[17.5px] font-normal text-[#9E9E9E]">
                      {card.title}
                    </p>
                    <p className="text-3xl/[40px] font-medium text-white">
                      {card.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
