
import { Question } from './types';

export const APP_ID = 'ctfl-4-sim';
export const USER_ID = 'default-user'; // In a real app, this would be the logged-in user ID
export const PASS_SCORE_PERCENT = 65;

export const CHAPTER_LABELS: Record<string, string> = {
  chap_1: 'Cap. 1: Fundamentos de Teste',
  chap_2: 'Cap. 2: Testes no Ciclo de Vida',
  chap_3: 'Cap. 3: Testes Estáticos',
  chap_4: 'Cap. 4: Análise e Design de Testes',
  chap_5: 'Cap. 5: Gestão das Atividades',
  chap_6: 'Cap. 6: Ferramentas de Teste',
  simulado: 'Simulado Final (40 Questões)'
};

export const QUESTIONS_DB: Question[] = [
  // CHAPTER 1
  {
    id: 'c1q1',
    chapter: 1,
    q: 'Qual é um dos objetivos fundamentais do teste segundo o Syllabus 4.0?',
    a: [
      'Provar que o software não contém defeitos',
      'Verificar se o objeto de teste está completo e funciona conforme esperado',
      'Punir desenvolvedores por erros cometidos',
      'Garantir que nenhum bug chegue à produção sob qualquer circunstância'
    ],
    correct: 1,
    expl: 'Segundo o ISTQB, um dos objetivos é verificar se o objeto de teste está completo e se funciona conforme o esperado pelos stakeholders.'
  },
  {
    id: 'c1q2',
    chapter: 1,
    q: 'O que descreve o princípio de teste "O teste depende do contexto"?',
    a: [
      'Software de segurança crítica deve ser testado igual a um e-commerce',
      'Os testes devem ser realizados da mesma forma em todos os projetos',
      'O teste é feito de forma diferente em contextos diferentes (ex: ágil vs sequencial)',
      'O contexto não influencia a estratégia de teste'
    ],
    correct: 2,
    expl: 'O princípio afirma que o teste é executado de forma diferente em diferentes contextos.'
  },
  {
    id: 'c1q3',
    chapter: 1,
    q: 'No contexto do "Whole-team approach", quem é responsável pela qualidade?',
    a: [
      'Apenas o testador',
      'Apenas o Product Owner',
      'Toda a equipe, incluindo desenvolvedores e stakeholders',
      'O gerente de QA exclusivamente'
    ],
    correct: 2,
    expl: 'O "Whole-team approach" no Syllabus 4.0 enfatiza que a qualidade é responsabilidade de todos na equipe.'
  },
  {
    id: 'c1q4',
    chapter: 1,
    q: 'Qual a principal diferença entre erro, defeito e falha?',
    a: [
      'Não há diferença, são sinônimos',
      'Erro é humano, defeito está no código e falha é o desvio no comportamento esperado',
      'Falha é humana, defeito é o desvio e erro está no código',
      'Defeito é humano, falha está no código e erro é o desvio'
    ],
    correct: 1,
    expl: 'Um erro (equívoco humano) pode produzir um defeito (falha no código), que por sua vez pode causar uma falha (comportamento visível incorreto).'
  },
  {
    id: 'c1q5',
    chapter: 1,
    q: 'O que significa o conceito de "Shift-Left"?',
    a: [
      'Mover os testes para o final do ciclo de vida',
      'Mover as atividades de teste para o início do ciclo de desenvolvimento',
      'Aumentar o número de testadores manuais',
      'Automatizar apenas a interface do usuário'
    ],
    correct: 1,
    expl: 'Shift-left refere-se à prática de iniciar as atividades de teste o mais cedo possível no ciclo de vida de desenvolvimento.'
  },

  // CHAPTER 2
  {
    id: 'c2q1',
    chapter: 2,
    q: 'Qual modelo de ciclo de vida de desenvolvimento é caracterizado por iterações curtas e feedback constante?',
    a: [
      'Modelo em V',
      'Modelo Cascata',
      'Desenvolvimento Ágil',
      'Modelo Sequencial'
    ],
    correct: 2,
    expl: 'O desenvolvimento ágil utiliza iterações curtas e promove o feedback contínuo.'
  },
  {
    id: 'c2q2',
    chapter: 2,
    q: 'Os testes de aceitação do usuário (UAT) focam principalmente em quê?',
    a: [
      'Encontrar bugs de memória',
      'Validar se o sistema atende às necessidades de negócio e processos dos usuários',
      'Verificar a integração entre módulos de baixo nível',
      'Testar o desempenho do banco de dados'
    ],
    correct: 1,
    expl: 'UAT foca na validação da prontidão para uso por parte dos usuários finais e clientes.'
  },
  {
    id: 'c2q3',
    chapter: 2,
    q: 'Qual é o objetivo principal dos testes de regressão?',
    a: [
      'Encontrar defeitos em novas funcionalidades',
      'Verificar se mudanças recentes não afetaram negativamente funcionalidades existentes',
      'Validar o design da interface',
      'Substituir os testes unitários'
    ],
    correct: 1,
    expl: 'Testes de regressão garantem que alterações (correções ou melhorias) não introduziram novos defeitos em áreas não alteradas.'
  },
  {
    id: 'c2q4',
    chapter: 2,
    q: 'O que caracteriza os testes de componentes?',
    a: [
      'Focam em itens de software que podem ser testados isoladamente',
      'Sempre exigem a interface gráfica completa',
      'São realizados apenas por usuários finais',
      'Testam a comunicação entre sistemas externos'
    ],
    correct: 0,
    expl: 'Testes de componentes focam em partes individuais do sistema que podem ser isoladas para teste.'
  },
  {
    id: 'c2q5',
    chapter: 2,
    q: 'O que descreve o nível de teste de Integração de Sistemas?',
    a: [
      'Integração entre unidades de código',
      'Interações entre o sistema e outros sistemas ou microserviços',
      'Testes de usabilidade da interface',
      'Testes de stress do hardware'
    ],
    correct: 1,
    expl: 'Integração de sistemas foca nas interfaces e interações entre diferentes sistemas.'
  },

  // CHAPTER 3
  {
    id: 'c3q1',
    chapter: 3,
    q: 'Qual é um benefício chave do teste estático?',
    a: [
      'Exige a execução do código',
      'Detecta defeitos precocemente, reduzindo o custo de correção',
      'Sempre requer ferramentas caras de automação',
      'Substitui totalmente o teste dinâmico'
    ],
    correct: 1,
    expl: 'Testes estáticos (revisões, análise estática) permitem encontrar defeitos antes da execução, quando são mais baratos de corrigir.'
  },
  {
    id: 'c3q2',
    chapter: 3,
    q: 'Qual papel em uma revisão formal é responsável por liderar a sessão?',
    a: [
      'Autor',
      'Moderador (ou Facilitador)',
      'Escriba',
      'Gerente'
    ],
    correct: 1,
    expl: 'O moderador ou facilitador lidera a sessão de revisão e garante que os objetivos sejam seguidos.'
  },
  {
    id: 'c3q3',
    chapter: 3,
    q: 'O que diferencia uma Inspeção de uma Revisão Informal?',
    a: [
      'Inspeções são lideradas pelo autor',
      'Inspeções são altamente formais, baseadas em regras e checklists',
      'Revisões informais exigem métricas detalhadas',
      'Não há diferença prática'
    ],
    correct: 1,
    expl: 'Inspeções são o tipo mais formal de revisão, com papéis definidos e processos rigorosos.'
  },
  {
    id: 'c3q4',
    chapter: 3,
    q: 'Quais defeitos são tipicamente encontrados em análises estáticas?',
    a: [
      'Vazamentos de memória durante a execução',
      'Variáveis não declaradas ou código morto',
      'Problemas de latência de rede',
      'Falhas de segurança em tempo real'
    ],
    correct: 1,
    expl: 'A análise estática foca na estrutura do código e documentos sem executá-los, achando problemas de sintaxe ou lógica estática.'
  },
  {
    id: 'c3q5',
    chapter: 3,
    q: 'Na revisão baseada em perspectivas, o que os revisores fazem?',
    a: [
      'Todos revisam da mesma forma',
      'Cada revisor adota um ponto de vista diferente (ex: usuário, desenvolvedor, testador)',
      'Apenas o gerente revisa o documento',
      'Focam apenas em erros ortográficos'
    ],
    correct: 1,
    expl: 'Nesta técnica, diferentes revisores assumem papéis de stakeholders distintos para aumentar a cobertura da revisão.'
  },

  // CHAPTER 4
  {
    id: 'c4q1',
    chapter: 4,
    q: 'O que caracteriza as técnicas de teste de caixa-preta?',
    a: [
      'Baseiam-se na análise da estrutura interna do código',
      'Baseiam-se em requisitos e especificações sem olhar o código',
      'São realizadas apenas por desenvolvedores',
      'Não podem ser automatizadas'
    ],
    correct: 1,
    expl: 'Técnicas de caixa-preta derivam casos de teste diretamente da base de teste (requisitos, modelos).'
  },
  {
    id: 'c4q2',
    chapter: 4,
    q: 'Sobre a técnica de Partição de Equivalência, o que é uma classe válida?',
    a: [
      'Um valor que o sistema deve rejeitar',
      'Um conjunto de valores que devem ser processados da mesma maneira pelo sistema',
      'Apenas o valor zero',
      'Valores fora dos limites permitidos'
    ],
    correct: 1,
    expl: 'Classes de equivalência agrupam dados que espera-se que o software trate de forma idêntica.'
  },
  {
    id: 'c4q3',
    chapter: 4,
    q: 'Se um campo aceita valores de 1 a 10, quais são os valores típicos para Análise de Valor Limite (2 valores por limite)?',
    a: [
      '0, 1, 10, 11',
      '1, 5, 10',
      '1, 10',
      '5, 6, 7'
    ],
    correct: 0,
    expl: 'A técnica de valor limite foca nos extremos: logo abaixo do mínimo (0), o mínimo (1), o máximo (10) e logo acima do máximo (11).'
  },
  {
    id: 'c4q4',
    chapter: 4,
    q: 'Qual é o foco das técnicas de caixa-branca?',
    a: [
      'A interface do usuário',
      'A estrutura interna do software (código, fluxo de controle)',
      'A experiência do usuário final',
      'Os manuais de ajuda'
    ],
    correct: 1,
    expl: 'Caixa-branca utiliza o conhecimento interno do sistema para guiar o design dos testes.'
  },
  {
    id: 'c4q5',
    chapter: 4,
    q: 'O que é Cobertura de Sentença?',
    a: [
      'A porcentagem de requisitos testados',
      'A porcentagem de linhas de código executáveis percorridas pelos testes',
      'O número de bugs encontrados por dia',
      'A quantidade de reuniões realizadas'
    ],
    correct: 1,
    expl: 'A cobertura de sentença mede quantas instruções (statements) do código foram exercitadas pelo conjunto de testes.'
  },
  {
    id: 'c4q6',
    chapter: 4,
    q: 'Qual técnica de teste baseada na experiência envolve o uso de "charters" e sessões limitadas pelo tempo?',
    a: [
      'Suposição de Erro',
      'Teste Exploratório',
      'Lista de Verificação',
      'Partição de Equivalência'
    ],
    correct: 1,
    expl: 'O teste exploratório é frequentemente organizado em sessões e guiado por test charters.'
  },

  // CHAPTER 5
  {
    id: 'c5q1',
    chapter: 5,
    q: 'Quem normalmente escreve a Estratégia de Teste e o Plano de Teste?',
    a: [
      'Desenvolvedor',
      'Gerente de Teste ou Líder de Teste',
      'Product Owner',
      'DBA'
    ],
    correct: 1,
    expl: 'O planejamento e a definição estratégica são responsabilidades típicas da gestão de testes.'
  },
  {
    id: 'c5q2',
    chapter: 5,
    q: 'O que define o critério de saída em um plano de teste?',
    a: [
      'Quando o testador fica cansado',
      'Condições que devem ser atendidas para que o teste seja considerado concluído',
      'A data de lançamento do produto invariavelmente',
      'O momento em que o primeiro bug é achado'
    ],
    correct: 1,
    expl: 'Critérios de saída definem as metas a serem atingidas para encerrar formalmente um nível ou fase de teste.'
  },
  {
    id: 'c5q3',
    chapter: 5,
    q: 'O que é um Risco de Produto?',
    a: [
      'Falta de pessoal qualificado',
      'A possibilidade de o software falhar em atender às necessidades do usuário',
      'Atraso na entrega do hardware',
      'Problemas de orçamento'
    ],
    correct: 1,
    expl: 'Risco de produto relaciona-se diretamente à qualidade e funcionalidade do objeto de teste.'
  },
  {
    id: 'c5q4',
    chapter: 5,
    q: 'Qual é o propósito do Teste Baseado em Risco?',
    a: [
      'Ignorar partes do software que não têm riscos',
      'Priorizar os esforços de teste nas áreas com maior probabilidade e impacto de falha',
      'Gastar todo o tempo em documentação',
      'Testar apenas o que o desenvolvedor indicar'
    ],
    correct: 1,
    expl: 'A abordagem baseada em risco utiliza a análise de riscos para focar o teste onde ele é mais necessário.'
  },
  {
    id: 'c5q5',
    chapter: 5,
    q: 'Qual informação é ESSENCIAL em um relatório de defeito?',
    a: [
      'A opinião pessoal sobre o programador',
      'Passos para reproduzir o problema',
      'A cor favorita do testador',
      'O valor do bônus da equipe'
    ],
    correct: 1,
    expl: 'Para que um defeito seja corrigido, o desenvolvedor precisa de passos claros para reproduzi-lo.'
  },

  // CHAPTER 6
  {
    id: 'c6q1',
    chapter: 6,
    q: 'Qual é um risco potencial ao introduzir uma ferramenta de automação de teste?',
    a: [
      'Redução do tédio em tarefas repetitivas',
      'Expectativas irreais sobre o que a ferramenta pode fazer',
      'Maior consistência nos testes',
      'Melhoria na qualidade do produto'
    ],
    correct: 1,
    expl: 'Ter expectativas irreais sobre o retorno sobre investimento (ROI) é um risco comum na automação.'
  },
  {
    id: 'c6q2',
    chapter: 6,
    q: 'O que caracteriza uma ferramenta de Gestão de Testes?',
    a: [
      'Executa o código automaticamente',
      'Auxilia no rastreamento de requisitos, casos de teste e defeitos',
      'Mede a performance do servidor',
      'Verifica a sintaxe do código'
    ],
    correct: 1,
    expl: 'Ferramentas de gestão de testes fornecem suporte para o gerenciamento de artefatos e atividades de teste.'
  },
  {
    id: 'c6q3',
    chapter: 6,
    q: 'Qual é um objetivo de realizar um projeto piloto antes de adotar uma ferramenta?',
    a: [
      'Gastar o restante do orçamento',
      'Avaliar como a ferramenta se encaixa nos processos da organização',
      'Substituir toda a equipe de teste',
      'Garantir que ninguém use a ferramenta'
    ],
    correct: 1,
    expl: 'Projetos piloto servem para aprender sobre a ferramenta e como integrá-la ao fluxo de trabalho real.'
  },
  {
    id: 'c6q4',
    chapter: 6,
    q: 'Ferramentas de análise estática são usadas principalmente por quem?',
    a: [
      'Usuários finais',
      'Desenvolvedores (durante a codificação ou integração)',
      'Gerentes de marketing',
      'Auditores financeiros'
    ],
    correct: 1,
    expl: 'Análise estática é focada no código e geralmente integrada ao ambiente de desenvolvimento.'
  },
  {
    id: 'c6q5',
    chapter: 6,
    q: 'O que é "Sondagem" (Probe Effect) em ferramentas de monitoramento?',
    a: [
      'Um efeito visual da ferramenta',
      'A alteração do comportamento do sistema causado pela própria ferramenta de medição',
      'A capacidade de espiar outros computadores',
      'Um erro de instalação'
    ],
    correct: 1,
    expl: 'Ferramentas de performance ou monitoramento podem inserir overhead, mudando ligeiramente como o software se comporta.'
  },

  // ADDING MORE FOR VOLUME (TOTAL 40)
  {
    id: 'extra1',
    chapter: 1,
    q: 'O que é a Pirâmide de Teste?',
    a: [
      'Um monumento no Egito',
      'Um modelo que sugere ter mais testes de baixo nível (unitários) e menos de alto nível (UI)',
      'Uma hierarquia de cargos na equipe de teste',
      'Um processo burocrático de aprovação'
    ],
    correct: 1,
    expl: 'A pirâmide de teste sugere que uma suíte de testes eficiente deve ter uma base sólida de testes rápidos e baratos (unitários) e menos testes caros e lentos (GUI).'
  },
  {
    id: 'extra2',
    chapter: 3,
    q: 'Qual técnica estática não exige um documento formal?',
    a: [
      'Inspeção',
      'Revisão Informal',
      'Revisão Técnica',
      'Walkthrough'
    ],
    correct: 1,
    expl: 'A revisão informal é a menos rigorosa e não exige documentação ou reuniões formais.'
  },
  {
    id: 'extra3',
    chapter: 4,
    q: 'O que é Tabela de Decisão?',
    a: [
      'Uma tabela para decidir quem vai almoçar',
      'Uma técnica de caixa-preta para testar combinações complexas de condições lógicas',
      'Um gráfico de pizza',
      'Uma lista de bugs pendentes'
    ],
    correct: 1,
    expl: 'Tabelas de decisão são excelentes para modelar lógica de negócio complexa com múltiplas entradas.'
  },
  {
    id: 'extra4',
    chapter: 5,
    q: 'O que é Independência de Teste?',
    a: [
      'Testadores trabalharem de casa',
      'Grau de separação entre quem desenvolve e quem testa o software',
      'O testador não falar com ninguém da equipe',
      'Usar apenas ferramentas open-source'
    ],
    correct: 1,
    expl: 'A independência aumenta a probabilidade de encontrar defeitos, pois o testador traz uma perspectiva imparcial.'
  },
  {
    id: 'extra5',
    chapter: 2,
    q: 'O que é o Teste de Fumaça (Smoke Test)?',
    a: [
      'Testar se o hardware está superaquecendo',
      'Um conjunto inicial de testes para verificar as funções básicas do sistema antes de testes mais profundos',
      'Testar sistemas de prevenção de incêndio',
      'Testes realizados sob pressão de tempo'
    ],
    correct: 1,
    expl: 'O Smoke Test valida a estabilidade básica do build para evitar desperdício de tempo com testes detalhados em versões quebradas.'
  },
  {
    id: 'extra6',
    chapter: 4,
    q: 'O que é Cobertura de Decisão?',
    a: [
      'Garantir que todas as frases do código foram lidas',
      'Garantir que os resultados Verdadeiro e Falso de cada decisão foram testados',
      'Falar com o gerente sobre o projeto',
      'Testar apenas os botões de "OK"'
    ],
    correct: 1,
    expl: 'Cobertura de decisão foca nos fluxos lógicos derivados de pontos de decisão (como "if").'
  },
  {
    id: 'extra7',
    chapter: 1,
    q: 'Qual é a sétima falácia de teste (princípio)?',
    a: [
      'O teste é impossível',
      'A ilusão da ausência de erros',
      'Bugs são bons',
      'Sempre teste tudo'
    ],
    correct: 1,
    expl: 'O princípio diz que encontrar e consertar defeitos não ajuda se o sistema construído for inutilizável ou não atender às necessidades.'
  },
  {
    id: 'extra8',
    chapter: 5,
    q: 'No Scrum, quando os testes devem ser realizados?',
    a: [
      'No final do projeto',
      'Continuousmente durante a Sprint',
      'Apenas nos finais de semana',
      'Após a Sprint Review'
    ],
    correct: 1,
    expl: 'No ágil, o teste é integrado e acontece o tempo todo para garantir o incremento pronto ao final da Sprint.'
  },
  {
    id: 'extra9',
    chapter: 6,
    q: 'Qual é um benefício de ferramentas de execução de teste?',
    a: [
      'Criação automática de requisitos perfeitos',
      'Repetibilidade e execução rápida de suítes de regressão',
      'Substituição total da inteligência humana',
      'Eliminação de todos os riscos de negócio'
    ],
    correct: 1,
    expl: 'A automação brilha na execução repetitiva e rápida de testes já conhecidos.'
  }
];
