"use client"

import React, { useState } from 'react';
import { Barbell, SneakerMove, HeadCircuit, Heart, Star, WarningCircle } from '@phosphor-icons/react';

export default function Home() {
  const [selectedRank, setSelectedRank] = useState('S');
  const [selectedCategory, setSelectedCategory] = useState('strength');
  const [viewType, setViewType] = useState('daily');

  const ranks = ['S', 'A', 'B', 'C', 'D', 'E'];

  const categories = {
    strength: {
      icon: 'Dumbbell',
      name: 'Strength',
      color: 'bg-blue-500',
      quests: {
        'S': [
          { title: 'Workout / Gym', goal: '1', metric: 'hour' },
          { title: 'Hit a PR in Any Exercise', goal: '1', metric: 'PR' },
          { title: 'Learn About Each Muscle', goal: '1', metric: 'muscle per day' }
        ],
        'A': [
          { title: 'Pushups', goal: '250', metric: 'reps' },
          { title: 'Pull-ups', goal: '25', metric: 'reps' },
          { title: 'Dips', goal: '100', metric: 'reps' }
        ],
        'B': [
          { title: 'Workout / Gym', goal: '45', metric: 'min' },
          { title: 'Use Proper Form', goal: '5', metric: 'form checks' },
          { title: 'Pull-ups', goal: '15', metric: 'reps' }
        ],
        'C': [
          { title: 'Workout / Gym', goal: '30', metric: 'min' },
          { title: 'Pull-ups', goal: '5', metric: 'reps' },
          { title: 'Squats', goal: '100', metric: 'reps' }
        ],
        'D': [
          { title: 'Pushups', goal: '100', metric: 'reps' },
          { title: 'Plank', goal: '2', metric: 'min' },
          { title: 'Lunges', goal: '50', metric: 'reps' }
        ],
        'E': [
          { title: 'Pushups', goal: '50', metric: 'reps' },
          { title: 'Sit-ups', goal: '50', metric: 'reps' },
          { title: 'Squats', goal: '50', metric: 'reps' }
        ]
      }
    },
    agility: {
      icon: 'SneakerMove',
      name: 'Agility',
      color: 'bg-blue-500',
      quests: {
        'S': [
          { title: 'Run', goal: '10', metric: 'km' },
          { title: 'Jump Squats', goal: '100', metric: 'reps' },
          { title: 'Advanced HIIT', goal: '60', metric: 'min' }
        ],
        'A': [
          { title: 'Run', goal: '8', metric: 'km' },
          { title: 'Sprinting', goal: '15', metric: 'min' },
          { title: 'Shadow Boxing', goal: '3', metric: 'two minute rounds' }
        ],
        'B': [
          { title: 'Run', goal: '5', metric: 'km' },
          { title: 'Sports Session', goal: '20', metric: 'min' },
          { title: 'Box Jumps', goal: '100', metric: 'jumps' }
        ],
        'C': [
          { title: 'Run', goal: '2', metric: 'km' },
          { title: 'HIIT Training', goal: '15', metric: 'min' },
          { title: 'Stair Climbing Training', goal: '15', metric: 'min' }
        ],
        'D': [
          { title: 'Run', goal: '1', metric: 'km' },
          { title: 'Jump Rope', goal: '10', metric: 'min' },
          { title: 'Sprinting', goal: '5', metric: 'min' }
        ],
        'E': [
          { title: 'Walk', goal: '2', metric: 'km' },
          { title: 'Jumping Jacks', goal: '50', metric: 'count' },
          { title: 'Stretch', goal: '5', metric: 'min' }
        ]
      }
    },
    intelligence: {
      icon: 'HeadCircuit',
      name: 'Intelligence',
      color: 'bg-blue-500',
      quests: {
        'S': [
          { title: 'Read', goal: '60', metric: 'pages' },
          { title: 'Technical Writing on Chosen Subject', goal: '1', metric: 'article' },
          { title: 'Skill Advancement', goal: '4', metric: 'hours' }
        ],
        'A': [
          { title: 'Read', goal: '45', metric: 'pages' },
          { title: 'Research Project', goal: '1', metric: 'project' },
          { title: 'Skill Advancement', goal: '2', metric: 'hours' }
        ],
        'B': [
          { title: 'Read', goal: '40', metric: 'pages' },
          { title: 'New Word', goal: '5', metric: 'Words' },
          { title: 'Teach Something', goal: '5', metric: 'min' }
        ],
        'C': [
          { title: 'Read', goal: '30', metric: 'pages' },
          { title: 'Learn a New Skill', goal: '30', metric: 'min' },
          { title: 'Skill Advancement', goal: '30', metric: 'min' }
        ],
        'D': [
          { title: 'Read', goal: '20', metric: 'pages' },
          { title: 'Research a Topic', goal: '10', metric: 'min' },
          { title: 'Online Course', goal: '15', metric: 'min' }
        ],
        'E': [
          { title: 'Read', goal: '10', metric: 'pages' },
          { title: 'New Word', goal: '1', metric: 'word' },
          { title: 'Educational Video', goal: '15', metric: 'min' }
        ]
      }
    },
    vitality: {
      icon: 'Heart',
      name: 'Vitality',
      color: 'bg-blue-500',
      quests: {
        'S': [
          { title: 'Sleep', goal: '9', metric: 'hrs' },
          { title: 'Water', goal: '4', metric: 'L' },
          { title: 'Flow State Meditation', goal: '30', metric: 'min' }
        ],
        'A': [
          { title: 'Sleep', goal: '8.5', metric: 'hrs' },
          { title: 'Water', goal: '3.5', metric: 'L' },
          { title: 'Healthy Eating', goal: '5', metric: 'healthy whole foods' }
        ],
        'B': [
          { title: 'Sleep', goal: '8', metric: 'hrs' },
          { title: 'Water', goal: '3', metric: 'L' },
          { title: 'Wins Sharing', goal: '1', metric: 'win' }
        ],
        'C': [
          { title: 'Sleep', goal: '7.5', metric: 'hrs' },
          { title: 'Water', goal: '2.5', metric: 'L' },
          { title: 'Visualization', goal: '5', metric: 'min' }
        ],
        'D': [
          { title: 'Sleep', goal: '7', metric: 'hrs' },
          { title: 'Water', goal: '2', metric: 'L' },
          { title: 'Healthy Eating', goal: '2', metric: 'healthy whole foods' }
        ],
        'E': [
          { title: 'Sleep', goal: '6', metric: 'hrs' },
          { title: 'Water', goal: '1.5', metric: 'L' },
          { title: 'Meditation', goal: '5', metric: 'min' }
        ]
      }
    }
  };

  const getRankColor = (rank) => {
    const colors = {
      'S': 'from-[#8b5cf6] to-[#6d28d9]',  
      'A': 'from-[#ef4444] to-[#991b1b]', 
      'B': 'from-[#3b82f6] to-[#1d4ed8]',  
      'C': 'from-[#22c55e] to-[#15803d]', 
      'D': 'from-[#FFD700] to-[#FFA500]', 
      'E': 'from-[#6b7280] to-[#374151]'   
    };
    return colors[rank];
  };

  return (
    <div className="max-w-4xl flex flex-col justify-center mx-auto p-6 min-h-screen">
      <div className="mb-8 flex items-center justify-center gap-4">
        <div className="border border-white p-2 hidden md:block">
          <WarningCircle size={50} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white border border-white pt-2 pb-2 pr-8 pl-8">
          WEEKLY QUESTS
        </h1>
      </div>

      {/* Category Selection */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`p-4 rounded-xl transition-all border ${selectedCategory === key
              ? `${cat.color} border-[#3b82f6] bg-opacity-20`
              : 'bg-[rgba(0,153,255,0.1)] border-[rgba(0,153,255,0.3)]'
              }`}
          >
            <div className="flex flex-col items-center gap-2">
              {
                cat.name === 'Strength' ? <Barbell size={32} weight="fill" /> :
                  cat.name === 'Agility' ? <SneakerMove size={32} weight="fill" /> :
                    cat.name === 'Intelligence' ? <HeadCircuit size={32} weight="fill" /> :
                      cat.name === 'Vitality' ? <Heart size={32} weight="fill" /> : ''
              }
              <span className="font-semibold text-white hidden md:block">{cat.name}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 mb-8">
        {ranks.map((rank) => (
          <button
            key={rank}
            onClick={() => setSelectedRank(rank)}
            className={`p-4 rounded-xl transition-all ${selectedRank === rank
              ? `bg-gradient-to-r ${getRankColor(rank)} shadow-lg`
              : 'bg-[rgba(0,153,255,0.1)] border border-[rgba(0,153,255,0.3)]'
              }`}
          >
            <div className="flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{rank}</span>
              {rank === 'S' && <Star size={16} weight="fill" className="ml-1 text-[#FFD700]" />}
            </div>
          </button>
        ))}
      </div>

      {/* View Type Selection */}
      <div className="mb-4">
        <div className="flex border border-[rgba(0,153,255,0.3)] rounded-lg overflow-hidden">
          <button onClick={() => setViewType('daily')} className={`flex-1 p-2 ${viewType === 'daily' ? 'bg-[rgba(0,153,255,0.1)]' : 'bg-transparent'}`}>
            Daily
          </button>
          <div className="border-l border-[rgba(0,153,255,0.3)]"></div>
          <button onClick={() => setViewType('weekly')} className={`flex-1 p-2 ${viewType === 'weekly' ? 'bg-[rgba(0,153,255,0.1)]' : 'bg-transparent'}`}>
            Weekly
          </button>
        </div>
      </div>

      {/* Quest Display */}
      <div className="bg-[rgba(0,153,255,0.1)] rounded-xl p-6 border border-[rgba(0,153,255,0.3)]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`text-3xl font-bold bg-gradient-to-r ${getRankColor(selectedRank)} bg-clip-text text-transparent`}>
              {selectedRank} RANK
            </span>
            {selectedRank === 'S' && <Star size={24} weight="fill" className="text-[#FFD700]" />}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">{categories[selectedCategory].name}</span>
          </div>
        </div>

        {/* Quest Items */}
        <div className="space-y-4">
          {categories[selectedCategory].quests[selectedRank].map((quest, index) => {
            // Adjust goal based on view type
            const dailyGoal = `${quest.goal} ${quest.metric}`; // Daily goal with metric
            const weeklyGoal = `${parseInt(quest.goal) * 7} ${quest.metric}`; // Weekly goal with metric

            const goal = viewType === 'daily' ? dailyGoal : weeklyGoal; // Select goal based on view type

            return (
              <div
                key={index}
                className="bg-[rgba(0,153,255,0.1)] rounded-xl p-4 flex items-center justify-between border border-[rgba(0,153,255,0.3)]"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${categories[selectedCategory].color} bg-opacity-20 text-white`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{quest.title}</h3>
                    <p className="text-[#8899AA]">{goal}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}