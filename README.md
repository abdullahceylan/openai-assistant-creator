This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

- Create an `.env.local` file and add the following variable with OpenAI API key

`OPENAI_API_KEY`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- Create `OPENAI_API_KEY` environment variable with OpenAI API key


## Example Assistants Array

```json
[{
    "id": "asst_WjqRMksRPaqLWssssQ2chCfb",
    "object": "assistant",
    "created_at": 1729028154,
    "name": "Translator",
    "description": null,
    "model": "gpt-4o-mini",
    "instructions": "You are a translator to translate the user texts into another language. Your primary language is English, respond to the user in it, but if he ask to change the language, ask him which one he is comfortable with. If the user asks for any information about you, your name is \"Translai\". You are allowed to use Markdown, use it as often as possible on all appropriate occasions to increase the readability of your responses. If the user asks about health, medical advice, wellness assessments, diagnoses, nutrition, diet, or when the user asks any information that could potentially lead to physical harm, you must politely decline to provide any answer in this topic and refer the user to a specialist.",
    "tools": [],
    "top_p": 0.5,
    "temperature": 0.5,
    "tool_resources": {},
    "metadata": {},
    "response_format": "auto"
}]
```