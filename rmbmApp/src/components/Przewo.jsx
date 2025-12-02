export default function Przewo() {
  return (
    <div className='main-product'>
      <div className='main-photo'>
        <img src='/iza.jpeg' alt='Przewodnicząca' />
      </div>

      <div className='main-description'>
        <div className='main-title'>PRZEWODNICZĄCA RADY</div>

        <div className='specs'>
          <div className='spec-item'>
            <span className='spec-label'>🔋 Moc:</span>
            <span className='spec-value'>100% Energii</span>
          </div>
          <div className='spec-item'>
            <span className='spec-label'>💪 Wytrzymałość:</span>
            <span className='spec-value'>Odporny na Sesję</span>
          </div>
          <div className='spec-item'>
            <span className='spec-label'>🎯 Precyzja:</span>
            <span className='spec-value'>Maksymalna</span>
          </div>
          <div className='spec-item'>
            <span className='spec-label'>⚙️ Funkcja:</span>
            <span className='spec-value'>Kierownik Budowy</span>
          </div>
          <div className='spec-item'>
            <span className='spec-label'>🛠️ Narzędzie:</span>
            <span className='spec-value'>Młotek / Poziomnica</span>
          </div>
        </div>
      </div>
    </div>
  );
}
