import React from 'react';
import { Palette, Shield, Zap, Heart } from 'lucide-react';

export default function DesignSection() {
  const designs = [
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: "优雅美学",
      description: "采用航空级铝合金材质，轻盈优雅。人体工学设计，佩戴舒适。获2024年红点设计大奖。"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "安全可靠",
      description: "IPX5防水，军工级跌落保护。独立安全芯片，确保隐私安全。"
    },
    {
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: "极速响应",
      description: "0.2秒翻译响应，业界最快。双核处理器，多任务并行。"
    },
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: "持久续航",
      description: "石墨烯电池，单次充电24小时续航。超级快充，15分钟可用8小时。"
    }
  ];

  return (
    <section id="design" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">匠心设计，极致体验</h2>
        <p className="text-xl text-gray-600 text-center mb-16">每一处细节，都是为了带给您更好的使用体验</p>
        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              {item.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}