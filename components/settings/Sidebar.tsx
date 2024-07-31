const sidebarItems = [
  { id: "profile", label: "Profil" },
  { id: "account", label: "Konto" },
  { id: "notifications", label: "Powiadomienia" },
  { id: "security", label: "Bezpieczeństwo" },
  { id: "privacy", label: "Prywatność" },
  { id: "general", label: "Ogólne" },
];

export const Sidebar = () => {
  return (
    <div className="w-1/4 bg-neutral-100 text-sky-950 h-screen p-4 pt-20">
      <h2 className="text-lg font-semibold mb-4">Ustawienia</h2>
      <ul className="space-y-2">
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block p-2 hover:bg-neutral-200 rounded"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
