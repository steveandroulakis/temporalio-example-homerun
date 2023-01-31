import { Client } from '@temporalio/client';
import { progress } from './workflows';

async function run() {
  const client = new Client();

  // start the task (ball flying through the air for 20 seconds)
  const handle = await client.workflow.start(progress, { taskQueue: 'homerun', workflowId: 'progress-0' });

  console.log('A pitcher has thrown the ball (worker task started).');
  console.log(`Swing (signal) at it when it's 70% of the way to hit a home run!`);
  await handle.result();
}

run().catch((err) => {
  // console.error(err);
  // workflow cancelled

  process.exit(1);
});
