// eslint-disable-next-line import/prefer-default-export
export function isTitle(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
