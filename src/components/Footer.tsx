import React from 'react';
import { Languages } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Languages className="h-6 w-6" />
            <span className="text-lg font-bold">声译者</span>
          </div>
          <p className="text-gray-400">创新科技，突破语言障碍</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">产品</h4>
          <ul className="space-y-2 text-gray-400">
            <li>设计亮点</li>
            <li>技术规格</li>
            <li>价格方案</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">支持</h4>
          <ul className="space-y-2 text-gray-400">
            <li>购买指南</li>
            <li>售后服务</li>
            <li>常见问题</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">联系我们</h4>
          <ul className="space-y-2 text-gray-400">
            <li>客服热线</li>
            <li>商务合作</li>
            <li>招商加盟</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}