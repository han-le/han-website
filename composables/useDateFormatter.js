export const useDateFormatter = () => {
  function format(inputDate) {
    return new Date(inputDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  return {
    format
  }
}
