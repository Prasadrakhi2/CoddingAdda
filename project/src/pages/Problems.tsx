import React, { useState } from 'react';
import { 
  Check, 
  FileCode, 
  Lock, 
  Zap, 
  Trophy, 
  Target, 
  Flame,
  Search,
  Filter,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Problem {
  id: number;
  title: string;
  status: 'completed' | 'locked' | 'available';
  acceptance: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solution?: string;
  category: string;
}

function Problems() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [problems] = useState<Problem[]>([
    {
      id: 1863,
      title: "Sum of All Subset XOR Totals",
      status: "available",
      acceptance: 89.5,
      difficulty: "Easy",
      solution: "#",
      category: "Arrays"
    },
    {
      id: 1,
      title: "Two Sum",
      status: "completed",
      acceptance: 55.3,
      difficulty: "Easy",
      solution: "#",
      category: "Arrays"
    },
    {
      id: 2,
      title: "Add Two Numbers",
      status: "available",
      acceptance: 45.7,
      difficulty: "Medium",
      solution: "#",
      category: "Linked List"
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      status: "available",
      acceptance: 36.5,
      difficulty: "Medium",
      solution: "#",
      category: "Strings"
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      status: "locked",
      acceptance: 43.2,
      difficulty: "Hard",
      solution: "#",
      category: "Arrays"
    },
    {
      id: 5,
      title: "Longest Palindromic Substring",
      status: "available",
      acceptance: 35.5,
      difficulty: "Medium",
      solution: "#",
      category: "Strings"
    }
  ]);

  const stats = {
    solved: problems.filter(p => p.status === 'completed').length,
    total: problems.length,
    streak: 5,
    rank: 12350
  };

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = !selectedDifficulty || problem.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.difficulty-filter')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className=" bg-gradient-to-b from-[#1a1b1e] to-[#141517] text-white">
      {/* Header Section */}
      <div className=" bg-[#25262b] border-b border-gray-700">
        <div className=" max-w-7xl mx-auto py-6 px-8">
          <div className="mt-32 flex items-center justify-between">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Zap className="w-8 h-8 text-yellow-400" />
              CodeMaster
            </h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>Rank: #{stats.rank}</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                <span>{stats.streak} day streak</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-green-400" />
                <span>{stats.solved}/{stats.total} solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* Search and Filter Section */}
        <div className="mb-8 flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search problems..."
              className="w-full bg-[#25262b] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative difficulty-filter">
            <button
              className="flex items-center gap-2 bg-[#25262b] rounded-lg px-4 py-2 border border-gray-700 hover:bg-[#2d2e33] transition-colors"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Filter className="w-5 h-5" />
              <span>{selectedDifficulty || 'Difficulty'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#25262b] rounded-lg border border-gray-700 shadow-lg w-40 z-50">
                <button
                  className={cn(
                    "block w-full text-left px-4 py-2 hover:bg-[#2d2e33] transition-colors",
                    !selectedDifficulty && "bg-[#2d2e33]"
                  )}
                  onClick={() => {
                    setSelectedDifficulty(null);
                    setIsDropdownOpen(false);
                  }}
                >
                  All
                </button>
                {['Easy', 'Medium', 'Hard'].map((diff) => (
                  <button
                    key={diff}
                    className={cn(
                      "block w-full text-left px-4 py-2 hover:bg-[#2d2e33] transition-colors",
                      selectedDifficulty === diff && "bg-[#2d2e33]"
                    )}
                    onClick={() => {
                      setSelectedDifficulty(diff);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Problems Table */}
        <div className="bg-[#25262b] rounded-lg overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 text-gray-400 font-medium">
            <div className="col-span-1">Status</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Solution</div>
            <div className="col-span-1 text-center">Acceptance</div>
            <div className="col-span-2 text-center">Difficulty</div>
          </div>

          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700/50 hover:bg-[#2d2e33] transition-colors group"
            >
              <div className="col-span-1">
                {problem.status === 'completed' && (
                  <Check className="w-5 h-5 text-green-500" />
                )}
                {problem.status === 'locked' && (
                  <Lock className="w-5 h-5 text-gray-500" />
                )}
                {problem.status === 'available' && (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600 group-hover:border-blue-400 transition-colors" />
                )}
              </div>
              <div className="col-span-4">
                <a
                  href="/problem/Question"
                  className={cn(
                    "hover:text-blue-400 transition-colors",
                    problem.status === 'locked' && "text-gray-500"
                  )}
                >
                  {problem.id}. {problem.title}
                </a>
              </div>
              <div className="col-span-2 text-gray-400">
                {problem.category}
              </div>
              <div className="col-span-2">
                {problem.solution && problem.status !== 'locked' && (
                  <a
                    href={problem.solution}
                    className="inline-flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FileCode className="w-4 h-4" />
                    <span>Solution</span>
                  </a>
                )}
              </div>
              <div className="col-span-1 text-center">
                {problem.acceptance.toFixed(1)}%
              </div>
              <div className="col-span-2 text-center">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-sm",
                    problem.difficulty === 'Easy' && "bg-green-500/20 text-green-400",
                    problem.difficulty === 'Medium' && "bg-yellow-500/20 text-yellow-400",
                    problem.difficulty === 'Hard' && "bg-red-500/20 text-red-400"
                  )}
                >
                  {problem.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Problems;