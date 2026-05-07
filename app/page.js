export default function WeddingInvitationMockup() {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-[#2f2f2f] font-serif">
      
      {/* HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop"
          alt="Wedding"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="relative z-10 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-sm mb-6 text-[#7a736c]">
            Nuestra Boda
          </p>

          <h1 className="text-6xl md:text-8xl mb-6 leading-tight">
            Johnathan
            <span className="block text-4xl md:text-5xl my-2">&</span>
            Judith
          </h1>

          <div className="w-24 h-[1px] bg-[#8d857c] mx-auto mb-8"></div>

          <p className="text-lg md:text-xl leading-8 max-w-2xl mx-auto text-[#555] italic">
            “Con gratitud a Dios y rodeados de las personas que más amamos,
            queremos compartir con ustedes el inicio de una nueva etapa en
            nuestras vidas.”
          </p>

          <button className="mt-10 border border-[#8d857c] px-8 py-3 rounded-full tracking-wide hover:bg-[#8d857c] hover:text-white transition-all duration-300">
            Ver Invitación
          </button>
        </div>
      </section>

      {/* COUNTDOWN */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl mb-4">Cuenta Regresiva</h2>
        <p className="text-[#777] mb-12">01 de Agosto del 2026 — 12:00 m</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            ["86", "Días"],
            ["14", "Horas"],
            ["22", "Minutos"],
            ["15", "Segundos"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="bg-[#f7f3ee] rounded-3xl p-8 shadow-sm"
            >
              <div className="text-5xl mb-2">{num}</div>
              <div className="uppercase tracking-widest text-sm text-[#777]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERSE */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl leading-relaxed italic text-[#444]">
            “Y sobre todas estas cosas, vestíos de amor, que es el vínculo
            perfecto.”
          </p>

          <p className="mt-6 uppercase tracking-[0.3em] text-sm text-[#8d857c]">
            Colosenses 3:14
          </p>
        </div>
      </section>

      {/* EVENT */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
            alt="Couple"
            className="rounded-[2rem] shadow-lg h-[500px] object-cover w-full"
          />

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8d857c] mb-4">
              Ceremonia
            </p>

            <h2 className="text-5xl mb-8 leading-tight">
              Queremos celebrar este momento contigo
            </h2>

            <div className="space-y-6 text-lg text-[#555] leading-8">
              <div>
                <strong>Fecha:</strong>
                <p>01 de Agosto del 2026</p>
              </div>

              <div>
                <strong>Hora:</strong>
                <p>12:00 m</p>
              </div>

              <div>
                <strong>Lugar:</strong>
                <p>Av. Guardia Civil 633 — Santiago de Surco</p>
              </div>
            </div>

            <button className="mt-10 bg-[#8d857c] text-white px-8 py-4 rounded-full hover:opacity-90 transition-all">
              Ver Ubicación
            </button>
          </div>
        </div>
      </section>

      {/* DRESS CODE */}
      <section className="py-24 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-[#8d857c] mb-4">
          Dress Code
        </p>

        <h2 className="text-5xl mb-6">Sport Elegante / Elegante</h2>

        <p className="text-[#666] max-w-2xl mx-auto leading-8">
          Nos encantará compartir este día especial contigo en un ambiente
          elegante y armonioso.
        </p>
      </section>

      {/* GIFT */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl mb-8">Mesa de Regalos</h2>

          <p className="text-lg leading-9 text-[#555]">
            Su presencia será nuestro mejor regalo. Sin embargo, si desean
            tener un detalle con nosotros, tendremos una mesa de regalos
            preparada con mucho cariño.
          </p>
        </div>
      </section>

      {/* RSVP */}
      <section className="py-24 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-[#8d857c] mb-4">
          RSVP
        </p>

        <h2 className="text-5xl mb-6">Confirma tu asistencia</h2>

        <p className="text-[#666] text-lg mb-10">
          Hasta el 29 de Julio del 2026
        </p>

        <a
          href="https://wa.me/51992449558"
          target="_blank"
          className="inline-block bg-[#8d857c] text-white px-10 py-4 rounded-full text-lg hover:opacity-90 transition-all"
        >
          Confirmar por WhatsApp
        </a>
      </section>

      {/* PERSONALIZED */}
      <section className="bg-[#efe7de] py-20 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-[#8d857c] mb-6">
          Invitación Personalizada
        </p>

        <h2 className="text-4xl md:text-5xl leading-tight">
          Estimados Carlos y María
        </h2>

        <p className="mt-6 text-[#666] text-lg">
          Será un honor contar con su presencia.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-14 text-center text-[#777] text-sm tracking-wide">
        Johnathan & Judith — 2026
      </footer>
    </div>
  );
}