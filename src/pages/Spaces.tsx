import { useAuth } from '../hooks/useAuth';

export function Spaces() {
  const { logout } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Spaces</h1>
      <button
        onClick={logout}
        className="mt-4 text-sm text-red-500 hover:underline"
      >
        Sair
      </button>
    </div>
  );
}