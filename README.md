# Budget App

React app to create and manage your household budget. User friendly finance tracker with many charts and filterable transactions list.

> DISCLAIMER
> All existing data and adding new data are set to July 2020 due to the necessity to set up an external database and pull out all data from context API and reducers hooks.

### Live demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/d1428a85-de72-445b-bf98-c16256fab939/deploy-status)](https://admiring-bohr-76daef.netlify.app/)

<p align="center">
  <img width="600" src="https://i.ibb.co/XzkV31p/Adnotacja-2020-07-04-153704.png" alt="Adnotacja-2020-07-04-153704">
</p>

## 📝General info

React project done for training purposes. Wanted to fully understand state management with react hooks and context API. State management for such an app with those methods turned out to be very complex and inefficient. For further development of the app it is required to create external API to perform budget calculations and store user data.

## ⚙️Built with

- [React.js](https://reactjs.org/)
- Advanced state management with [react hooks & context API](https://www.robinwieruch.de/react-state-usereducer-usestate-usecontext)
- [react-router](https://github.com/ReactTraining/react-router)
- [chart.js](https://github.com/chartjs)
- [moment.js](https://momentjs.com/)
- [styled-components](https://styled-components.com/)
- [Formik](https://jaredpalmer.com/formik/)
- [yup](https://github.com/jquense/yup)
- [ESLint](https://eslint.org/), [Husky](https://www.npmjs.com/package/husky), [Prettier](https://prettier.io/), [lint-staged](https://github.com/okonet/lint-staged)

## 🚀Setup

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com/)) installed on your computer. From your command line:

    $ git clone https://github.com/nikolasbarwicki/budget-app
    $ cd budget-app
    $ npm install

Start app

    $ npm start

Go to:

      http://localhost:3000

## ✅Features

A few of the things you can do with Budget App:

- Track your monthly budget
- Plan your expenses and income
- Compare your expenses and income with previous months

## To-do:

- [ ] Add resposivity to the UI
- [ ] Enable adding new categories
- [ ] Move state management and budget operations to custom external API

## 👁‍🗨Project status

This project is currently in development - find out more in [To-do](#to-do) section.

## 📘License

This project is licensed under the MIT License © [Nikolas Barwicki](https://github.com/nikolasbarwicki)
