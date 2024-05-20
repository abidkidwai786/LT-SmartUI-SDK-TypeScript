Integrate SmartUI SDK with WebdriverIO Tests
Welcome to the world of simplified visual testing with the SmartUI SDK.

Pre-requisites for running tests through SmartUI SDK
Basic understanding of Command Line Interface and WebdriverIO is required.
Login to LambdaTest SmartUI with your credentials.
The following steps will guide you in running your first Visual Regression test on LambdaTest platform using SmartUI WebdriverIO SDK integration.

Create a SmartUI Project
The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

Go to Projects page
Click on the new project button
Select the platform as CLI for executing your SDK tests.
Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
Click on the Submit.

Getting started:
1) npm install
2) Add your LT_USERNAME and LT_ACCESS_KEY
3) Set the smartUI project token in env
4) RUN COMMAND: npx smartui --config .smartui.json exec -- wdio run ./wdio.conf.ts
