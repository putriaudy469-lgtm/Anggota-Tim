
import AngotaTim from "./Components/AnggotaTim.jsx";

export default function App() {
  return (
    <main>
      <h1>Daftar Anggota Tim</h1>
      <AngotaTim nama="Audy" jabatan="Ketua Tim" tahun={2025} aktif={true} />
      <AngotaTim nama="Budi" jabatan="Programmer" tahun={2024} aktif={true} />
      <AngotaTim nama="Citra" jabatan="Desainer" tahun={2026} aktif={false} />
    </main>
  );
}
