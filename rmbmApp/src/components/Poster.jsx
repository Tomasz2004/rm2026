import Czlonek from './Czlonek';
import czlonkowie from '../consts/czlonkowie.jsx';

export default function Poster() {
  return (
    <div className='poster'>
      {/* Nagłówek - Tablica Informacyjna */}
      <div className='header'>
        <h1 className='logo'>TABLICA INFORMACYJNA</h1>
      </div>

      {/* Sekcja informacji */}
      <div className='info-section'>
        <div className='info-container'>
          <div className='info-detail'>
            NAZWA: <span>RADA MIESZKAŃCÓW</span>
          </div>
          <div className='info-detail'>
            AKADEMIK: <span>DS BRATNIAK-MUSZELKA</span>
          </div>
          <div className='info-detail'>
            KADENCJA: <span>2026</span>
          </div>
          <div className='info-detail'>
            PRZEWODNICZĄCA: <span>IZABELA GOLBA</span>
          </div>
          <div className='info-detail'>
            KIEROWNIK BUDOWY: <span>DAWID CYBULSKI</span>
          </div>
          <div className='info-detail'>
            KIEROWNIK ROBÓT: <span>OSKAR BIWEJNIS</span>
          </div>
          <div className='info-detail'>
            INSPEKTOR NADZORU: <span>DAWID SIDOROWICZ</span>
          </div>
          <div className='info-detail'>
            PROJEKTANT: <span>SZYMON ŻACZEK</span>
          </div>
          <div className='info-detail'>
            WYKONAWCA: <span>KRZYSZTOF WRÓBEL</span>
          </div>
          <div className='info-detail'>
            TECHNIK BHP: <span>MARTYNA POPŁAWSKA</span>
          </div>
        </div>
      </div>

      {/* Sekcja tytułu członków */}
      <div className='members-section-title'>
        <h2 className='section-label'>CZŁONKOWIE RADY</h2>
      </div>

      {/* Grid członków */}
      <div className='members-grid'>
        {/* Pierwszy członek - Przewodnicząca na środku */}
        <div className='member-featured'>
          <Czlonek
            zdjecie={czlonkowie[0].zdjecie}
            nazwa={czlonkowie[0].nazwa}
            imieNazwisko={czlonkowie[0].imieNazwisko}
          />
        </div>

        {/* Pozostali członkowie w siatce 3x2 */}
        <div className='members-regular'>
          {czlonkowie.slice(1).map((czlonek, index) => (
            <Czlonek
              key={index + 1}
              zdjecie={czlonek.zdjecie}
              nazwa={czlonek.nazwa}
              imieNazwisko={czlonek.imieNazwisko}
            />
          ))}
        </div>
      </div>

      {/* Stopka kontakt */}
      <div className='contact-footer'>
        <div className='contact-title'>KONTAKT DO RADY</div>
      </div>
    </div>
  );
}
