# LearnSync AI 🧠🤖

LearnSync AI is an innovative adaptive learning assessment system that incorporates personality tests to detect disorders like ADHD, dyslexia, and autism, followed by personalized AI responses. This project aims to create a more inclusive and effective learning environment for all users.

## 🌟 Features

- 📝 Personality test for detecting learning disorders
- 🤖 AI-powered disorder detection
- 💬 Interactive chatbot with personalized responses
- 📊 Adaptive learning interface
- 🔐 User authentication and session management

## 🛠️ Tech Stack

- Frontend: React ⚛️, Tailwind CSS 🎨, Redux 🔄
- Backend: Node.js 🟢, Express 🚂
- Database: MongoDB 🍃
- AI Integration: Cohere API 🧠
- Testing: Postman 📮

## 🚀 Getting Started

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/LearnSyncFrontend.git
   cd LearnSyncFrontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/ArnabhS/LearnSyncBackend.git
   cd LearnSyncBackend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   COHERE_API_KEY=your_cohere_api_key
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## 🌐 API Endpoints

- `POST /api/auth/login`: User authentication
- `GET /api/questions/initial`: Fetch initial personality test questions
- `POST /api/test/submit`: Submit personality test answers
- `POST /api/chatbot/respond`: Get chatbot responses
- `GET /api/questions/additional`: Fetch additional questions after 3 chatbot interactions

## 🤝 Contributing

We welcome contributions to LearnSync AI! Please feel free to submit issues, fork the repository and send pull requests!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgements

- [Cohere](https://cohere.ai/) for providing the AI API
- [MongoDB](https://www.mongodb.com/) for the database solution
- All contributors who have helped shape LearnSync AI

---

Happy Learning with LearnSync AI! 🎓✨
