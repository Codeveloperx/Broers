import md5 from "md5";

export function generateMarvelHash(
  timestamp: string,
  privateKey: string,
  publicKey: string
): string {
  return md5(`${timestamp}${privateKey}${publicKey}`);
}
