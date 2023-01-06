function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const deleteQuery = (target: string | null, [a, b]: string[]) => {
    if (target !== null && target !== a && target !== b) {
      url.searchParams.delete(Object.keys({ target })[0]);
      globalThis.location.replace(url.href);
    }
  };
  const isFake = (name: string) => !['search', 'view', 'sort', 'type', 'category', 'brand'].includes(name);

  const view = url.searchParams.get('view');
  const sort = url.searchParams.get('sort');
  const type = url.searchParams.get('type');

  deleteQuery(view, ['list', 'grid']);
  deleteQuery(sort, ['price', 'count']);
  deleteQuery(type, ['up', 'down']);

  Array.from(url.searchParams
    .entries())
    .map((q) => {
      if (isFake(q[0])) {
        url.searchParams.delete(q[0]);
        globalThis.location.replace(url.href);
        return false;
      }
      return true;
    });

  return null;
}

export default loader;
