# Email Form Simulator

## Overview
This project is a simulation of an email form built entirely with vanilla JavaScript. It provides a user-friendly interface for users to input their email details and send it off into the ether.

## Features
- **Form Fields**: The form includes fields for the user's email, an optional CC email, subject, and message.
- **Input Validation**: The form validates user input to ensure all required fields are filled and that emails are in the correct format. If a field fails validation, an alert is displayed to the user.
- **Optional CC Field**: The CC field is optional. The form will validate the CC email if it is provided, but it is not required for the form to be submitted.
- **Dynamic Submit Button**: The submit button is dynamically enabled or disabled based on the validity of the form fields. It also changes opacity to give visual feedback to the user.
- **Form Submission**: On form submission, a spinner is displayed to simulate the process of sending an email. After a brief delay, the form is reset and a success message is displayed.

## Usage
To use the Email Form Simulator, simply fill out the form fields and click the submit button. If a field is invalid or missing, you will be alerted and the submit button will be disabled. Once all fields are valid, the submit button will be enabled and you can submit the form.

## GitHub Pages
This project is hosted on GitHub Pages. You can view the live demo [here](https://arturohdzg.github.io/JS-Email-Form-Simulator/).

## Contributing
Contributions are welcome! Please read the contributing guidelines before getting started.

## License
This project is licensed under the terms of the MIT license.
