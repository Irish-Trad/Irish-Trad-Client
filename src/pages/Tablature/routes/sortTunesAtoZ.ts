export const sortTunesAtoZ = (
  a: { name: string; path: string },
  b: { name: string; path: string }
) => (a.name > b.name ? 1 : 0)
