# dontLogin

![dontLogin Banner](/public/readme-main.png)

> **Upload, Share, and Download**
> **but dontLogin**

With **dontLogin**, your files are just a click away. No accounts, no passwords – simply upload, share your files, and access them from anywhere. Fast, secure, and hassle-free.

**dontLogin** is a lightweight web app designed for quick and temporary file sharing. Whether you're transferring documents between devices or sending a file to a friend, there's no need to sign up or remember another password. The process is refreshingly straightforward — just upload your file, get a unique code, and share it.

We built dontLogin to reduce friction in everyday digital exchanges. It's perfect for developers, students, professionals, or anyone who wants to share files without hassle. All files are securely stored using AWS infrastructure, and you retain control without needing to trust us with personal data.

---

## 🚀 Features

* 🔐 Secure uploads using **AWS S3 Pre-Signed URLs**
* 🔢 Instant **6-digit access code** to retrieve your files
* ☁️ Files stored on **AWS cloud** for maximum reliability
* 🕒 Files auto-delete after 1 hour (coming soon)
* ✅ No account or login required

---

## ⚙️ How It Works

> Simple file sharing in 4 easy steps

1. **Choose Your File**
   Go to the [upload page](https://dontlogin.vercel.app) and select a file.

2. **Upload to Cloud**
   Click upload and your file will be securely stored in our AWS S3 bucket.

3. **Get Your Code**
   Receive a **6-digit code** to access the file from anywhere.

4. **Share the Love**
   Found this useful? [⭐ Star us on GitHub](https://github.com/iammohitvs/dontLogin)!

---

## 📸 Preview

| Upload Page                                                                                   | Download Page                                                                                   | 
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | 
| ![](/public/upload-page.png) | ![](/public/download-page.png) | 

---

## 🛠️ Tech Stack

Built with the latest tools in web development:

* **Framework**: [Next.js 14](https://nextjs.org/)
* **Frontend**: React 18, TailwindCSS, Radix UI
* **Backend**: Prisma ORM, AWS S3 (Pre-signed URLs)
* **Utilities**: Axios, clsx, class-variance-authority, lucide-react

### 📦 `package.json` Highlights

```json
"dependencies": {
  "@aws-sdk/client-s3": "^3.651.1",
  "@aws-sdk/s3-request-presigner": "^3.651.1",
  "@prisma/client": "^5.19.1",
  "next": "14.2.12",
  "react": "^18",
  "tailwindcss": "^3.4.1",
  // ...other UI & utility libraries
}
```

---

## 💻 Local Development

```bash
git clone https://github.com/iammohitvs/dontlogin.git
cd dontLogin
npm install
npx prisma generate
npm run dev
```

Make sure to add your `.env` file with AWS credentials and Prisma connection string.

---

## 🌐 Live Demo

Check out the live app: [dontlogin.vercel.app](https://dontlogin.vercel.app)

---

## ⭐ Show Some Love

If you like this project, please consider [starring us on GitHub](https://github.com/iammohitvs/dontLogin) ❤️

---

## 📄 License

MIT License. See [LICENSE](https://github.com/iammohitvs/dontLogin/blob/main/LICENSE) for more info.

---

### 🙌 Contributing

Got an idea or found a bug? [Open an issue](https://github.com/iammohitvs/dontLogin/issues) or [submit a PR](https://github.com/iammohitvs/dontLogin/pulls)!
