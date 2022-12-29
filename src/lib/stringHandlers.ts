function capitalizer(string: string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function deCapitalizer(string: string) {
  return `${string.charAt(0).toLowerCase()}${string.slice(1)}`;
}

export { capitalizer, deCapitalizer };
