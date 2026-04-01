import { cn } from '../lib/utils';
import { Flame, Star, Trophy } from 'lucide-react';

export default function Streak() {
    const weeks = 52;
    const days = 7;
    const generateIntensity = () => Math.floor(Math.random() * 5); // 0 to 4

    const heatmapConfig = {
        0: 'bg-[#161b22] border-subtle-line hover:border-slate-500', // Empty
        1: 'bg-[#003d1b] border-[#004e22] hover:border-accent-primary', // Low
        2: 'bg-[#007b36] border-[#008c3e] hover:border-accent-primary', // Medium
        3: 'bg-[#00b341] border-[#00c548] hover:border-white', // High
        4: 'bg-accent-primary border-white glow-pulse', // Very High
    };

    return (
        <div className="flex-1 flex flex-col h-[calc(100vh-56px)] overflow-y-auto bg-void-black text-body-text px-8 py-8 items-center scrollbar-hide">

            <div className="w-full max-w-5xl flex flex-col pt-8">
                <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-2 text-center">
                    Consistency is everything.
                </h1>
                <p className="text-muted-text font-ui text-center mb-12">Every problem solved is a step forward. Build your algorithm legacy.</p>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[{ label: 'Current Streak', val: '12 Days', icon: Flame, color: 'text-med-diff', iconBg: 'bg-med-diff/10' },
                    { label: 'Longest Streak', val: '43 Days', icon: Trophy, color: 'text-easy-diff', iconBg: 'bg-easy-diff/10' },
                    { label: 'Total Solved', val: '124', icon: Star, color: 'text-accent-secondary', iconBg: 'bg-accent-secondary/10' }
                    ].map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className="bg-editor-dark border border-subtle-line rounded-xl p-6 flex flex-col relative overflow-hidden group hover:border-accent-primary/50 transition-colors">
                                <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity", stat.iconBg)}></div>
                                <div className="flex items-center gap-3 mb-2 z-10">
                                    <div className={cn("p-2 rounded-lg border border-subtle-line", stat.iconBg)}>
                                        <Icon className={stat.color} size={20} />
                                    </div>
                                    <span className="text-muted-text font-code text-sm font-semibold tracking-wider uppercase">{stat.label}</span>
                                </div>
                                <div className="text-4xl font-display font-bold text-white z-10">{stat.val}</div>
                            </div>
                        )
                    })}
                </div>

                {/* Heatmap Section */}
                <div className="bg-editor-dark border border-subtle-line rounded-xl p-8 flex flex-col w-full shadow-lg">
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-lg font-display font-semibold text-white">124 submissions in the past year</h2>
                        <div className="font-code text-xs text-muted-text flex gap-2 items-center">
                            <span>Less</span>
                            {[0, 1, 2, 3, 4].map(v => (
                                <div key={v} className={cn("w-3 h-3 rounded-[2px] border", heatmapConfig[v])} />
                            ))}
                            <span>More</span>
                        </div>
                    </div>

                    <div className="flex gap-2 w-full justify-center">
                        <div className="flex flex-col gap-[3px] mt-6 text-[10px] text-muted-text font-code justify-between pr-2">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        <div className="flex-1 flex gap-[3px] overflow-hidden justify-between">
                            {Array.from({ length: weeks }).map((_, col) => (
                                <div key={col} className="flex flex-col gap-[3px]">
                                    {Array.from({ length: days }).map((_, row) => {
                                        const intensity = generateIntensity();
                                        return (
                                            <div
                                                key={row}
                                                className={cn("w-[11px] h-[11px] rounded-[2px] border group relative transition-colors cursor-pointer", heatmapConfig[intensity])}
                                            >
                                                <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#161b22] text-xs text-white border border-subtle-line rounded px-2 py-1 whitespace-nowrap z-50 shadow-xl pointer-events-none font-ui font-medium">
                                                    {intensity * 2} problems solved on Jan {row + 1}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
