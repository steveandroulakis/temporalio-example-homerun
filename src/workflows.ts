import * as wf from '@temporalio/workflow';

// Only import the activity types
import type * as activities from './activities';

const { progress_percentage: progress_percentage } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export const getSwingOutcome = wf.defineQuery<string>('getSwingOutcome');
export const swingSignal = wf.defineSignal('swing');

export async function progress(): Promise<void> {
  let currentProgress = 0;
  let i = 0;
  let progressPercentage = '0%';

  // return outcome of the signal (swing)
  wf.setHandler(getSwingOutcome, () => {

    let outcome = "miss. Better luck next time.";

    if (i == 7) {
      outcome = "HIT! Nice home run.";
    }

    return `Swing is a ${outcome}`
  });

  // a swing at the ball will stop the workflow
  wf.setHandler(swingSignal, async () => {
    return
  });

  console.log('The pitcher threw the ball!');

  try {
    for (i = 0; i <= 10; ++i) {
      progressPercentage = await progress_percentage(i);
      console.log(progressPercentage);
      await wf.sleep('2s');
      currentProgress += 10;
    }
    console.log('Nobody swung at the ball!');
    return
  } catch (err) {
    if (err instanceof wf.CancelledFailure) {
      console.log('Ball was swung at, I wonder if it was hit?'); // cancelled
    }
    throw err;
  }
}
