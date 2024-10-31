import React from 'react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">价格方案</h2>
        <p className="text-xl text-gray-600 text-center mb-16">为不同需求的用户提供灵活的选择</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">标准版</h3>
            <div className="text-3xl font-bold mb-4">¥1999</div>
            <ul className="space-y-3 mb-8">
              <li>• 95+语言翻译</li>
              <li>• 24小时续航</li>
              <li>• 主动降噪</li>
              <li>• 1年质保</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              立即购买
            </button>
          </div>
          
          <div className="bg-indigo-600 p-8 rounded-xl shadow-md hover:shadow-lg transition relative">
            <div className="absolute -top-4 right-4 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full">
              最受欢迎
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">专业版</h3>
            <div className="text-3xl font-bold mb-4 text-white">¥2499</div>
            <ul className="space-y-3 mb-8 text-white">
              <li>• 标准版全部功能</li>
              <li>• 离线翻译</li>
              <li>• 专业音质</li>
              <li>• 2年质保</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">
              立即购买
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4">商务版</h3>
            <div className="text-3xl font-bold mb-4">¥2999</div>
            <ul className="space-y-3 mb-8">
              <li>• 专业版全部功能</li>
              <li>• 优先客服</li>
              <li>• 商务定制</li>
              <li>• 3年质保</li>
            </ul>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
              立即购买
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}