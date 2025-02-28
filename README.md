# Event Scheduler App

## 📌 Overview
The **Event Scheduler App** is a mobile application built using **React Native** and **Expo**, allowing users to efficiently create, manage, and delete scheduled events. The app provides an intuitive interface to input event details, set start and end times, choose repeat options, and handle event persistence.

## 🚀 Features
- 📅 **Event Creation**: Users can add events by entering a name, start time, and end time.
- 🕒 **Time Selection**: Seamless selection of start and end times using the DateTimePicker.
- 🔁 **Recurring Events**: Options to set event repetition (None, Weekly, Bi-weekly, Monthly).
- 🗑️ **Event Deletion**: Remove events when they are no longer needed.
- 🚫 **Validation for Past Dates**: Prevents users from scheduling events in the past.
- 🎨 **Styled with External Stylesheets**: Ensures a clean and maintainable code structure.

## 🏗️ Tech Stack
- **React Native** (Expo Framework)
- **Expo DateTimePicker** (`@react-native-community/datetimepicker`)
- **Expo Picker** (`@react-native-picker/picker`)
- **State Management** (React hooks)

## 📂 Project Structure
```
📦 EventSchedulerApp
 ┣ 📂 app
 ┃ ┣ 📂 components
 ┃ ┃ ┗ 📜 CalenderComponent.jsx
 ┃ ┃ ┗ 📜 EventActions.jsx
 ┃ ┃ ┗ 📜 EventInput.jsx
 ┃ ┃ ┗ 📜 RepeatPicker.jsx
 ┃ ┃ ┗ 📜 TimePickerField.jsx
 ┃ ┣ 📂 hooks
 ┃ ┃ ┗ 📜 useEventForm.js
 ┃ ┃ ┗ 📜 useHomeScreen.js
 ┃ ┣ 📂 styles
 ┃ ┃ ┗ 📜 EventFormStyles.js
 ┃ ┃ ┗ 📜 HomeScreenStyle.js
 ┃ ┣ 📜 index.js
 ┃ ┗ 📜 Navigation.js
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 app.json
```

## 🔧 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/kidmeeno/even-scheduling-app.git
   cd even-scheduling-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. **Start the Expo development server:**
   ```sh
   npm start
   ```
4. **Run on an emulator or physical device:**
   - Scan the QR code from the Expo Go app on your phone.
   - Use an emulator (`expo run:android` or `expo run:ios`).

## 📲 Usage
1. Launch the app.
2. Select a date to schedule an event.
3. Enter the event name.
4. Pick a start time and an end time.
5. Choose a repeat option if necessary.
6. Click **Save Event** to store it.
7. Delete an event if no longer needed.

## 🛠️ Dependencies
```json
{
  "dependencies": {
    "expo": "^49.0.0",
    "react": "18.0.0",
    "react-native": "0.72.0",
    "@react-native-community/datetimepicker": "^6.8.1",
    "@react-native-picker/picker": "^2.4.8"
  }
}
```

## 🚀 Future Enhancements
- ⏰ **Event Notifications & Reminders**
- 🎨 **Dark Mode Support**
- 📌 **Event Categories & Priorities**

## 🤝 Contributing
Feel free to contribute! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## 📄 License
This project is licensed under the **MIT License**.

---

🔥 Built with **Expo & React Native** ❤️

