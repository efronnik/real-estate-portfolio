<template>
  <div class="canva-style-page">
    <NuxtRouteAnnouncer />
    <main>
      <section class="cover-hero">
        <div class="cover-overlay">
          <div class="cover-main">
            <h1>Patrycja Szewczyk</h1>
            <p>Ekspert inwestycji i sprzedazy · Warszawa</p>
            <img
              src="/images/compass-log.png?v=2"
              alt="Compass logo"
              class="hero-compass-logo"
              @error="handleLogoError"
            />
          </div>
          <div class="cover-tags">
            <span>SPRZEDAZ</span>
            <span>INWESTYCJE</span>
            <span>STRATEGIA</span>
          </div>
        </div>
      </section>

      <section id="o-mnie" class="about-section">
        <p class="about-watermark">O MNIE</p>
        <div class="about-layout">
          <div class="about-copy">
            <p>
              Nazywam sie Patrycja Szewczyk. Od lat zajmuje sie inwestowaniem,
              sprzedaza i przygotowaniem nieruchomosci tak, aby realnie zarabialy.
              Wypracowalam autorski model dzialania, ktory laczy sprzedaz
              nieruchomosci z podejsciem inwestycyjnym. Dzieki temu nie dzialam
              schematycznie, tylko zawsze szukam najlepszego scenariusza dla
              konkretnej nieruchomosci i klienta.
            </p>
            <p>
              Ponad 17 lat temu sama przeszlam przez proces sprzedazy nieruchomosci
              jako wlasciciel. Znam ten proces od srodka: emocje, decyzje i
              wyzwania. Dzis prowadze wspolprace osobiscie od pierwszej analizy po
              finalizacje, laczac doswiadczenie rynkowe z podejsciem inwestycyjnym.
            </p>
            <p>
              Analizuje realna wartosc nieruchomosci na podstawie cen transakcyjnych,
              oceniam potencjal inwestycyjny i dobieram najlepsza strategie:
              sprzedaz bez zmian albo przygotowanie pod wyzsza cene. Nie kazda
              nieruchomosc powinna byc sprzedana "tak jak stoi" - czasem odpowiednie
              przygotowanie pozwala znacznaco zwiekszyc jej wartosc.
            </p>
            <p>
              Wspolpracuje zarowno ze sprzedajacymi, jak i inwestorami. Jesli
              sprzedajesz, maksymalizuje wartosc Twojej nieruchomosci i prowadze
              proces od poczatku do konca. Jesli inwestujesz, znajduje nieruchomosci
              z potencjalem i analizuje ich oplacalnosc.
            </p>
            <p>
              Lacze doswiadczenie w sprzedazy, remontach, flipach i przygotowaniu
              nieruchomosci do rynku. Dzialam takze miedzynarodowo - swobodnie
              komunikuje sie po angielsku, niemiecku i wlosku, co daje szerszy zasieg
              sprzedazy i dostep do wiekszej grupy kupujacych.
            </p>
          </div>
          <div class="about-figure" aria-hidden="true"></div>
        </div>
      </section>

      <section ref="proofSectionRef" class="proof-section">
        <div class="proof-stats-panel">
          <div class="proof-stats" :class="{ open: isCommissionOpen }">
            <article>
              <strong>{{ statsDisplay.marketYears }}</strong>
              <span>LAT NA RYNKU</span>
            </article>
            <article>
              <strong>1:1</strong>
              <span>ZAWSZE JA, NIE ZESPOL</span>
            </article>
            <article>
              <button
                class="stat-commission-toggle"
                type="button"
                @click="isCommissionOpen = !isCommissionOpen"
                :aria-expanded="isCommissionOpen ? 'true' : 'false'"
              >
                <strong>{{ statsDisplay.commission }}</strong>
                <span>TYLKO OD SPRZEDAJACEGO</span>
                <em>{{
                  isCommissionOpen
                    ? 'Kliknij, aby ukryc szczegoly ▲'
                    : 'Kliknij, aby rozwinac szczegoly ▼'
                }}</em>
              </button>
            </article>
            <article>
              <strong>{{ statsDisplay.languages }}</strong>
              <span>JEZYKI OBCE</span>
            </article>
          </div>

          <div class="proof-dark" :class="{ open: isCommissionOpen }">
            <p>
              Prowizja tylko jednostronna - od sprzedajacego. Kupujacy nie placi nic.
              To oznacza wieksza grupe zainteresowanych i szybsza sprzedaz.
            </p>
          </div>
        </div>

        <div class="proof-bottom">
          <p>
            Wiekszosc wlascicieli sprzedaje ponizej realnej wartosci. Nie dlatego,
            ze rynek jest zly - ale dlatego, ze nikt im nie pokazal wlasciwej
            strategii i nie ustalil ceny we wlasciwy sposob.
          </p>
        </div>
      </section>

      <section id="oferta" class="list-section">
        <h3>Co moge dla Ciebie zrobic?</h3>
        <div class="offer-shell">
          <div class="offer-backdrop">
            <article
              v-for="(offer, idx) in offerItems"
              :key="`offer-card-${idx}`"
              class="offer-card"
              :class="getOfferClassByOffset(getOfferOffset(idx))"
              @click="handleOfferCardClick(idx)"
            >
              <small v-if="idx === offerIndex">{{ String(offerIndex + 1).padStart(2, '0') }} / 06</small>
              <h4>{{ offer.title }}</h4>
              <p v-if="idx === offerIndex">{{ offer.description }}</p>
            </article>
          </div>

          <div class="offer-arrows">
            <button type="button" aria-label="Poprzedni slajd" @click="prevOffer">
              <span class="offer-arrow-glyph offer-arrow-glyph-left" aria-hidden="true"></span>
            </button>
            <button type="button" aria-label="Nastepny slajd" @click="nextOffer">
              <span class="offer-arrow-glyph offer-arrow-glyph-right" aria-hidden="true"></span>
            </button>
          </div>

          <div class="offer-proof-copy">
            <p>
              Chcesz sprzedac nieruchomosc jak najdrozej?
              Mam sprawdzona metode - nie przypadek.
            </p>
          </div>
        </div>
      </section>

      <section ref="methodSectionRef" class="method-section">
        <div class="method-shell">
          <div class="method-shell-head">
            <div>
              <h3>Moja autorska metoda</h3>
            </div>
          </div>

          <div class="method-flow">
            <article
              v-for="(step, idx) in methodItems"
              :key="`method-step-${idx}`"
              class="method-step"
              :class="{ reverse: idx % 2 === 1 }"
            >
              <div class="method-step-art" aria-hidden="true">
                <img :src="step.image" alt="" />
              </div>
              <div class="method-step-copy">
                <small>{{ String(idx + 1).padStart(2, '0') }}</small>
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
                <div class="method-progress-line" aria-hidden="true">
                  <span :style="{ width: `${methodProgressValues[idx] ?? 0}%` }"></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="competence-section">
        <div class="competence-intro">
          <p>PROFESJONALIZM I DOSWIADCZENIE</p>
          <h3>MOJE KOMPETENCJE</h3>
        </div>

        <div class="competence-awards">
          <article>
            <h4>17 LAT</h4>
            <p>Doswiadczenia na rynku nieruchomosci</p>
          </article>
          <article>
            <h4>WYCENA</h4>
            <p>Oparta na danych transakcyjnych</p>
          </article>
          <article>
            <h4>STRATEGIA</h4>
            <p>Sprzedazy dopasowana do nieruchomosci</p>
          </article>
          <article>
            <h4>REMONTY</h4>
            <p>Doswiadczenie w podnoszeniu wartosci</p>
          </article>
          <article>
            <h4>HOME STAGING</h4>
            <p>Przygotowanie wizualne nieruchomosci</p>
          </article>
          <article>
            <h4>PROCES 1:1</h4>
            <p>Prowadzenie od analizy do finalizacji</p>
          </article>
        </div>

      </section>

      <footer class="page-footer">
        <div class="footer-top">
          <div class="footer-brand">
            <h3>Patrycja Szewczyk</h3>
            <p class="footer-brand-role">EKSPERT INWESTYCJI I SPRZEDAZY · WARSZAWA</p>
            <img
              class="footer-brand-logo"
              src="/images/compass-log.png"
              alt="Logo Patrycja Szewczyk"
              @error="handleLogoError"
            />
          </div>
          <div class="footer-contact-grid">
            <div class="footer-contact-item">
              <span class="footer-icon-label" aria-hidden="true">
                <svg viewBox="0 0 64 44" role="img" focusable="false">
                  <rect x="2" y="2" width="60" height="40" rx="2" fill="none" stroke="currentColor" stroke-width="3"/>
                  <path d="M4 5l28 22L60 5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <a href="mailto:Compasgroup.info@gmail.com">Compasgroup.info@gmail.com</a>
            </div>
          </div>
          <div class="footer-phone footer-contact-item">
            <span class="footer-icon-label" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.29a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <a href="tel:+48577154116">577 154 116</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-powered">Powered by Patrycja Szewczyk</p>
          <p class="footer-copy">Copyright © {{ new Date().getFullYear() }} | Privacy Policy</p>
          <div class="footer-socials" aria-label="Social links">
            <a class="footer-social-link footer-social-icon" href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H16.7V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7v3h3v8h3.5z" fill="currentColor"/>
              </svg>
            </a>
            <a class="footer-social-link footer-social-icon" href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8"/>
                <circle cx="17.25" cy="6.75" r="1.2" fill="currentColor"/>
              </svg>
            </a>
            <a class="footer-social-link footer-social-icon" href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <rect x="4.1" y="9.5" width="3.2" height="10.2" fill="currentColor"/>
                <circle cx="5.7" cy="6.3" r="1.85" fill="currentColor"/>
                <path d="M9.8 9.5h3.1v1.4c.7-1.1 1.9-1.8 3.6-1.8 3 0 4.4 2 4.4 5.2v5.4h-3.2v-4.9c0-1.5-.5-2.5-1.9-2.5-1.5 0-2.2 1-2.2 2.5v4.9H9.8V9.5z" fill="currentColor"/>
              </svg>
            </a>
            <a class="footer-social-link footer-social-icon footer-social-icon-x" href="https://x.com/" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" role="img" focusable="false" aria-hidden="true">
                <path d="M18.25 4h2.85l-6.22 7.1L22.2 20h-5.73l-4.49-5.87L6.84 20H4l6.65-7.59L3.62 4h5.87l4.05 5.35L18.25 4z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
const isCommissionOpen = ref(false)
const offerIndex = ref(0)
const proofSectionRef = ref(null)
const methodSectionRef = ref(null)
const hasStatsAnimated = ref(false)
const methodProgressValues = ref([])
const animatedStats = ref({
  marketYears: 0,
  commission: 0,
  languages: 0,
})

const statsDisplay = computed(() => {
  return {
    marketYears: `${animatedStats.value.marketYears}+`,
    commission: `${animatedStats.value.commission}%`,
    languages: String(animatedStats.value.languages),
  }
})

const animateNumber = (key, target, duration = 1200) => {
  const start = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    animatedStats.value[key] = Math.round(target * eased)
    if (progress < 1) {
      requestAnimationFrame(tick)
    }
  }
  requestAnimationFrame(tick)
}

const runStatsAnimation = () => {
  if (hasStatsAnimated.value) return
  hasStatsAnimated.value = true
  animateNumber("marketYears", 17, 1900)
  animateNumber("commission", 2, 1500)
  animateNumber("languages", 3, 1700)
}
const offerItems = [
  {
    title: "Analiza realnej wartosci nieruchomosci",
    description:
      "Oceniam wartosc na podstawie realnych danych transakcyjnych, nie ogolnych porownan.",
    imagePosition: "46% 36%",
    image: "/images/offer-1.jpg",
  },
  {
    title: "Ocena potencjalu inwestycyjnego",
    description:
      "Sprawdzam, czy przygotowanie nieruchomosci zwiekszy wartosc i czy to sie realnie oplaca.",
    imagePosition: "58% 42%",
    image: "/images/offer-2.jpg",
  },
  {
    title: "Strategia: sprzedaz od razu lub przygotowanie",
    description:
      "Dobieram scenariusz do konkretnej nieruchomosci i celu finansowego wlasciciela.",
    imagePosition: "64% 38%",
    image: "/images/offer-3.jpg",
  },
  {
    title: "Prowadzenie procesu od poczatku do konca",
    description:
      "Od wyceny i oferty po negocjacje oraz finalizacje - prowadzisz to ze mna, nie z posrednikami.",
    imagePosition: "50% 58%",
    image: "/images/offer-4.jpg",
  },
  {
    title: "Wspolpraca dla sprzedajacych i inwestorow",
    description:
      "Lacze perspektywe sprzedazy i inwestowania, dzieki czemu strategia jest bardziej precyzyjna.",
    imagePosition: "40% 50%",
    image: "/images/offer-5.jpg",
  },
  {
    title: "Komunikacja: PL / EN / DE / IT",
    description:
      "Komunikuje sie plynnie w jezykach: polskim, angielskim, niemieckim i wloskim.",
    imagePosition: "62% 52%",
    image: "/images/offer-6.jpg",
  },
]

const methodItems = [
  {
    title: "Analiza cen transakcyjnych",
    description:
      "Nie porownuje ofert - analizuje realne ceny sprzedazy. Wiesz dokladnie, ile jest warta Twoja nieruchomosc.",
    tags: ["Ceny transakcyjne", "Pozycjonowanie ceny", "Wartosc realna"],
    image: "/images/method-illustration-1.svg",
  },
  {
    title: "Strategia: sprzedac czy przygotowac?",
    description:
      "Oceniam potencjal i wspolnie decydujemy, czy warto zainwestowac w przygotowanie, zeby uzyskac wyzsza cene.",
    tags: ["Scenariusz sprzedazy", "Zakres przygotowania", "Maksymalizacja ceny"],
    image: "/images/method-illustration-2.svg",
  },
  {
    title: "Weryfikacja kupujacych",
    description:
      "Sprawdzam zainteresowanych - na prezentacje przychodza tylko osoby realnie gotowe do zakupu. Mniej chaosu, szybsze decyzje i krotszy czas sprzedazy.",
    tags: ["Selekcja leadow", "Gotowosc finansowa", "Lepsze negocjacje"],
    image: "/images/method-illustration-3.svg",
  },
  {
    title: "Etapowe monitorowanie ceny",
    description:
      "Cena jest korygowana na kazdym etapie zgodnie z rynkiem - zeby nie stracic ani zlotowki.",
    tags: ["Kontrola popytu", "Dane rynkowe", "Szybka korekta"],
    image: "/images/method-illustration-4.svg",
  },
  {
    title: "Prowadze caly proces - ja osobiscie",
    description:
      "Od wyceny po finalizacje. Bezposredni kontakt ze mna - nie z asystentem, nie z zespolem.",
    tags: ["Prowadzenie 1:1", "Negocjacje", "Finalizacja transakcji"],
    image: "/images/method-illustration-5.svg",
  },
]

methodProgressValues.value = methodItems.map(() => 0)

let methodScrollRaf = null

const updateMethodProgressFromScroll = () => {
  const section = methodSectionRef.value
  if (!section) return
  const stepElements = Array.from(section.querySelectorAll(".method-step"))
  if (!stepElements.length) return

  const viewportCenter = window.innerHeight / 2
  methodProgressValues.value = stepElements.map((step) => {
    if (!(step instanceof HTMLElement)) return 0
    const rect = step.getBoundingClientRect()
    const start = rect.top
    const end = rect.bottom
    const progress = (viewportCenter - start) / Math.max(end - start, 1)
    const clamped = Math.max(0, Math.min(1, progress))
    return Math.round(clamped * 100)
  })
}

const handleMethodScrollProgress = () => {
  if (methodScrollRaf) cancelAnimationFrame(methodScrollRaf)
  methodScrollRaf = requestAnimationFrame(() => {
    updateMethodProgressFromScroll()
    methodScrollRaf = null
  })
}

const goToOffer = (idx) => {
  offerIndex.value = idx
}

const prevOffer = () => {
  offerIndex.value =
    offerIndex.value === 0 ? offerItems.length - 1 : offerIndex.value - 1
}

const nextOffer = () => {
  offerIndex.value = (offerIndex.value + 1) % offerItems.length
}

const getOfferOffset = (idx) => {
  const total = offerItems.length
  let offset = idx - offerIndex.value
  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total
  return offset
}

const getOfferClassByOffset = (offset) => {
  if (offset === 0) return "offer-card-center"
  if (offset === -1) return "offer-card-left"
  if (offset === 1) return "offer-card-right"
  if (offset === -2) return "offer-card-far-left"
  if (offset === 2) return "offer-card-far-right"
  return "offer-card-hidden"
}

const handleOfferCardClick = (idx) => {
  const offset = getOfferOffset(idx)
  if (offset === -1) {
    prevOffer()
    return
  }
  if (offset === 1) {
    nextOffer()
    return
  }
  if (offset !== 0) goToOffer(idx)
}

const handleLogoError = (event) => {
  const img = event.target
  if (!(img instanceof HTMLImageElement)) return
  if (img.dataset.retryDone === "1") return
  img.dataset.retryDone = "1"
  img.src = `/images/compass-log.png?v=2&retry=${Date.now()}`
}

onMounted(() => {
  const section = proofSectionRef.value
  if (!section || typeof IntersectionObserver === "undefined") {
    runStatsAnimation()
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          runStatsAnimation()
          observer.disconnect()
          break
        }
      }
    },
    {
      threshold: 0.35,
    }
  )

  observer.observe(section)
})

onMounted(() => {
  const section = methodSectionRef.value
  if (!section) return

  updateMethodProgressFromScroll()
  window.addEventListener("scroll", handleMethodScrollProgress, { passive: true })
  window.addEventListener("resize", handleMethodScrollProgress)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleMethodScrollProgress)
  window.removeEventListener("resize", handleMethodScrollProgress)
  if (methodScrollRaf) {
    cancelAnimationFrame(methodScrollRaf)
    methodScrollRaf = null
  }
})
</script>
