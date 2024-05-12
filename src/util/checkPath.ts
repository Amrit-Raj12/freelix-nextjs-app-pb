export const shouldDisplayText = (pathname: string): boolean => {
  const pathsToCheck = ["/movie/new", "another-path"]
  return pathsToCheck.some((path) => pathname?.includes(path))
}
