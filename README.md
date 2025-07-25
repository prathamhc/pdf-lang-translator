# PDF Translator Application

A full-stack application that translates PDF documents from any language to your desired language using AI.

## Tech Stack

- **Frontend:** React.js with TypeScript
- **Backend:** Node.js with Express.js and TypeScript
- **Database:** MongoDB
- **AI:** OpenAI API / Google Cloud Translation API
- **Cloud:** AWS (S3, Lambda, EC2)
- **DevOps:** Docker, GitHub Actions

## Getting Started

### Prerequisites
- Node.js 18+
- Docker Desktop for Windows
- MongoDB (or use Docker)

### Installation

1. Clone the repository
2. Copy environment variables: `copy .env.example .env`
3. Fill in your API keys in the `.env` file
4. Run with Docker: `docker-compose up -d`

Or run locally:
```batch
REM Start backend
cd server
npm install
npm run dev

REM Start frontend (in new command prompt)
cd client
npm install
npm start
```

## Features

- Upload PDF files
- Extract text from PDFs
- Translate to multiple languages
- Download translated PDFs
- User authentication
- Translation history
- Batch processing

## API Endpoints

- `POST /api/upload` - Upload PDF file
- `POST /api/translate` - Translate PDF content
- `GET /api/translations` - Get translation history
- `GET /api/download/:id` - Download translated PDF

## Development

Run tests: `npm test`
Build: `npm run build`

## Windows-Specific Notes

- Run Command Prompt or PowerShell as Administrator
- Make sure Docker Desktop is running before using docker-compose
- Use backslashes (\) for file paths in Windows
