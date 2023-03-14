export function getFirstUrlStartingWithSlash(url: string): string {
  return url.match(/^\/\w+/gi)?.join('')?.replace(/\//gi, '') || '';
}
