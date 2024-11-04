"use client"
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Wallet, Send, Repeat, ChevronRight,
  Signal, Battery, Wifi, ArrowUpRight, ArrowDownRight, Bell,
  LineChart as ChartIcon, CircleDollarSign,
  Gift, Zap, Settings, Menu
} from 'lucide-react';

const AdvancedFintechSimulator = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [animateBackground, setAnimateBackground] = useState(0);
  const [showBalance, setShowBalance] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Chart data
  const chartData = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 1398 },
    { name: 'Wed', value: 9800 },
    { name: 'Thu', value: 3908 },
    { name: 'Fri', value: 4800 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4300 },
  ];

  // Cards data
  const cards = [
    { 
      type: 'Visa', 
      number: '•••• 4582',
      balance: 3240.50,
      color: 'from-purple-500 to-blue-500',
      expiryMonth: '12',
      expiryYear: '24',
      spending: 2100,
      limit: 5000
    },
    { 
      type: 'Mastercard', 
      number: '•••• 6789',
      balance: 5678.90,
      color: 'from-pink-500 to-rose-500',
      expiryMonth: '09',
      expiryYear: '25',
      spending: 3200,
      limit: 8000
    }
  ];

  // Animate background
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateBackground(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const transactions = [
    { name: 'Netflix Subscription', amount: -14.99, type: 'expense', category: 'Entertainment', time: '2:30 PM' },
    { name: 'Salary Deposit', amount: 3200.00, type: 'income', category: 'Salary', time: '9:00 AM' },
    { name: 'Grocery Store', amount: -68.50, type: 'expense', category: 'Food', time: 'Yesterday' },
    { name: 'Investment Return', amount: 125.30, type: 'income', category: 'Investment', time: 'Yesterday' },
  ];

  const renderCardFront = (card:any, index:any ) => (
    <div 
      className={`relative w-full h-48 bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white transform transition-all duration-500
                  ${showCardDetails && selectedCard === index ? 'scale-[0.85]' : 'scale-100'}`}
      onClick={() => {
        setSelectedCard(index);
        setShowCardDetails(true);
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-x-20 -translate-y-20" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-x-20 translate-y-20" />
      
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-80">Current Balance</p>
          <h3 className="text-2xl font-bold mt-1">${card.balance.toLocaleString()}</h3>
        </div>
        <div className="text-3xl font-bold opacity-30">{card.type}</div>
      </div>
      
      <div className="mt-auto">
        <p className="text-lg font-mono mb-2">{card.number}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs opacity-70">Expires</p>
            <p className="font-mono">{card.expiryMonth}/{card.expiryYear}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            {card.type === 'Visa' ? 'V' : 'M'}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSpendingLimitCard = (card :any) => (
    <Card className="p-4 mt-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium">Spending Limit</h4>
        <span className="text-xs text-gray-500">{Math.round((card.spending/card.limit) * 100)}% used</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
          style={{ width: `${(card.spending/card.limit) * 100}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>${card.spending.toLocaleString()}</span>
        <span>${card.limit.toLocaleString()}</span>
      </div>
    </Card>
  );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? '#8B5CF6' : '#3B82F6'
            } 0%, transparent 70%)`,
            width: `${300 + i * 40}px`,
            height: `${300 + i * 40}px`,
            top: `${Math.sin((animateBackground + i * 60) * Math.PI / 180) * 20 + 50}%`,
            left: `${Math.cos((animateBackground + i * 60) * Math.PI / 180) * 20 + 50}%`,
            transform: 'translate(-50%, -50%)',
            animation: `float ${10 + i}s infinite ease-in-out`
          }}
        />
      ))}

      {/* Mobile Frame */}
      <div className="relative w-[375px] h-[750px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-[0_0_40px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition-transform duration-500">
        {/* Screen */}
        <div className="relative w-full h-full bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="absolute top-0 w-full px-8 py-3 flex justify-between items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-md z-10">
            <div className="text-sm font-medium">9:41</div>
            <div className="flex items-center space-x-2">
              <Signal className="w-4 h-4" />
              <Wifi className="w-4 h-4" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Main Content */}
          <div className="h-full pt-12 pb-20 overflow-y-auto">
            {/* Header */}
            <div className="px-6 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Welcome back</p>
                  <h1 className="text-xl font-bold dark:text-white">John Doe</h1>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="relative p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </button>
                <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Cards Carousel */}
            <div className="px-6 overflow-hidden overflow-x-auto  hide-scrollbar">
              <div className="flex space-x-4 py-4">
                {cards.map((card, index) => (
                  <div key={index} className="flex-none w-full">
                    {renderCardFront(card, index)}
                  </div>
                ))}
              </div>
            </div>

            {/* Card Details (if selected) */}
            {showCardDetails && (
              <div className="px-6">
                {renderSpendingLimitCard(cards[selectedCard])}
              </div>
            )}

            {/* Quick Stats */}
            <div className="px-6 py-4">
              <Card className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-4">Weekly Activity</h3>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{
                            background: 'rgba(255, 255, 255, 0.9)',
                            border: 'none',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#8B5CF6" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-4">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Send, label: 'Send', color: 'from-blue-400 to-blue-600' },
                  { icon: Repeat, label: 'Exchange', color: 'from-green-400 to-green-600' },
                  { icon: Gift, label: 'Rewards', color: 'from-amber-400 to-orange-600' },
                  { icon: Zap, label: 'Bills', color: 'from-purple-400 to-pink-600' }
                ].map((action, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center transform transition-all duration-300 hover:scale-110"
                  >
                    <div className={`bg-gradient-to-br ${action.color} p-3 rounded-2xl text-white mb-2 shadow-lg group relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <action.icon className="w-6 h-6 relative z-10" />
                    </div>
                    <span className="text-xs dark:text-gray-300">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent Transactions</h3>
                <button className="text-sm text-purple-600 dark:text-purple-400 flex items-center group">
                  View All 
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div
                    key={index}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-xl transition-colors duration-300 ${
                        tx.type === 'income' 
                          ? 'bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800' 
                          : 'bg-red-100 dark:bg-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-800'
                      }`}>
                        {tx.type === 'income' ? 
                          <ArrowUpRight className={`w-5 h-5 ${
                            tx.type === 'income' ? 
                            'text-green-600 dark:text-green-400' : 
                            'text-red-600 dark:text-red-400'
                        }`} /> :
                        <ArrowDownRight className={`w-5 h-5 ${
                          tx.type === 'income' ? 
                            'text-green-600 dark:text-green-400' : 
                            'text-red-600 dark:text-red-400'
                        }`} />
                      }
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">{tx.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{tx.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      tx.type === 'income' ? 
                        'text-green-600 dark:text-green-400' : 
                        'text-red-600 dark:text-red-400'
                    }`}>
                      {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tx.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full px-6 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md">
          <div className="flex justify-around items-center">
            {[
              { icon: Wallet, label: 'Home', tab: 'home' },
              { icon: ChartIcon, label: 'Stats', tab: 'stats' },
              { icon: CircleDollarSign, label: 'Cards', tab: 'cards' },
              { icon: Settings, label: 'Settings', tab: 'settings' }
            ].map((item, index) => (
              <button
                key={index}
                className={`flex flex-col items-center space-y-1 group ${
                  selectedTab === item.tab ? 
                    'text-purple-600 dark:text-purple-400' : 
                    'text-gray-500 dark:text-gray-400'
                }`}
                onClick={() => setSelectedTab(item.tab)}
              >
                <div className={`p-2 rounded-xl transition-colors duration-300 ${
                  selectedTab === item.tab ?
                    'bg-purple-100 dark:bg-purple-900' :
                    'group-hover:bg-gray-100 dark:group-hover:bg-gray-700'
                }`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default AdvancedFintechSimulator;