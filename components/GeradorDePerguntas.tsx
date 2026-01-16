import React, { useState } from 'react';
import { Bot, RefreshCw } from 'lucide-react';

// Mock data - replace with actual AI-generated questions
const mockQuestions = [
  {
    question: 'O que é a técnica de teste de Análise de Valor Limite?',
    answer: 'É uma técnica de teste de software que se concentra nos limites dos dados de entrada. A ideia é que, se um sistema funciona nos limites, é provável que funcione para todos os valores intermediários.'
  },
  {
    question: 'Qual é o objetivo principal do Quadrante de Testes de Agile?',
    answer: 'O Quadrante de Testes de Agile, proposto por Brian Marick, ajuda as equipes a classificar os testes e a garantir que todos os tipos de teste necessários sejam considerados. Ele é dividido em quatro quadrantes, cada um representando um propósito de teste diferente.'
  }
];

const GeradorDePerguntas: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    // TODO: Implementar a lógica de geração de perguntas com IA.
    // Isso exigirá um serviço de backend que possa processar os PDFs
    // e usar um modelo de linguagem para gerar perguntas e respostas.
    setIsLoading(true);
    // Simula uma chamada de API
    setTimeout(() => {
      setQuestions(mockQuestions);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-green-600 text-white rounded-2xl mb-4 shadow-lg shadow-green-200">
          <Bot size={48} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Gerador de Perguntas com IA
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Use a inteligência artificial para gerar novas perguntas e respostas com base no material de estudo.
        </p>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all disabled:bg-slate-400 flex items-center gap-2 mx-auto"
        >
          {isLoading ? (
            <>
              <RefreshCw size={20} className="animate-spin" />
              Gerando...
            </>
          ) : (
            'Gerar Novas Perguntas'
          )}
        </button>
      </div>

      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">{q.question}</h3>
            <p className="text-slate-700">{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeradorDePerguntas;
