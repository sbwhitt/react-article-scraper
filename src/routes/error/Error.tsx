import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError() as Error;

  return (
    <div id="error">
      <h1>Error</h1>
      <p>Page not found</p>
      <p>{error.message}</p>
    </div>
  );
}
