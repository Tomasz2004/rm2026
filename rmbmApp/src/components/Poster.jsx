import Przewo from './Przewo';
import Czlonek from './Czlonek';

export default function Poster() {
  const czlonkowie = [
    {
      zdjecie: '/dawidcyb.jpeg',
      nazwa: 'SPECJALISTA DS. BETONOWANIA',
      moc: '95% Efektywności',
      funkcja: 'Mistrz Mikserem',
      ikona: '🪛',
    },
    {
      zdjecie: '/oskar.jpeg',
      nazwa: 'EKSPERT POMIAROWY',
      moc: 'Co do Milimetra',
      funkcja: 'Geometra Terenowy',
      ikona: '📐',
    },
    {
      zdjecie: '/dawidsid.jpeg',
      nazwa: 'MISTRZ WYKOŃCZENIOWY',
      moc: 'Premium Finish',
      funkcja: 'Malarz-Tapeciarz',
      ikona: '🖌️',
    },
    {
      zdjecie: '/szymon.jpeg',
      nazwa: 'ELEKTRYK DYŻURNY',
      moc: 'Pod Wysokim',
      funkcja: 'Instalator Światła',
      ikona: '🔌',
    },
    {
      zdjecie: '/krzysiek.jpeg',
      nazwa: 'HYDRAULIK RATUNKOWY',
      moc: '100% Gwarancji',
      funkcja: 'Pogromca Przecieków',
      ikona: '🔧',
    },
    {
      zdjecie: '/martyna.jpg',
      nazwa: 'KOORDYNATOR LOGISTYKI',
      moc: 'Perfekcyjna',
      funkcja: 'Magazynier-Szef',
      ikona: '📋',
    },
  ];

  return (
    <div className='poster'>
      {/* Dekoracyjne cenówki w tle */}
      <div className='bg-decoration'>
        <div className='price-tag red' style={{ top: '5%', left: '5%' }}>
          -50%
        </div>
        <div className='price-tag yellow' style={{ top: '10%', right: '8%' }}>
          MEGA!
        </div>
        <div className='price-tag red' style={{ top: '45%', left: '3%' }}>
          HIT!
        </div>
        <div
          className='price-tag yellow'
          style={{ bottom: '15%', right: '5%' }}
        >
          OKAZJA
        </div>
        <div className='price-tag red' style={{ bottom: '10%', left: '8%' }}>
          TOP!
        </div>
        <div className='price-tag yellow' style={{ top: '30%', right: '2%' }}>
          NOWOŚĆ
        </div>
      </div>

      <div className='content'>
        {/* Nagłówek */}
        <div className='header'>
          <div className='logo'>🏗️ Sklep Budowlany</div>
          <div className='subtitle'>Rada Mieszkańców DS Bratniak-Muszelka</div>
        </div>

        {/* Główny produkt - Przewodnicząca */}
        <Przewo />

        {/* Sekcja akcesoriów */}
        <div className='accessories-section'>
          <div className='section-title'>
            🔧 W ZESTAWIE TANIEJ - AKCESORIA NIEZBĘDNE 🔨
          </div>

          <div className='accessories-grid'>
            {czlonkowie.map((czlonek, index) => (
              <Czlonek
                key={index}
                zdjecie={czlonek.zdjecie}
                nazwa={czlonek.nazwa}
                moc={czlonek.moc}
                funkcja={czlonek.funkcja}
                ikona={czlonek.ikona}
              />
            ))}
          </div>
        </div>

        {/* Banner promocyjny */}
        <div className='promo-banner'>
          ⚠️ KUPUJĄC CAŁY ZESPÓŁ = GRATIS: DOBRY HUMOR I ZAANGAŻOWANIE! ⚠️
        </div>
      </div>
    </div>
  );
}
