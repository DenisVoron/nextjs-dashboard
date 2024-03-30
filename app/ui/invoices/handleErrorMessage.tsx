export default function handleErrorMessage(message: string[]): JSX.Element[] {
  return message.map((error: string) => (
    <p className="mt-2 text-sm text-red-500" key={error}>
      {error}
    </p>
  ));
}
