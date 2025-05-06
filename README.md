# 🎮 Hangman Game Backend

## 📖 Introduction

This repository contains the backend code for a Hangman game - a classic word guessing game. The application provides APIs to create game sessions, track player progress, and handle game logic for the Hangman experience.

## ✨ Key Features

- 🎲 Game session management (create and play sessions)
- 🔤 Random word selection from a database
- ✅ Letter guessing validation
- 📊 Game state tracking (lives, guessed letters, masked word)
- 🏁 Game completion detection (win or lose)
- 📈 Player progress tracking

## 💻 Technical Stack

- 📦 Node.js
- 🚂 Express.js
- 🗃️ Sequelize ORM
- 🗄️ SQLite database
- 🔌 CORS support for frontend integration

## 🧩 Project Structure

- `app.js` - Main application entry point
- `models/` - Database models for Word and GameSession
- `routes/` - API endpoints for game sessions
- `services/` - Business logic for game sessions
- `serializers/` - Data transformation for API responses

## 🔌 API Endpoints

### Create a new game session

- **POST** `/api/sessions`
- Request body: `{ "name": "player_name" }`
- Creates a new game session with a randomly selected word

### Play a letter in a game session

- **POST** `/api/sessions/:id/play`
- Request body: `{ "letter": "a" }`
- Adds a guessed letter to the session and updates game state

## 🎯 Game Logic

The game implements the classic Hangman rules:

- 💖 Player gets 6 lives (attempts) to guess the word
- ❌ Each incorrect guess reduces the remaining lives
- ✅ Correct guesses reveal the corresponding letters in the word
- 🎬 Game ends when either:
  1. 🏆 Player correctly guesses all letters (win)
  2. 💀 Player runs out of lives (lose)

## 📚 Data Models

### Word

- 📝 `title` - The word to be guessed

### GameSession

- 👤 `playerName` - Name of the player
- 🔤 `playedLetters` - Letters that have been guessed
- 🕒 `startedAt` - When the game session started
- 🏁 `finishedAt` - When the game ended (null if still in progress)
- 🔗 Associated with a Word to be guessed

## 🔧 Setup and Installation

1. 📥 Clone the repository
2. 📦 Install dependencies: `npm install`
3. 🚀 Start the server: `node app.js`
4. 🌐 The server will run at http://localhost:3000

## 🚀 Future Enhancements

- 🔐 User authentication and profiles
- 🏆 Score tracking and leaderboards
- 🌡️ Multiple difficulty levels
- 🗂️ Categories for words
- ⏱️ Time-based challenges
- 👥 Multiplayer support
