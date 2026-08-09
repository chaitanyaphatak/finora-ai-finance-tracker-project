# Finora

**Finora** is an AI-powered personal finance mobile app built with React Native and Expo. It helps users track expenses, manage budgets, and get smart financial insights — all in one place.

## ✨ Features

- 🔐 Secure authentication (Clerk)
- 💰 Expense & income tracking
- 📊 Visual spending insights and charts
- 🔔 Budget alerts and notifications
- 🤖 AI-powered financial tips (Gemini)
- ☁️ Real-time sync with Supabase backend

## 🛠️ Tech Stack

- **Frontend:** React Native, Expo, TypeScript, NativeWind (Tailwind for RN)
- **Backend:** Supabase (Database, Edge Functions, Auth)
- **Authentication:** Clerk
- **AI:** Google Gemini API
- **State Management:** Zustand / Context (update as applicable)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo Go app (for testing on physical device) or an Android/iOS simulator

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

```
CLERK_PUBLISHABLE_KEY=your_clerk_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
GEMINI_API_KEY=your_gemini_key
```

### Run the app

```bash
npx expo start -c
```

Scan the QR code with the Expo Go app, or run on a simulator:

```bash
npx expo start --android
npx expo start --ios
```

## 📁 Project Structure

```
├── app/                  # Screens & routing (Expo Router)
├── components/           # Reusable UI components
├── constants/             # App-wide constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities & helpers
├── store/                 # State management
├── supabase/functions/    # Supabase Edge Functions
├── types/                 # TypeScript types
└── assets/                 # Images, fonts, icons
```

## 📌 Roadmap

- [ ] Add more detailed analytics
- [ ] Multi-currency support
- [ ] Export reports as PDF/CSV
- [ ] Dark mode refinements

## 📄 License

This project is for personal/portfolio use.

---

Built with ❤️ using React Native & Expo.