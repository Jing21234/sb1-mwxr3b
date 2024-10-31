import React from 'react';
import { Languages, ChevronRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <nav className="absolute top-0 w-full z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Languages className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              声译者
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#design" className="text-gray-600 hover:text-indigo-600 transition">设计亮点</a>
            <a href="#compare" className="text-gray-600 hover:text-indigo-600 transition">产品对比</a>
            <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition">价格方案</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            预订优惠
          </button>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              优雅设计，<br/>无界交流
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              突破传统耳机界限，将艺术与科技完美融合，打造专属于您的智能翻译体验。
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition flex items-center">
                限时优惠 ¥1999 <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition">
                了解更多
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80" 
              alt="声译者智能耳机" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 right-10 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-lg font-semibold text-indigo-600">首发优惠</p>
              <p className="text-sm text-gray-600">享12期免息</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}