# Supabase PW:
vAxbaf-tebpog-0nekmu
# you'll never know what this is for:
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


# Assignment Final

#### The full circle

---

This is it. The Big one. Now it's time to put all our learnings into one final project. In this assignment you will be setting up a CD pipeline with all the steps done in previous assignments.

What you will be working with is a Tic Tac Toe game that needs maintenance. Some logic is needed to complete the game and it is untested, some libraries are outdated and need to be updated.

The Project is a NextJS application with a Postgres database to keep track of the games.

**Please remember** to commit and push often (meaningful commits), the Git history is part of the assignment (only the history on the `main` branch).

**Group size**: 1 person

---

## The Assignment

#### **Fix it!**
✅🚫
- Currently the game can only tell when someone wins, but not when there is a draw. Write a test for such function and then implement it and add that to the game. ✅
- Should the game be playable without the players names ? No ✅
- Create a new Github repository with one eslint rule that forbids moment. Release that package, using Github Actions, and use that in this project. ✅
- There should be lint errors/warnings after applying that rule, fix it. ✅
- There are no unit tests. Add them. ✅
- There are no ui integration tests. Add them. ✅
- There are no e2e tests. Add them. ✅

#### **Deploy it!**

- Create a Github action that does all the checks we've been doing in previous assignments and then deploys the application using Vercel. Please note the checks should be done on any branch but the deployment should only happen on the `main` branch. ✅ I think
- Add a link to the application running to this README.md file 🚫 not sure what this means

#### **Monitor it!**

- Add Datadog RUM (Real user monitoring) to the application. 🚫
- Create a dashboard to monitor the health of the application. 🚫
- Add a screenshot of the dashboard to this README.md file 🚫

---

### Prerequisite

Copy the Github repo into your own repository and make it private.

Node v18 is required for this project to run.

We will be using [Vercel](https://vercel.com/) to deploy the application.

#### Setup your dev environment

Create a two free Postgres database. One for dev/staging and another for Production.
Here is one free services you can utilize, but feel free to choose any Postgres hosting service you like.

- [Supbase](https://app.supabase.com/)

Get your connection string and add that to your ENV as ´DATABASE_URL´

### Helpful Commands

Run the following commands to get started:

`npm install`

`npm run prisma:init`

`npm run dev`

And make sure to look into `package.json` for other commands, and feel free to add commands required for this assignment.

## Hand in

Add me (arnif) as collaborator to both repositories. Add a screenshot of your Datadog dashboard to the README.md and also add link to your Eslint rule Github repository to the README.md of this project.
Also make sure to send the Github link to this repository in Canvas when handing in the assignment.

Good luck and Have fun :)
