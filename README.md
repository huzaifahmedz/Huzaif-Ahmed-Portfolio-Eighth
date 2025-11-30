# Portfolio Page

This repository contains a personal portfolio website built using Next.js, Tailwind CSS, and TypeScript. The portfolio showcases projects, skills, and personal information in a professional format, making it easy to view and navigate.

## Features

- **Pure Frontend**: Static portfolio with no backend dependencies - all data is stored in constants
- **Responsive Design**: Built with Tailwind CSS to ensure the website looks great on all devices.
- **Modern Frameworks**: Developed with Next.js for fast and SEO-friendly static site generation.
- **TypeScript Support**: Ensures type safety, improving code quality and maintainability.
- **Internationalization**: Built-in support for multiple languages using next-intl

## Getting Started

### Prerequisites

To run this project locally, you need:

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn** for dependency management

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/huzaifahmedz/Huzaif-Ahmed-Portfolio-Eighth.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd portfolio-page
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Customize your portfolio data**:
   Edit `src/constants/data.ts` to update your personal information, projects, and social links.

5. **Add your resume (optional)**:
   - Place your resume PDF file in the `public/assets/` directory (e.g., `public/assets/YourName_CV.pdf`)
   - In `app/(app)/[locale]/page.tsx`, find the hero section and add a resume download button:
     ```tsx
     <Link href="/assets/YourName_CV.pdf" download>
       <Button className="cursor-pointer" variant={'outline'}>
         {t('downloadCvBtn')}
       </Button>
     </Link>
     ```
   - The button text is already configured in `messages/en.json` under `HomePage.downloadCvBtn`

### Running the Development Server

After installing the dependencies, start the local development server:

```bash
pnpm dev
```

This will run the application at http://localhost:3000. Open it in your browser to see the portfolio in action.

### Building for Production

To build a production-ready version of the site, run:

```bash
pnpm build & pnpm start
```

## Contributing

Feel free to open issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.

Copyright (c) 2024 Huzaif Ahmed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Thank you for visiting this portfolio project. Enjoy exploring!
