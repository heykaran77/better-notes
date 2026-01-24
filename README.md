# 📝 Better Notes

Better Notes is a modern, high-performance note-taking application designed for clarity and efficiency. Built with the latest web technologies, it offers a seamless experience for capturing ideas, organizing notebooks, and managing your thoughts.

![Better Notes Banner](/public/homepage.png)

## 🚀 Key Features

- **🔐 Robust Authentication**: Secure login via Email/Password and Google OAuth powered by Better Auth.
- **📓 Notebook Organization**: Group your notes into notebooks for better categorization.
- **✍️ Rich Text Editor**: A powerful, customizable editor built with Tiptap for all your formatting needs.
- **✨ Premium UI/UX**: Crafted with Tailwind CSS 4, Motion, and Shadcn UI for a stunning, responsive interface.
- **📧 Email Verification**: Automated verification and password resets using Resend.
- **⚡ Real-time Updates**: Smooth interactions and instant feedback with Sonner toasts.

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Nuqs](https://nuqs.47ng.com/)

### Backend & Database

- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Better Auth](https://www.better-auth.com/)
- **Email**: [Resend](https://resend.com/)

### Editor

- **Rich Text**: [Tiptap Editor](https://tiptap.dev/)

## 🏁 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/heykaran77/better-notes.git
cd better-notes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL=your_postgresql_url

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Social Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Email
RESEND_API_KEY=your_resend_api_key
```

### 4. Database Setup

Sync your database schema with Drizzle:

```bash
npx drizzle-kit push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🗺️ Roadmap (Future Enhancements)

- [ ] **Edit Options**: Implement editing functionality for existing notes and notebook titles.
- [ ] **Tagging System**: Add tags to notes for advanced filtering and search.
- [ ] **Search**: Full-text search across all notes and notebooks.
- [ ] **Templates**: Pre-defined templates for quick note creation.
- [ ] **Collaboration**: Share notebooks with other users for real-time collaboration.
- [ ] **Export Options**: Export notes as PDF, Markdown, or HTML.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by [Karan Singh](https://github.com/heykaran77)
