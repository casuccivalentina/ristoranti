import { Link } from "react-router-dom"

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">

    <div className="max-w-4xl mx-auto">
                <Link
                      to="/"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-10"
                >
                  ← Home
                </Link>

        <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-4">
          Legal
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-14">
          Privacy Policy
        </h1>

        <div className="space-y-14 text-gray-300 leading-relaxed">

          {/* INTRO */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Informazioni generali
            </h2>

            <p>
              La presente Privacy Policy descrive le modalità di gestione
              dei dati personali degli utenti che visitano questo sito web
              e che contattano i ristoranti tramite i canali presenti
              all’interno del sito.
            </p>

          </section>

          {/* DATI */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Dati raccolti
            </h2>

            <p>
              Il sito non raccoglie direttamente dati personali tramite form,
              registrazioni o aree riservate.
            </p>

            <p className="mt-4">
              Alcuni dati possono essere condivisi volontariamente
              dall’utente tramite:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">

              <li>telefonate dirette ai ristoranti</li>

              <li>email inviate ai contatti presenti sul sito</li>

              <li>messaggi inviati tramite WhatsApp</li>

            </ul>

          </section>

          {/* WHATSAPP */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Comunicazioni WhatsApp
            </h2>

            <p>
              Attraverso il pulsante WhatsApp presente sul sito,
              l’utente può contattare direttamente il ristorante.
            </p>

            <p className="mt-4">
              Con l’accettazione esplicita del consenso,
              l’utente autorizza il ristorante a ricontattarlo
              tramite WhatsApp per:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">

              <li>prenotazioni</li>

              <li>informazioni relative ai servizi</li>

              <li>eventi</li>

              <li>promozioni e offerte commerciali</li>

            </ul>

            <p className="mt-4">
              L’utente può richiedere in qualsiasi momento
              l’interruzione delle comunicazioni.
            </p>

          </section>

          {/* COOKIE */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Cookie
            </h2>

            <p>
              Questo sito non utilizza cookie di profilazione
              o strumenti pubblicitari di terze parti.
            </p>

            <p className="mt-4">
              Potrebbero essere utilizzati esclusivamente cookie tecnici
              necessari al corretto funzionamento del sito.
            </p>

          </section>

          {/* THIRD PARTY */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Servizi di terze parti
            </h2>

            <p>
              Il sito può contenere collegamenti esterni verso servizi
              di terze parti, tra cui:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">

              <li>WhatsApp</li>

              <li>Google Maps</li>

              <li>Instagram</li>

              <li>Facebook</li>

              <li>TikTok</li>

            </ul>

            <p className="mt-4">
              L’utilizzo di tali servizi è soggetto alle rispettive
              privacy policy dei fornitori esterni.
            </p>

          </section>

          {/* RIGHTS */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Diritti dell’utente
            </h2>

            <p>
              L’utente può richiedere in qualsiasi momento:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">

              <li>accesso ai propri dati</li>

              <li>modifica o aggiornamento</li>

              <li>cancellazione dei dati</li>

              <li>interruzione delle comunicazioni commerciali</li>

            </ul>

          </section>

          {/* CONTACT */}

          <section>

            <h2 className="text-2xl font-semibold mb-5 text-white">
              Contatti
            </h2>

            <p>
              Per richieste relative alla privacy o al trattamento dati:
            </p>

            <a
              href="mailto:info@pizzerialagreca.it"
              className="inline-block mt-4 text-white underline"
            >
              info@pizzerialagreca.it
            </a>

          </section>

        </div>

      </div>

    </main>
  )
}