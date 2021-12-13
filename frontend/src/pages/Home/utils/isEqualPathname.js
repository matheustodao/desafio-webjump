export default function historyNavigation(array, name) {
  const index = array.findIndex((item) => (item === name && item));
  const path = array.slice(0, index + 1);

  return `/${path.join().replaceAll(',', '/')}`;
}
