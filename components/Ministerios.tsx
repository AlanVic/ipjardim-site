const ministerios = [
  {
    emoji: "🧒",
    nome: "Crianças",
    descricao:
      "Um ambiente seguro e divertido onde nossas crianças aprendem sobre Jesus e a Bíblia de forma lúdica e amorosa.",
    cor: "from-orange-400 to-orange-500",
  },
  {
    emoji: "🎸",
    nome: "Jovens",
    descricao:
      "Espaço de comunhão, estudo bíblico e missão para jovens que desejam crescer na fé e servir a Cristo.",
    cor: "from-verde-primario to-verde-medio",
  },
  {
    emoji: "👨‍👩‍👧‍👦",
    nome: "Família",
    descricao:
      "Suporte e recursos para casais e famílias edificarem seus lares sobre o alicerce da Palavra de Deus.",
    cor: "from-blue-500 to-blue-600",
  },
  {
    emoji: "🎵",
    nome: "Louvor e Música",
    descricao:
      "Músicos e cantores comprometidos em liderar a congregação em adoração autêntica e reverente a Deus.",
    cor: "from-purple-500 to-purple-600",
  },
  {
    emoji: "🤲",
    nome: "Diaconia",
    descricao:
      "Servindo aos mais vulneráveis da nossa comunidade com ações de misericórdia, assistência e amor prático.",
    cor: "from-red-500 to-red-600",
  },
  {
    emoji: "🌍",
    nome: "Missões",
    descricao:
      "Comprometidos com o mandato missionário, apoiando e enviando obreiros para alcançar os que nunca ouviram.",
    cor: "from-teal-500 to-teal-600",
  },
];

export default function Ministerios() {
  return (
    <section id="ministerios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
            Como Servimos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-verde-escuro mt-3 mb-5">
            Nossos Ministérios
          </h2>
          <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            Cada pessoa tem um lugar de serviço. Conheça como você pode se envolver e
            crescer na nossa comunidade.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministerios.map((m) => (
            <div
              key={m.nome}
              className="group rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${m.cor} p-6 flex items-center gap-4`}>
                <span className="text-4xl">{m.emoji}</span>
                <h3 className="text-white font-black text-xl">{m.nome}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 text-sm leading-relaxed">{m.descricao}</p>
                <a
                  href="#contato"
                  className="inline-block mt-4 text-verde-primario text-sm font-bold hover:underline"
                >
                  Saber mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
