import React from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  useParams,
} from 'react-router-dom';
import { QuizResult } from './types';
import { storageService } from './services/storageService';
import Home from './components/Home';
import QuizRoom from './components/QuizRoom';
import Dashboard from './components/Dashboard';
import Results from './components/Results';
import Login from './components/Login';
import MaterialDeApoio from './components/MaterialDeApoio';
import GeradorDePerguntas from './components/GeradorDePerguntas';
import { useAuth } from './contexts/AuthContext';
import { LogIn, LogOut } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginRoute />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="material-de-apoio" element={<MaterialDeApoio />} />
        <Route path="gerador-de-perguntas" element={<GeradorDePerguntas />} />
        <Route path="quiz/:chapterKey" element={<QuizRoute />} />
        <Route path="results" element={<ResultsRoute />} />
      </Route>
    </Routes>
  );
};

const Layout: React.FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 transition-all duration-500">
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tight text-slate-900">
              CTFL 4.0
            </span>
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              to="/gerador-de-perguntas"
              className="text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              Gerador Q&A
            </Link>
            <Link
              to="/material-de-apoio"
              className="text-slate-500 hover:text-blue-600 font-bold transition-colors"
            >
              Material de Apoio
            </Link>
            {currentUser && (
              <Link
                to="/dashboard"
                className="text-slate-500 hover:text-blue-600 font-bold transition-colors"
              >
                Progresso
              </Link>
            )}
            {currentUser ? (
              <button
                onClick={logout}
                className="text-slate-500 hover:text-blue-600 font-bold transition-colors flex items-center gap-2"
              >
                <LogOut size={18} />
                Sair
              </button>
            ) : (
              <Link
                to="/login"
                className="text-slate-500 hover:text-blue-600 font-bold transition-colors flex items-center gap-2"
              >
                <LogIn size={18} />
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <main className="pb-20">
        <Outlet />
      </main>

      <footer className="py-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>
          © {new Date().getFullYear()} Simulado Preparatório Profissional CTFL
          4.0
        </p>
        <p className="mt-1">Baseado no Syllabus ISTQB Versão 4.0</p>
      </footer>
    </div>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const LoginRoute: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (currentUser) {
    return <Navigate to={from} replace />;
  }

  return <Login />;
};

const QuizRoute: React.FC = () => {
  const { chapterKey } = useParams<{ chapterKey: string }>();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const finishQuiz = async (result: QuizResult) => {
    await storageService.updateChapterStats(
      result.chapterKey,
      result.score,
      result.timeSpent,
      currentUser?.uid
    );
    navigate('/results', { state: { result } });
  };

  if (!chapterKey) {
    return <Navigate to="/" replace />;
  }

  return (
    <QuizRoom
      key={chapterKey}
      chapterKey={chapterKey}
      onFinish={finishQuiz}
      onCancel={() => navigate('/')}
    />
  );
};

const ResultsRoute: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result as QuizResult | undefined;

  if (!result) {
    return <Navigate to="/" replace />;
  }

  const restartQuiz = () => {
    if (result) {
      navigate(`/quiz/${result.chapterKey}`);
    }
  };

  return (
    <Results
      result={result}
      onRestart={restartQuiz}
      onGoHome={() => navigate('/')}
      onViewDashboard={() => navigate('/dashboard')}
    />
  );
};

export default App;
