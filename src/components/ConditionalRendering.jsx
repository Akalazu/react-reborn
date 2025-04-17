export default function ConditionalRendering() {
  const status = true;

  let message = status ? (
    <h1>The status is currently True</h1>
  ) : (
    <h1>The status is currently False</h1>
  );

  return message;
}
