export default function Czlonek({ zdjecie, nazwa }) {
  return (
    <div className='member-card'>
      <div className='member-photo'>
        <img src={zdjecie} alt={nazwa} />
      </div>
      <div className='member-name'>{nazwa}</div>
    </div>
  );
}
