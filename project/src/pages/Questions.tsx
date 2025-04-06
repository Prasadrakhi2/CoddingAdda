import React, { useState } from 'react';
import { Code2, BookOpen, Users, HelpCircle, CheckCircle2, ArrowLeft, Maximize2, Terminal, Search, Bell, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Problems from './Problems';

function Questions() {
  const [activeTab, setActiveTab] = useState('description');
  const [isSolved, setIsSolved] = useState(false);

  const tabs = [
    { id: 'description', icon: BookOpen, label: 'Description' },
    { id: 'editorial', icon: Code2, label: 'Editorial' },
    { id: 'solutions', icon: Terminal, label: 'Solutions' },
    { id: 'submissions', icon: Users, label: 'Submissions' }
  ];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-gray-200">
      {/* Main Navigation */}
      <div className="bg-[#2d2d2d] border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-8">
         
            </div>

            
          </div>
        </div>
      </div>

      {/* Problem Navigation */}
      <nav className="bg-[#2d2d2d] p-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <Link to="/problem" className="p-2 hover:bg-gray-700 rounded-lg">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold">1. Two Sum</h1>
          <span className="bg-green-600 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
            <CheckCircle2 size={16} />
            Solved
          </span>
          <span className="bg-emerald-900 text-emerald-400 px-3 py-1 rounded-full text-sm">Easy</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
          to="/ide"
            onClick={() => setIsSolved(!isSolved)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Terminal size={18} />
            Solve Challenge
          </Link>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <Maximize2 size={20} />
          </button>
        </div>
      </nav>

      {/* Tabs */}
      <div className="border-b border-gray-700">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-blue-500'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Topics</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Companies</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full text-sm flex items-center gap-1">
              <HelpCircle size={14} />
              Hint
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">
              Given an array of integers <code className="bg-gray-800 px-1 rounded">nums</code> and an integer <code className="bg-gray-800 px-1 rounded">target</code>, return <em>indices of the two numbers such that they add up to</em> <code className="bg-gray-800 px-1 rounded">target</code>.
            </p>
            
            <p className="text-gray-300">
              You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the <em>same</em> element twice.
            </p>

            <p className="text-gray-300">
              You can return the answer in any order.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Example 1:</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2 font-mono">
                <p><span className="text-purple-400">Input:</span> nums = [2,7,11,15], target = 9</p>
                <p><span className="text-purple-400">Output:</span> [0,1]</p>
                <p><span className="text-purple-400">Explanation:</span> Because nums[0] + nums[1] == 9, we return [0, 1].</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Example 2:</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2 font-mono">
                <p><span className="text-purple-400">Input:</span> nums = [3,2,4], target = 6</p>
                <p><span className="text-purple-400">Output:</span> [1,2]</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Example 3:</h3>
              <div className="bg-gray-800 p-4 rounded-lg space-y-2 font-mono">
                <p><span className="text-purple-400">Input:</span> nums = [3,3], target = 6</p>
                <p><span className="text-purple-400">Output:</span> [0,1]</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">Constraints:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><code className="bg-gray-800 px-1 rounded">2 &lt;= nums.length &lt;= 104</code></li>
                <li><code className="bg-gray-800 px-1 rounded">-109 &lt;= nums[i] &lt;= 109</code></li>
                <li><code className="bg-gray-800 px-1 rounded">-109 &lt;= target &lt;= 109</code></li>
                <li><strong>Only one valid answer exists.</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;