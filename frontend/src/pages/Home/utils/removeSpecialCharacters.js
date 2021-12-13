export default function removeSpecialCharacters(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
