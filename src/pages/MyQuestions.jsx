import { cn } from '../lib/utils';
import { ChartNoAxesColumn, Clock, Code2 } from 'lucide-react';

const mockSolved = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Array', date: '2026-03-31', lang: 'Python', runtime: 'O(n)' },
    { id: 21, title: 'Merge Two Sorted Lists', difficulty: 'Easy', topic: 'Linked List', date: '2026-03-30', lang: 'Java', runtime: 'O(n)' },
    { id: 42, title: 'Trapping Rain Water', difficulty: 'Hard', topic: 'Two Pointers', date: '2026-03-29', lang: 'C++', runtime: 'O(n)' },
];

export default function MyQuestions() {
    return (
        <div className="flex-1 flex flex-col h-[calc(100vh-56px)] overflow-y-auto bg-void-black text-body-text px-8 py-8 items-center scrollbar-hide">

            <div className="w-full max-w-5xl flex flex-col items-center">
                {/* Header */}
                <div className="mb-10 w-full flex justify-between items-end border-b border-subtle-line pb-4">
                    <div>
                        <h1 className="text-3xl font-display font-bold tracking-tight text-white mb-1">
                            My Dashboard
                        </h1>
                        <p className="text-muted-text font-ui">Track your progression. Analyze past performances.</p>
                    </div>
                    <div className="flex gap-4 mb-2">
                        <div className="text-right">
                            <span className="text-sm font-code text-muted-text block">Total Solved</span>
                            <span className="text-2xl font-display font-bold text-accent-primary">124</span>
                        </div>
                        <div className="h-10 w-px bg-subtle-line mx-2" />
                        <div className="text-left">
                            <span className="text-sm font-code text-muted-text block">Hard</span>
                            <span className="text-xl font-display font-bold text-hard-diff">12</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Table */}
                <div className="w-full overflow-hidden border border-subtle-line rounded-xl bg-editor-dark">
                    <table className="w-full text-left font-ui">
                        <thead className="bg-[#161b22] text-xs font-semibold text-muted-text uppercase tracking-wider font-code">
                            <tr>
                                <th className="py-3 px-6">Problem</th>
                                <th className="py-3 px-6">Topic</th>
                                <th className="py-3 px-6">Date Solved</th>
                                <th className="py-3 px-6 text-center">Language</th>
                                <th className="py-3 px-6 text-center">Runtime</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-subtle-line">
                            {mockSolved.map(p => (
                                <tr key={p.id} className="hover:bg-raised-dark transition-colors group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <span className="text-muted-text font-code text-sm">#{p.id}</span>
                                            <span className="text-white font-display font-medium hover:text-accent-primary transition-colors cursor-pointer">{p.title}</span>
                                            <span className={cn(
                                                "px-2 py-0.5 rounded text-[10px] font-bold font-code ml-auto",
                                                p.difficulty === 'Easy' && "text-easy-diff border border-easy-diff/30",
                                                p.difficulty === 'Medium' && "text-med-diff border border-med-diff/30",
                                                p.difficulty === 'Hard' && "text-hard-diff border border-hard-diff/30"
                                            )}>
                                                {p.difficulty}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm">
                                        <span className="bg-[#1c2128] border border-subtle-line text-muted-text px-2 py-1 rounded">
                                            {p.topic}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-body-text flex items-center gap-2">
                                        <Clock size={14} className="text-muted-text" />
                                        {p.date}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-center">
                                        <div className="inline-flex items-center justify-center gap-1.5 shrink-0 bg-[#2d333b]/50 px-2.5 py-1 rounded-md border border-subtle-line">
                                            <Code2 size={14} className={cn("text-muted-text group-hover:text-accent-secondary transition-colors")} />
                                            <span className="font-code font-medium">{p.lang}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-center">
                                        <div className="inline-flex items-center gap-1 text-accent-primary font-code bg-accent-primary/10 px-2 py-1 rounded">
                                            <ChartNoAxesColumn size={14} />
                                            {p.runtime}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}
