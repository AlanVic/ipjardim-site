export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-verde-medio uppercase tracking-widest text-xs font-bold">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-verde-escuro mt-3 mb-5">
            Sobre a Nossa Igreja
          </h2>
          <div className="w-16 h-1 bg-verde-medio mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A <strong className="text-verde-escuro">Igreja Presbiteriana do Jardim</strong> é
              uma igreja centrada no Evangelho, comprometida com o ensino expositivo
              das Escrituras e com a formação de discípulos de Jesus Cristo.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Fundada em 2019, somos uma família que cresce na graça, pratica a comunhão
              e alcança nossa comunidade — por meio da pregação fiel da Palavra, da oração
              e do serviço ao próximo.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Seja você da vizinhança ou de longe — há um lugar para você aqui. 🌱
            </p>
          </div>

          {/* Cards de valores */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: "✝️",
                titulo: "Nossa Missão",
                texto:
                  "Proclamar o Evangelho de Jesus Cristo, fazer discípulos e edificar a Igreja para a glória de Deus.",
              },
              {
                icon: "👁️",
                titulo: "Nossa Visão",
                texto:
                  "Ser uma comunidade de fé vibrante, que transforma vidas e impacta nossa cidade com o amor de Cristo.",
              },
              {
                icon: "📖",
                titulo: "Nossos Valores",
                texto:
                  "A Bíblia como regra suprema de fé e prática; oração, comunhão, serviço e missão.",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="flex gap-5 p-5 rounded-2xl bg-verde-suave border border-verde-claro/20 hover:shadow-md transition-shadow"
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-verde-escuro mb-1">{item.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto">
          {[
            { num: "2019", label: "Ano de Fundação" },
            { num: "✝️", label: "Fundados no Evangelho" },
          ].map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-verde-primario to-verde-medio text-white"
            >
              <div className="text-3xl font-black mb-1">{s.num}</div>
              <div className="text-sm font-medium opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
