import React from 'react';
import { Book, Download } from 'lucide-react';

const files = [
  { name: 'Análise de Valor Limite v1.2.pdf', path: '/arquivos/Análise de Valor Limite v1.2.pdf' },
  { name: 'exam_sample_ctfl_A_1br.pdf', path: '/arquivos/exam_sample_ctfl_A_1br.pdf' },
  { name: 'Pirâmide de Teste v1.0.pdf', path: '/arquivos/Pirâmide de Teste v1.0.pdf' },
  { name: 'Quadrante de Teste v1.2.pdf', path: '/arquivos/Quadrante de Teste v1.2.pdf' },
  { name: 'syllabus_ctfl_4.0br.pdf', path: '/arquivos/syllabus_ctfl_4.0br.pdf' },
  { name: 'Técnicas de Estimativa v1.1.pdf', path: '/arquivos/Técnicas de Estimativa v1.1.pdf' },
  { name: 'Teste de Tabela de Decisão v1.1.pdf', path: '/arquivos/Teste de Tabela de Decisão v1.1.pdf' },
  { name: 'Teste de Transição de Estado v1.2.pdf', path: '/arquivos/Teste de Transição de Estado v1.2.pdf' },
  { name: 'Teste de Usabilidade com SUMI e WAMMI v1.0.pdf', path: '/arquivos/Teste de Usabilidade com SUMI e WAMMI v1.0.pdf' }
];

const MaterialDeApoio: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl mb-4 shadow-lg shadow-blue-200">
          <Book size={48} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Material de Apoio
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Aqui você encontra os materiais de estudo para a certificação.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file, index) => (
            <a
              key={index}
              href={file.path}
              download
              className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-left group flex items-center justify-between"
            >
              <p className="text-slate-900 font-medium leading-tight group-hover:text-blue-700">
                {file.name}
              </p>
              <Download size={20} className="text-slate-500 group-hover:text-blue-600" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaterialDeApoio;
