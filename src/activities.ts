// express progress as a percentage
export async function progress_percentage(progress: number): Promise<string> {
  return `${progress * 10}%`;
}
