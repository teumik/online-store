function capitalizer(string: string) {
  return `${string.trim().slice(0, 1).toLocaleUpperCase()}${string.trim().slice(1)}`;
}

function deCapitalizer(string: string) {
  return `${string.trim().slice(0, 1).toLocaleLowerCase()}${string.trim().slice(1)}`;
}

export { capitalizer, deCapitalizer };
