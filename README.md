# Homerun

Temporal Example Project.

A pitcher throws a ball (starts a task).

The batter has to swing at it (send a signal) at the right moment to register a hit!

### Prerequisites:
- A temporal server (use their [Docker Compose files](https://github.com/temporalio/docker-compose))
- `npm install` to install dependencies.

### Run the example:
1. `npm run start.watch` to start the Worker. 
1. In another shell, run `npm run workflow` to begin the `progress` workflow. The task will start (the ball will be thrown and fly through the air)
1. In another shell, run `npm run signal` to send a `swing` signal to the workflow. If your signal is received by the workflow when the ball is 70% of the way through the air then you've hit a home run!

### Sample output:
Shell #1 starts the workflow, shell #2 shows the workflow's output, shell #3 sends a signal and receives the hit/miss result.
![homerun shell screenshot](https://raw.githubusercontent.com/steveandroulakis/temporalio-example-homerun/main/homerun.png)
