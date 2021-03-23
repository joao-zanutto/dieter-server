# Back-end server for Dieter project

This back-end server was created using NodeJS and Express, with MongoDB as Database and using node-cron to execute a scheduled job.

The front-end is being developed in ReactJS.

## Notes

This project is intended for personal use only and studying purpose, that is why you can see some bizarre implementations (like storing food consumption on food object and resetting it everyday).

Those "bizarre" implementations have the purpose to different thing and technologies out and understand how they all play together.

## Architecture

The project was implemented with the MVC architecture with Repository. Our back-end then, has this folder structure

```
|
|- models
|- repository
|- routes
|- jobs
```

### Models

The models are files that contain our DB entities modeling. We have two different models in this project:

- Food: foods are objects that contain the name of the food, it's portion (serving) and it's nutritional stats (cal, carb, prot, fat)
- Stats : stats are daily stats of nutritional's stats consumption. We have the year, month and day and the nutritional stats the user consumed that day

### Repository

Repository files are used to separate business logic from back-end functionalities. In our use case, they contain all the business logic that is used to manipulate the data entities (foods and stats) and are exported to be used by routers and jobs.

### Routes

In our application, routes have simple jobs (that I believe are routers true job).

1. Receive a request
2. Call a function to proccess data
3. Return the result

The routes that we have are:

- consume: which only contain one handling for a button press on the front-end
- diminsh: same as consume, but with inverse modifications in data
- foods: contain a route for creating foods and one to get all the foods
- stats: contain a route for creating stats, deleting today's stats and one for getting all stats

### Jobs

Currently for this project we have only one job `resetDay`, that is responsible for creating the current day stats and resetting the food quantity in the DB.
