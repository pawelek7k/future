export const Sidebar = () => {
  return (
    <div className="w-1/4 bg-neutral-100 text-sky-950 h-screen p-4 pt-20">
      <h2 className="text-lg font-semibold mb-4">Ustawienia</h2>
      <ul className="space-y-2">
        <li>
          <a href="#profile" className="block p-2 hover:bg-neutral-200 rounded">
            Profil
          </a>
        </li>
        <li>
          <a href="#account" className="block p-2 hover:bg-neutral-200 rounded">
            Konto
          </a>
        </li>
        <li>
          <a
            href="#notifications"
            className="block p-2 hover:bg-neutral-200 rounded"
          >
            Powiadomienia
          </a>
        </li>
        <li>
          <a
            href="#security"
            className="block p-2 hover:bg-neutral-200 rounded"
          >
            Bezpieczeństwo
          </a>
        </li>
        <li>
          <a href="#privacy" className="block p-2 hover:bg-neutral-200 rounded">
            Prywatność
          </a>
        </li>
        <li>
          <a href="#general" className="block p-2 hover:bg-neutral-200 rounded">
            Ogólne
          </a>
        </li>
      </ul>
    </div>
  );
};
