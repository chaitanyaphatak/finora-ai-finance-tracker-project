# Finora

**Finora** is an AI-powered personal finance mobile app built with React Native and Expo. It helps users track expenses, manage budgets, and get smart financial insights — all in one place.

## ✨ Features

* 🔐 Secure authentication (Clerk)
* 💰 Expense & income tracking
* 📊 Visual spending insights and charts
* 🔔 Budget alerts and notifications
* 🤖 AI-powered financial tips (Gemini)
* ☁️ Real-time sync with Supabase backend

## 🛠️ Tech Stack

* **Frontend:** React Native, Expo, TypeScript, NativeWind (Tailwind for RN)
* **Backend:** Supabase (Database, Edge Functions, Auth)
* **Authentication:** Clerk
* **AI:** Google Gemini API
* **State Management:** Zustand / Context (update as applicable)

## 🚀 Getting Started

### Prerequisites

* Node.js (v18+)
* npm or yarn
* Expo Go app (for testing on physical device) or an Android/iOS simulator

### Installation

```bash
# Clone the repository
git clone https://github.com/chaitanyaphatak/finora-ai-finance-tracker-project.git
cd finora-ai-finance-tracker-project

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory based on `.env.example`:

```env
CLERK_PUBLISHABLE_KEY=your_clerk_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_key
```

### Run the App

```bash
npx expo start -c
```

Scan the QR code with the Expo Go app, or run on a simulator:

```bash
npx expo start --android
npx expo start --ios
```

## 📁 Project Structure

```text
├── app/                  # Screens & routing (Expo Router)
├── components/           # Reusable UI components
├── constants/            # App-wide constants
├── hooks/                # Custom React hooks
├── lib/                  # Utilities & services
├── store/                # State management
├── supabase/functions/   # Supabase Edge Functions
├── types/                # TypeScript types
└── assets/               # Images, fonts, icons
```

## 🤝 Contributing

**Finora is open for contributions!** 🚀

If you'd like to improve Finora, fix a bug, add a feature, improve the UI, optimize the code, or enhance the documentation, you're welcome to contribute.

### How to Contribute

1. **Fork** this repository.
2. **Clone** your fork locally.
3. Create a new branch for your contribution:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them locally.
5. Commit your changes with a clear commit message:

```bash
git commit -m "feat: add your feature"
```

6. Push your branch:

```bash
git push origin feature/your-feature-name
```

7. Open a **Pull Request** against the `main` branch.

### Contribution Guidelines

Before submitting a Pull Request:

* Keep changes focused and related to the issue or feature.
* Follow the existing project structure and coding style.
* Test your changes before opening a PR.
* Avoid committing secrets, API keys, or `.env` files.
* Update documentation when necessary.
* Write clear commit messages and PR descriptions.
* Make sure your changes do not introduce unnecessary breaking changes.

### 💡 Looking for Something to Work On?

You can check the repository's **Issues** section for bugs, improvements, and feature ideas.

If you have an idea that isn't already listed, feel free to open an issue first and discuss it before starting a major change.

Every contribution — from fixing a typo to adding a new feature — is appreciated! ❤️

## 📌 Roadmap

* [ ] Add more detailed analytics
* [ ] Multi-currency support
* [ ] Export reports as PDF/CSV
* [ ] Dark mode refinements

## 📄 License

This project is currently intended for **personal and portfolio use**. Contributions are welcome, but the project does not currently provide a separate open-source license.

---

Built with ❤️ using React Native & Expo.
