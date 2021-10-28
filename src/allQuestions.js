const allQuestions = [
  {
    id: 0,
    text: 'Kant definiu a Filosofia como:',
    answers: ['Ciência das ciências', 'Ciências do pensamento', 'Ciências humanas e naturais', 'A mãe das ciências existentes', 'Ciências últimas de todas as ciências'],
    correct: 0,
    subject: 1,
    level: 11,
    institution: 0,
    year: 2017
  },
  {
    id: 1,
    text: 'O objecto de estudo de Filosofia é:',
    answers: ['Nada', 'Tudo o que rodeia o homem', 'Tudo', 'Tudo o que existe na natureza', 'Todo o conhecimento das outras ciências'],
    correct: 2,
    subject: 1,
    level: 11,
    institution: 0,
    year: 2017
  },
  {
    id: 2,
    text: 'A paternidade da atitude e do termo filosofia, são atribuídos a:',
    answers: ['Tales e Pitágoras', 'Tales e Sócrates', 'Platão e Sócrates', 'Sócrates e Pitágoras', 'Wittgenstein e Karl Jaspers'],
    correct: 2,
    subject: 1,
    level: 11,
    institution: 0,
    year: 2017
  },
  {
    id: 3,
    text: 'Para Tales de Mileto o princípio primeiro, segundo o qual todas as coisas têm origem em:',
    answers: ['Fogo', 'Água', 'Infinito', 'Número', 'Terra'],
    correct: 1,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 4,
    text: 'Os primeiros filósofos preocuparam-se em buscar o princípio obrigatório do real. Anaximandro, por exemplo, identificou esse princípio com:',
    answers: ['Água', 'Infinito', 'Ar', 'Fogo', 'Número'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 5,
    text: 'Os filósofos pré-socráticos também também são chamados de:',
    answers: ['Filósofos da Experiência', 'Filósofos naturalistas', 'Filósofos da Metafísica', 'Filósofos da Observação', 'Filósofos da Observação e Metafísica'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 5,
    text: 'Os filósofos pré-socráticos também também são chamados de:',
    answers: ['Filósofos da Experiência', 'Filósofos naturalistas', 'Filósofos da Metafísica', 'Filósofos da Observação', 'Filósofos da Observação e Metafísica'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 6,
    text: 'As questões filosóficas são, por natureza, radicais e mais profundas. Elas caracterizam-se pela:',
    answers: ['Regualamentação de todas dívidas', 'Insatisfação com as perguntas dadas', 'Instatisfação com todas respostas', 'Satisfação com todas respostas dadas', 'Resolução de todos problemas'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 7,
    text: 'Constituem características da consciência moral:',
    answers: ['Ignorância, sabedoria', 'Amor, ódio', 'Autonomia, juízo interior', 'Amizade, singularidade', 'Sentimentos, indiferença'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 8,
    text: 'A liberdade, a justiça e a responsabilidade são aspectos da:',
    answers: ['Ética individual', 'Ética profissional', 'Ética política', 'Ética religiosa', 'Ética social'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 9,
    text: 'O filósofo que destacou a relação com os outros como característica da definitória de pessoa é:',
    answers: ['Bubber', 'Kant', 'Sartre', 'Cícero', 'Descartes'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 10,
    text: 'A ideia segundo a qual, a liberdade é a razão de ser e o fundamento da lei moral, pertence a:',
    answers: ['Sartre', 'Sócrates', 'Locke', 'Kant', 'Aristóteles'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 11,
    text: 'A ética é definida como:',
    answers: ['Reflexão filosófica sobre as normas morais da sociedade', 'Conjunto das normas e costumes de uma sociedade', 'Leis morais de âmbito religioso', 'A ciência do dever moral', 'Conjunto de leis justas de um determinado estado'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 11,
    text: 'Elevado à categoria de pessoa, o ser humano apresenta-se à consiência moral da humanidade como um ser:',
    answers: ['De valor supremo e absoluto', 'Biológico e pensante', 'Racional e consciente', 'De direitos alienáveis', 'Cívico e solidário'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 12,
    text: 'Os três elementos do acto de conhecer são:',
    answers: ['Sujeito, predicado e objecto', 'Sujeito destinatário e predicado', 'Sujeito, objecto e relação sujeito objecto', 'Sujeito, objecto e contacto', 'Sujeito, objecto e negação'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 13,
    text: 'As atitudes de inteligência perante a verdade são:',
    answers: ['Fé, sabedoria, confiança e certeza', 'Ignorância, dúvida, certeza e opinião', 'Medo, cobardia, revolta e silêncio', 'Fé, medo, conformismo e assentamento', 'Isolamento, posse, exaltação e arrogância'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 14,
    text: 'Na fenomenologia do acto deconhecer o objecto tem a seguinte função:',
    answers: ['Determinar o sujeito', 'Deixar-se ver', 'Ficar estático', 'Ser dinâmico', 'Ajudar a relação'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 15,
    text: 'Na perspectiva de Thomas Khun, o progresso da ciência passa por três fases, nomeadamente:',
    answers: ['Ciência especial, abstracta e reflexiva', 'Ciência normal, metafísica e teológica', 'Ciência normal, anomalia e revolução', 'Científica, comum e concreta', 'Teleológica, metafísica e positiva'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 16,
    text: 'Quais são as condições par a que um objecto seja cognoscível?',
    answers: ['Ser material e estático', 'Ser visível e sensível', 'Luminosidade e sensibilidade', 'Ser tangível e observável', 'Ser dinâmico e estático'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 17,
    text: 'O conhecimento ciêntifico caracteriza-se por:',
    answers: ['Objectivo, científico e vulgar', 'Rigoroso, subjectivo e sistemático', 'Objectivo, subsistemático e metodológico', 'Objectivo, sistemático e metodológico', 'Subjectivo, metodológico e sistemático'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 18,
    text: 'Constituem critérios da verdade:',
    answers: ['Moral e certeza', 'Opinião e dúvida', 'Evidência e clareza', 'Distinção e objectivismo', 'Ignorância e ética'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 19,
    text: 'O método, a "dúvida metódica" é do filósofo:',
    answers: ['Comte', 'Descartes', 'Locke', 'Aristóteles', 'Mil'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 20,
    text: 'O conhecimento científico diverge do senso comum nos seguintes aspectos:',
    answers: ['Aplicação, desenvolvi,ento e ensino', 'Métod, produção e divulgação', 'Nível académico, escolarização e cultura', 'Leitura, crítica e reflexão', 'Escravatura, colonialismo e civilização'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 21,
    text: 'No acto de conhecer, o sujeito e o objecto são indispensáveis porque:',
    answers: ['Cada um existe independentemente do outro', 'A relação entre eles é permutável', 'Cada elemento é o que é só em relação ao outro', 'A relação entre eles é antagónica', 'O sujeito tem a função de ser conhecido pelo objecto e, vice-versa'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 22,
    text: 'O pai da lógica como ciência é:',
    answers: ['Aristóteles', 'Mill', 'Sócrates', 'Locke', 'Descartes'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 23,
    text: 'O objecto de estudo da lógica é:',
    answers: ['Raciocínio', 'Consciência', 'Razão', 'Pensamento', 'Linguagem'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 24,
    text: 'Todo o pensamento verdadeiro implica:',
    answers: ['A vinculação entre os conceitos', 'A não contradição entre os conceitos', 'Afirmação ou negação dos conceitos', 'Conformidade entre as práticas', 'A presença simultânea da validade formal e material'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 25,
    text: 'O triângulo é uma figura triangular. Esta definição transgrediu a lei de:',
    answers: ['Terceiro excluido', 'identidade', 'Não circularidade', 'Terceira lei', 'Casualidade'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 26,
    text: 'Nas inferências imediatas, a conversão simples é possível nas seguintes proposições:',
    answers: ['A - Definitória', 'I, O e E', 'A, E, I, O', 'A, B, C, D', 'A, E-E, I, O'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 27,
    text: 'O conjunto de seres ou objectos que são compreendidos ou abrangidos por um determindado conceito leva o nome de:',
    answers: ['Conceito', 'Termo', 'Compreensão de conceitos', 'Extensão de conceitos', 'Lógica do conceito'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 28,
    text: 'Beleza, alegria, amizade são conceitos:',
    answers: ['Simples', 'Concretos', 'Complexo', 'Singulares', 'Abstractos'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 29,
    text: 'A definição "cego é aquele que não vê", apesar de ser negativa é correcta porque:',
    answers: ['Obedece as regras da definição', 'Define usando o género próximo', 'O definido designa privação', 'A definição é mais clara que o definido', 'Foi feita mediante a descrição do definido'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 30,
    text: 'O juízo é:',
    answers: ['Um acto de pensamento', 'Uma afirmação do sujeito', 'Identificar o sujeito da proposição', 'Atribuir significado a um predicado', 'Um acto de pensamento que consiste em afirmar e negar algo'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 31,
    text: 'O juízo: "Quem quer que seja adulto, votará nas próximas eleições" é:',
    answers: ['Particular negativo', 'Particular afirmativo', 'Universal afirmativo', 'Universal negativo', 'Universal afirmativo e negativo'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 32,
    text: '"Se não praticares boas acções não terás vida eterna". Este juízo é:',
    answers: ['Hipotético e condicional', 'Categórico e singular', 'A priori e a posteiori', 'Hipotético e dijsubtivo', 'Categórico e hipotético'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 33,
    text: 'Coloque na sua form padrão a proposição "Muitos adultos não são sábios".',
    answers: ['Alguns adultos são sábios', 'Alguns adultos não são sábios', 'Todos adultos são sábios', 'Nenhum adulto é sábio', 'Nem todos adúltos são sábios.'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 34,
    text: 'A operação mental que permite obter uma verdade desconhecida, partindo de uma ou várias conhecidas chama-se:',
    answers: ['Juízo', 'Conceito', 'Raciocíneo', 'Indução', 'Analogia'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 35,
    text: 'As inferências são aquelas que se obtêm por meio da:',
    answers: ['Oposição e conversão', 'Oposição e analogia', 'Dedução e indução', 'Indução e conversão', 'Oposição e dedução'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 36,
    text: '"Consiste em permutar os termos, mas tornando particular a proposição inferida, a qualidade mantém-se". O trecho refere-se a conversão por:',
    answers: ['Redução', 'Conversa', 'Negação', 'Analogia', 'Limitação'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
  {
    id: 37,
    text: 'O conhecimento ciêntifico caracteriza-se por:',
    answers: ['Objectivo, científico e vulgar', 'Rigoroso, subjectivo e sistemático', 'Objectivo, subsistemático e metodológico', 'Objectivo, sistemático e metodológico', 'Subjectivo, metodológico e sistemático'],
    correct: 0,
    subject: 1,
    level: 1,
    institution: 0,
    year: 2017
  },
];

module.exports = allQuestions;