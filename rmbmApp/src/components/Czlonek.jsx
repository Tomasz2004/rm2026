export default function Czlonek({ zdjecie, nazwa, moc, funkcja, ikona }) {
  return (
    <div className='accessory-card'>
      <div className='accessory-photo'>
        <img src={zdjecie} alt={nazwa} />
      </div>
      <div className='accessory-name'>{nazwa}</div>
      <div className='accessory-spec'>⚡ Moc: {moc}</div>
      <div className='accessory-spec'>🎯 Funkcja: {funkcja}</div>
      <div className='tool-icon'>{ikona}</div>
    </div>
  );
}
