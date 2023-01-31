export async function greet(progress: number): Promise<string> {
  return `${progress * 10}%`;
}
