const Desktop = () => {
  return (
    <div className="w-full h-full min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center transition-opacity duration-1000">
      <h1 className="text-5xl font-bold mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        BioOS
      </h1>
      <p className="text-slate-400 font-mono">
        Masaüstü ortamı başlatıldı. 3D cihaz bekleniyor...
      </p>
    </div>
  );
};

export default Desktop;
