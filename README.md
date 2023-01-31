# Homerun

Temporal Example Project.

A pitcher throws a ball (starts a task).

The batter has to swing at it (send a signal) at the right moment to register a hit!

Pre-requisites:
- A temporal server (use their [Docker Compose files](https://github.com/temporalio/docker-compose))
- `npm install` to install dependencies.

To run the example:
1. `npm run start.watch` to start the Worker. 
1. In another shell, run `npm run workflow` to begin the `progress` workflow. The task will start (the ball will be thrown and fly through the air)
1. In another shell, run `npm run signal` to send a `swing` signal to the workflow. If your signal is received by the workflow when the ball is 70% of the way through the air then you've hit a home run!