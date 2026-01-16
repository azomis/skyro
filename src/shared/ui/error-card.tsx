import { Link } from 'react-router-dom';

type ErrorCardProps = {
  icon?: string;
  title: string;
  message: string;
  backTo?: string;
  backLabel?: string;
  showBackButton?: boolean;
};

export function ErrorCard({
  icon = '😕',
  title,
  message,
  backTo = '/',
  backLabel = 'Back to search',
  showBackButton,
}: ErrorCardProps) {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-8 text-center shadow-md">
      <div className="mb-4 text-5xl">{icon}</div>

      <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>

      <p className={showBackButton ? 'mb-6 text-gray-500' : 'text-gray-500'}>
        {message}
      </p>

      {showBackButton && (
        <Link
          to={backTo}
          className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2.5 text-white transition-colors hover:bg-blue-600"
        >
          <span>←</span>
          {backLabel}
        </Link>
      )}
    </div>
  );
}
