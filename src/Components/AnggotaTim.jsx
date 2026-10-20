
export default function AngotaTim({ nama, jabatan, tahun, aktif }) {
  return (
    <article className="kartu">
      <h3>{nama}</h3>
      <p>{jabatan} - angkatan {tahun}</p>
      {aktif
        ? <span className="lencana">Aktif</span>
        : <span className="lencana off">Tidak aktif</span>}
    </article>
  );
}
