export default function Sobre() {
  const pilares = [
    {
      icon: "📜",
      titulo: "Confissão Centrada no Evangelho",
      resumo:
        "Nossa fé é histórica e confessional, vinculada à tradição reformada presbiteriana e aos Símbolos de fé de Westminster. Sabendo que fomos salvos puramente pela graça, rejeitamos a ortodoxia soberba, o legalismo e o sectarismo.",
    },
    {
      icon: "⛪",
      titulo: "Culto Centrado no Evangelho",
      resumo:
        "A liturgia e a adoração conduzem o povo pela história da redenção. Por meio da pregação bíblica expositiva, somos constantemente lembrados de nossa insuficiência e da suficiência plena de Cristo.",
    },
    {
      icon: "🤝",
      titulo: "Comunidade Centrada no Evangelho",
      resumo:
        "O amor que brota da cruz gera uma embaixada da nova criação: uma família de fé marcada pelo discipulado, pela comunhão dos santos e pelo serviço mútuo e à cidade.",
    },
    {
      icon: "🌍",
      titulo: "Cosmovisão Centrada no Evangelho",
      resumo:
        "Fundamentados na Criação, Queda, Redenção e Consumação, dialogamos com a cultura em três frentes: Missão (esperança às nações), Apologética (defesa da verdade) e Engajamento Cultural (construção do belo e do justo).",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Quem Somos */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
            Identidade & Propósito
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-verde-escuro mt-3 mb-6">
            Quem Nós Somos
          </h2>
          <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full mb-8" />
          
          <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
            Somos uma igreja <span className="text-verde-primario font-bold">cristã, reformada e presbiteriana</span>, 
            intencionalmente centrada no Evangelho, engajada na adoração, no ensino, discipulado e na missão.
          </p>
        </div>

        {/* Quem Almejamos Ser */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-black text-verde-escuro mb-3">
              Quem Almejamos Ser
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Cremos que o Evangelho de Cristo deve ser o fundamento de tudo o que cremos e fazemos. 
              Pela graça de Deus, buscamos ser um corpo marcado por:
            </p>
          </div>

          {/* Cards dos 4 Pilares */}
          <div className="grid md:grid-cols-2 gap-8">
            {pilares.map((pilar) => (
              <div
                key={pilar.titulo}
                className="p-8 rounded-3xl bg-verde-suave/60 border border-verde-claro/30 hover:border-verde-medio hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 border border-verde-claro/20">
                  {pilar.icon}
                </div>
                <h4 className="text-xl font-bold text-verde-escuro mb-3">
                  {pilar.titulo}
                </h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {pilar.resumo}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fundação e Destaque */}
        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
          {[
            { num: "2019", label: "Ano de Fundação" },
            { num: "PB", label: "Campina Grande" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-verde-primario to-verde-medio text-white shadow-sm"
            >
              <div className="text-3xl font-black mb-1">{s.num}</div>
              <div className="text-sm font-medium opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
