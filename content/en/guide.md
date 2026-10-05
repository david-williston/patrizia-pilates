---
title: "Patrizia's Website Guide"
description: "How your website is built, how to change it, and where everything lives."
# Hidden page: not in menus, lists, search or the sitemap, and search engines are asked not to index it.
build:
  list: never
sitemap:
  disable: true
robotsNoIndex: true
ShowToc: true
TocOpen: false
---

Hola Patrizia! 👋

This page is just for you. It isn't in the menu and search engines won't show it, but anyone who has the link can open it, so there is nothing secret here.

You don't need to be "technical" to look after this website. If you can write an email and click "Save", you can update your website. This guide walks you through it, one small step at a time.

> **The golden rule:** you can't permanently break anything. Every change is saved in a history, and any mistake can be undone. So go ahead and explore!

---

## The big picture

Think of your website like a **Pilates class plan**:

| In Pilates… | In your website… | Its real name |
|---|---|---|
| Your notes for each exercise | Simple text files with your words | **Markdown** files |
| The method that turns notes into a class | A program that turns text files into web pages | **Hugo** |
| The studio's look and feel | The design: colours, fonts, layout | **PaperMod** theme + our custom style |
| Your studio where everything is kept | An online folder that stores every file and every change | **GitHub** (a "repository") |
| Opening the doors to clients | Publishing the website on the internet | **GitHub Pages** |

**What happens when you make a change:**

1. You edit a text file on GitHub (for example, the prices).
2. You click **Commit changes** (this means "save").
3. GitHub automatically runs Hugo, which rebuilds the website. This takes about 2–5 minutes.
4. Your new website is live at **<https://david-williston.github.io/patrizia-pilates/>**.

That's it. There is no server to manage and no monthly hosting bill.

---

## Where everything lives

All the files are in the repository: **<https://github.com/david-williston/patrizia-pilates>**

You will mostly use the first two rows of this table. You can ignore the rest unless you're curious.

| Folder or file | What's inside | How often you'll touch it |
|---|---|---|
| `content/es/` | The **Spanish** pages, one file per page | Often |
| `content/en/` | The **English** pages (including this guide!) | Often |
| `hugo.toml` | Site settings: your email, WhatsApp, the menu, the homepage text | Sometimes |
| `assets/images/` | The photos | Sometimes |
| `data/photo_credits.json` | Credits for the temporary stock photos | When you replace photos |
| `assets/css/extended/theme.css` | Colours, fonts and animations | Rarely |
| `layouts/` | Small building blocks of the design | Rarely |
| `themes/PaperMod/` | The base design, shared by thousands of websites | Never: don't edit |
| `.github/workflows/hugo.yml` | The instructions GitHub follows to publish the site | Never |

### Which file is which page?

| Page | Spanish file | English file |
|---|---|---|
| El Método / The Method | `content/es/metodo.md` | `content/en/method.md` |
| Clases / Classes (with prices) | `content/es/clases.md` | `content/en/classes.md` |
| El Estudio / The Studio | `content/es/estudio.md` | `content/en/studio.md` |
| Sobre mí / About | `content/es/sobre-mi.md` | `content/en/about.md` |
| Contacto / Contact | `content/es/contacto.md` | `content/en/contact.md` |
| Créditos / Photo credits | `content/es/creditos.md` | `content/en/credits.md` |
| **Homepage** (big sunset section) | in `hugo.toml`, under `[languages.es...homeInfoParams]` | in `hugo.toml`, under `[languages.en...homeInfoParams]` |

> 💡 **Two languages = two files.** When you change something in Spanish, remember to make the same change in the English file too.

---

## Before you start (one time only)

1. **Create a free GitHub account** at <https://github.com/signup>.
2. **Send your username to David** so he can give you permission to edit the website.
3. **Accept the invitation** you'll get by email.

That's all the setup you need. You can do everything in this guide from your web browser, without installing anything.

---

## How to change text (step by step)

Let's say you want to update the **prices**.

1. Go to <https://github.com/david-williston/patrizia-pilates>.
2. Click the folder **`content`**, then **`es`**, then **`clases.md`**.
3. Click the **pencil icon ✏️** (top right of the file, "Edit this file").
4. Change the text. For example, change `$ — MXN` to `$ 900 MXN`.
5. Click the green **Commit changes…** button (top right).
6. In the little window, write a short note about what you changed, like *"Update private session prices"*. Then click **Commit changes** again.
7. Do the same in `content/en/classes.md` for the English page.
8. Wait 2–5 minutes, then refresh your website. Done! 🎉

**How to check it worked:** in the repository, click the **Actions** tab at the top.

- 🟡 A yellow dot means "working on it".
- ✅ A green tick means "published".
- ❌ A red cross means something went wrong. See [If something goes wrong](#if-something-goes-wrong).

---

## Writing in Markdown (a tiny cheat sheet)

The page files are written in **Markdown**, a simple way of writing where a few symbols add formatting.

| You type | You get |
|---|---|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `## A heading` | a section heading |
| `- an item` | a bullet point |
| `[my link](https://example.com)` | a [link](https://example.com) |
| `> a quote` | a highlighted quote |

**Tables** (like the price tables) use `|` to separate the columns:

```
| Sesiones privadas | Precio | Vigencia |
|---|---|---|
| Sesión individual | $ 900 MXN | — |
```

Just keep the `|` characters in the same places and change the words between them.

### The part at the top of each file

Every page file starts with a small block between two `---` lines. This is called **front matter**. It holds the page's settings:

```
---
title: "Clases"
translationKey: "classes"
description: "Sesiones privadas, semiprivadas, clases de mat y en línea."
cover:
  image: "images/clases.jpg"
  alt: "Ejercicio de pie en el reformer"
---
```

- `title`: the big heading on the page.
- `description`: the short sentence under the title (and on the homepage cards).
- `translationKey`: connects the Spanish and English versions. **Don't change this.**
- `cover`: the photo at the top of the page.

You'll also see lines like `<!-- TODO: ... -->`. These are hidden notes that don't appear on the website. They mark things that still need your input.

---

## Changing your contact details

Open **`hugo.toml`** and look near the top for these lines:

```
email = "patrizia.maerki@me.com"
whatsapp = "529541453286"
whatsappDisplay = "+52 954 145 3286"
instagram = ""
location = "Puerto Escondido, Oaxaca, México"
```

- `whatsapp`: only digits, starting with the country code 52 (this makes the "chat on WhatsApp" link work).
- `whatsappDisplay`: how the number looks on the page.
- `instagram`: your username without the @, e.g. `"pilates.puertoescondido"`.

Keep the quote marks `" "` around each value.

---

## Replacing the photos

The current photos are **temporary** stock photos. Here's how to put in your own:

1. Choose a photo. Wide (landscape) photos work best. Ideally make it about 2000 pixels wide.
2. **Rename it to the same name as the photo you're replacing**, for example `clases.jpg`:

   | Photo name | Where it appears |
   |---|---|
   | `hero.jpg` | The big homepage background |
   | `metodo.jpg` | El Método page |
   | `clases.jpg` | Clases page |
   | `estudio.jpg` | El Estudio page |
   | `sobre-mi.jpg` | Sobre mí page (a photo of you would be perfect here!) |
   | `contacto.jpg` | Contacto page |

3. On GitHub, open the folder **`assets/images`**.
4. Click **Add file → Upload files**, drag your photo in, and click **Commit changes**.
5. Because it has the same name, it replaces the old one automatically.
6. Once you've used **your own** photo, delete its entry in `data/photo_credits.json`. When all the photos are yours, you can remove the credits page completely. Ask AI or David to help with this.

---

## If something goes wrong

Don't worry, it happens to everyone!

1. Go to the **Actions** tab and click the run with the red ❌.
2. Click on **build** to see the error message.
3. **Copy the error message and ask an AI assistant** (see the next section). Usually it's a small typo, such as a missing `"` or `---`.
4. **To undo a change:** open the file, click **History** (top right), find the version that worked, and copy its text back.
5. Or simply message David. Nothing is ever lost.

---

## Using AI to learn and get help 🤖

AI assistants like **Claude** (<https://claude.ai>) are wonderful patient teachers. They never get tired of questions, and you can ask in Spanish, Italian, German, French or English, whichever feels most natural.

### Ask it to explain new words

When you see a word you don't know, just ask:

> *"I'm a beginner managing my own website. Explain what 'front matter' means in Hugo, like you're explaining to a Pilates student."*

> *"¿Qué es un 'commit' en GitHub? Explícamelo de forma sencilla, sin palabras técnicas."*

> *"Spiegami cos'è il Markdown con un esempio semplice."*

### Ask it to check your changes before saving

Copy the whole file and ask:

> *"This is a page from my Hugo website. I changed the prices. Can you check I didn't break the formatting? [paste the file here]"*

### Ask it to fix an error

> *"My website didn't publish. This is the error from GitHub Actions. What does it mean and how do I fix it? [paste the error here]"*

### Ask it to help with writing and translations

> *"Here's my Spanish text for a new class. Translate it into natural, warm English for my Pilates website: [your text]"*

> *"Help me write a short, friendly description of a new prenatal Pilates class, in Spanish and English."*

### Tips for great answers

- **Say you're a beginner.** The answers will be simpler and more step by step.
- **Give context.** Mention "Hugo website", "GitHub" or "Markdown" so it knows exactly what you're using.
- **Ask follow-up questions.** "I don't understand step 3, can you explain it differently?" is a perfect question.
- **Ask for examples.** "Show me an example" often makes everything clear.
- **Never paste passwords** or other private information into an AI chat.
- **AI can make mistakes.** If something seems strange, ask it "Are you sure?" or check with David.

### Going further: AI that edits for you

There are also AI tools, such as **Claude Code** (the tool David used to build this website), that can change the files for you when you describe what you want in plain words. For example: *"Add a new class called 'Pilates for surfers' to the Clases page, in both languages."* Ask David to show you when you're ready. It's a great next step!

---

## Adding a new page

This is a bit more advanced, but completely doable:

1. In `content/es/`, click **Add file → Create new file**.
2. Name it, for example, `talleres.md` (only lowercase letters and dashes, ending in `.md`).
3. Start it with front matter, then write your text:

   ```
   ---
   title: "Talleres"
   translationKey: "workshops"
   description: "Talleres especiales de Pilates."
   ---

   Your text here...
   ```

4. Create the English version in `content/en/` (e.g. `workshops.md`) with **the same `translationKey`**.
5. To show it in the menu, add it in `hugo.toml` under `[languages.es.menus]` and `[languages.en.menus]`. Copy an existing menu item and change the name, the page and the `weight` (a higher number places it further right).

Tip: this is a great moment to ask AI to help you, step by step!

---

## Little glossary

| Word | What it means |
|---|---|
| **Hugo** | The program that turns your text files into a website |
| **PaperMod** | The base design (theme) we built on |
| **GitHub** | The website where all your files and their history are stored |
| **Repository (repo)** | Your project's folder on GitHub |
| **Commit** | Saving a change, with a short note describing it |
| **Markdown** | The simple writing format used for the pages (`.md` files) |
| **Front matter** | The settings block between `---` lines at the top of a page |
| **GitHub Actions** | The robot that rebuilds and publishes your site after every change |
| **GitHub Pages** | The free service that puts your website on the internet |
| **Theme** | The design: colours, fonts, layout |
| **Domain** | Your website's address. Later you can buy your own, like `patriziapilates.com` |

---

## Who to ask

- **For quick questions:** an AI assistant like Claude.
- **For anything bigger, or if you feel stuck:** David. He knows how everything was set up.

You've got this, Patrizia! Like Pilates, it's all about small, steady practice. 💜🌊
