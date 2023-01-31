import { Client } from '@temporalio/client';
import { swingSignal, getSwingOutcome } from './workflows';

async function run(): Promise<void> {
  const client = new Client();

  const handle = client.workflow.getHandle('progress-0');

  console.log('You swung at the ball and..');
  
  // make life harder by introducing a small delay ;)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // send a signal to the workflow
  // then query the outcome of that swing
  await handle.signal(swingSignal);
  const swing_outcome = await handle.query(getSwingOutcome);
  console.log(swing_outcome);

  // The batter gets one chance to hit the ball,
  // then the task is cancelled.
  await handle.cancel()

}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
