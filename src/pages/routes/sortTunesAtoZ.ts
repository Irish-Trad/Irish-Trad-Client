export const sortTunesAtoZ = (
  a: { name: string; path: string },
  b: { name: string; path: string }
) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
