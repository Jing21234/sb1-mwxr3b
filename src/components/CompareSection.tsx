import React from 'react';
import { Check, X } from 'lucide-react';

export default function CompareSection() {
  const features = [
    { name: "实时翻译", traditional: false, ours: true },
    { name: "降噪效果", traditional: "一般", ours: "顶级" },
    { name: "续航时间", traditional: "4-6小时", ours: "24小时" },
    { name: "音质表现", traditional: "好", ours: "专业级" },
    { name: "防水等级", traditional: "IPX4", ours: "IPX5" },
    { name: "智能语音", traditional: false, ours: true },
    { name: "离线翻译", traditional: false, ours: true }
  ];

  return (
    <section id="compare" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">为什么选择声译者</h2>
        <p className="text-xl text-gray-600 text-center mb-16">突破传统耳机的局限，带来更多可能</p>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-6 border-b">
            <div className="font-semibold">功能特性</div>
            <div className="font-semibold text-center">传统耳机</div>
            <div className="font-semibold text-center text-indigo-600">声译者</div>
          </div>
          
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b">
              <div>{feature.name}</div>
              <div className="text-center">
                {typeof feature.traditional === 'boolean' ? (
                  feature.traditional ? 
                    <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                ) : (
                  <span className="text-gray-600">{feature.traditional}</span>
                )}
              </div>
              <div className="text-center">
                {typeof feature.ours === 'boolean' ? (
                  feature.ours ? 
                    <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                ) : (
                  <span className="text-indigo-600 font-semibold">{feature.ours}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}