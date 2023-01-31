import { Connection, Client } from '@temporalio/client';
import { progress, getProgress } from './workflows';

async function run() {
  const client = new Client();

  const handle = await client.workflow.start(progress, { taskQueue: 'homerun', workflowId: 'progress-0' });

  // wait 2 seconds before querying the timer
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const val = await handle.query(getProgress);
  // Should print "10", may print another number depending on timing
  console.log(val);

  await handle.result();
  console.log('complete');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
