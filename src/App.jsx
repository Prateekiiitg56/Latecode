import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import Search from './pages/Search';
import MyQuestions from './pages/MyQuestions';
import Streak from './pages/Streak';
import CodeEditor from './pages/CodeEditor';
import AIHintsPanel from './components/ui/AIHintsPanel';

function App() {
  const [activePanel, setActivePanel] = useState('editor');
  const [activeLanguage, setLanguage] = useState('python');
  const [isAIOpen, setIsAIOpen] = useState(false);

  const handleSetPanel = (panel) => {
    if (panel === 'ai-hints') {
      setIsAIOpen(true);
    } else {
      setActivePanel(panel);
    }
  };

  return (
    <div className="flex h-screen bg-void-black text-body-text overflow-hidden font-ui">
      {/* Fixed Left Sidebar */}
      <Sidebar activePanel={activePanel} setActivePanel={handleSetPanel} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative w-[calc(100vw-48px)]">
        <TopBar activeLanguage={activeLanguage} setLanguage={setLanguage} />

        {/* Main View Switcher */}
        {activePanel === 'search' && <Search setActivePanel={handleSetPanel} />}
        {activePanel === 'my-questions' && <MyQuestions />}
        {activePanel === 'streak' && <Streak />}
        {activePanel === 'editor' && <CodeEditor activeLanguage={activeLanguage} />}

        {/* Floating AI Panel */}
        <AIHintsPanel isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      </div>
    </div>
  );
}

export default App;
