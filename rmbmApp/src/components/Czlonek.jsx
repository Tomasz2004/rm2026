export default function Czlonek({ zdjecie, nazwa, imieNazwisko }) {
  return (
    <div className='member-card'>
      <div className='member-photo'>
        <img src={zdjecie} alt={nazwa} />
      </div>
      {imieNazwisko && <div className='member-person'>{imieNazwisko}</div>}
      <div className='member-name'>{nazwa}</div>
    </div>
  );
}
