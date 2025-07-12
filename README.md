# 🔐 Secure Text Sync Web App (with Firebase Auth)

Secure Text Sync is a simple yet secure web application that allows authenticated users to store, retrieve, and copy encrypted text across devices using Firebase Authentication and Firestore.

---

## 🌐 Live Demo

Host it on GitHub Pages or any static host. Ensure Firebase credentials and rules are set correctly.

---

## 🚀 Features

* 🔐 **Firebase Authentication** (Email/Password login)
* 💾 **Save** your text to Firestore securely
* 📥 **Load** your latest saved text
* 📋 **Copy** text to clipboard with one click
* 🧹 **Clear** textarea input
* 🚪 **Logout** support
* ❌ No sign-up UI (admin creates users manually in Firebase console)

---

## 🧱 Tech Stack

* HTML5 / CSS3 (Bootstrap 5)
* JavaScript (ES Modules)
* Firebase (v10+)

  * Firebase Authentication
  * Firebase Firestore

---

## 📦 Project Structure

```
/secure-text-sync
│
├── index.html              # Main UI
├── secureTextApp.js        # JavaScript logic (auth, Firestore)
├── README.md               # This file
```

---

## 🔧 Setup Instructions

### 1. Clone or Download the Repo

```bash
git clone https://github.com/yourusername/secure-text-sync.git
```

### 2. Enable Firebase Services

* Go to [Firebase Console](https://console.firebase.google.com/)
* Create a new project (or use an existing one)
* Enable **Authentication** → Sign-in Method → **Email/Password**
* Enable **Cloud Firestore** in **test mode** (for now)

### 3. Add Firebase Config to `secureTextApp.js`

Replace the `firebaseConfig` object with your own:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

### 4. Create Users Manually

* Go to Firebase Console → Authentication → Users
* Click **Add user** and create accounts manually (no sign-up in app)

### 5. Firestore Rules (Secure)

Use this in **Firestore → Rules**:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Allow only authenticated users to access text
    match /secureText/latest {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## ✨ How It Works

1. User logs in via Firebase Authentication
2. Authenticated users see the main app
3. Users can:

   * Save text to Firestore
   * Load latest saved text
   * Copy text to clipboard
   * Clear textarea
4. All data is user-scoped but globally available (optional: can be extended to per-user documents)

---

## 🛡️ Security Notes

* Firebase config is public by design, but secure rules are **mandatory**
* Auth restricts Firestore to only logged-in users
* No sensitive logic is handled in the frontend
* For additional encryption: use AES via CryptoJS before saving

---

## 📋 To-Do / Optional Enhancements

* 🔑 AES encryption of stored text
* 📸 QR Code generation and scanning
* 🧪 Email verification / password reset
* 📂 Per-user document structure
* 📦 Webpack/Vite bundling and JS obfuscation

---

## 🧑‍💻 Author

**Zahid Ansari** — [GitHub](https://github.com/Ansarissab) [Linkedin](https://www.linkedin.com/in/zahidensari)
---
