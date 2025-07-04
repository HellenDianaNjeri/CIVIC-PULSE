# CIVIC-PULSE

**CivicPulse** is a civic education desktop application built using **Python (Tkinter)**, **Supabase**, and **Claude AI**. It helps citizens of Kenya access simplified and multilingual information on:

- 📜 The Constitution
- ⚖️ Civil Rights
- 💰 National & County Budgets
- 🏛️ Local Governance Updates

---

## 🚀 Features

- ✅ **View and read** simplified articles of the Constitution
- 🧠 **Q&A** on citizens' rights
- 💸 **Budget simulator** & public fund summaries
- 📰 **Governance updates** from local authorities
- 🌍 **Language support**: English, Kiswahili, French, German, Kikuyu, Luo, Luhya, Kalenjin, Maasai, Embu, Meru
- 🌐 **Claude AI** integration for live translation
- ☁️ Supabase-powered backend (fetch + fallback to local JSON)

---

## 🖼️ Screenshots

| Home                         | Constitution                        | Rights Q&A                       |
|-----------------------------|-------------------------------------|----------------------------------|
| ![Home](screenshots/home_screen.png) | ![Constitution](screenshots/constitution_screen.png) | ![Rights](screenshots/rights_screen.png) |

| Budget View                  | Local Updates                       |
|-----------------------------|-------------------------------------|
| ![Budget](screenshots/budget_screen.png) | ![Updates](screenshots/updates_screen.png) |

---

## 🧩 Tech Stack

| Tool / Library     | Use Case                            |
|--------------------|-------------------------------------|
| Python             | Core language                       |
| Tkinter            | UI Framework                        |
| Supabase           | Realtime database & API backend     |
| Claude AI (Anthropic) | Natural language translation     |
| dotenv             | API key management                  |

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/civicpulse.git
cd civicpulse

2. Install Dependencies
Make sure you’re using Python 3.8+.

bash
Copy
Edit
pip install -r requirements.txt
3. Create .env File
env
Copy
Edit
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
CLAUDE_API_KEY=your-anthropic-key
4. Run the App
bash
Copy
Edit
python main.py
🔌 Supabase Configuration
Inside supabase/:

schema/ contains SQL to create constitution, rights, budget, and updates tables

seed/ has example JSON data to import

supabase_config.md documents how to connect the app to Supabase

🤖 Claude Integration
Claude (Anthropic) is used to translate civic content into local and international languages. The app connects to:

bash
Copy
Edit
https://api.anthropic.com/v1/messages
and supports translation for:

English

Kiswahili

French

German

Kikuyu

Luo

Luhya

Kalenjin

Maasai

Embu

Meru

🗃️ Project Structure
bash
Copy
Edit
CivicPulse/
├── main.py
├── ui/                # Screens: home, constitution, budget, rights, updates
├── utils/             # Supabase + Claude helpers
├── data/              # Local fallback .json files
├── supabase/          # schema + seed + config
├── assets/            # Logo, icons
├── screenshots/       # App demo images
├── requirements.txt
└── README.md
✨ Future Features
📣 Feedback submission form

📊 Charts for budget visualizations

🔁 Offline-first experience

🧩 Modular translation for new content

👥 Contributors
Hellen Diana — UI/UX + Backend Integration + Hackathon Lead

Powered by:

Supabase

Anthropic Claude

Python.org

📜 License
MIT License © 2025 Hellen Diana & CivicPulse Team

🙌 Acknowledgments
Mzalendo — for civic education inspiration

Kenya Law — for constitutional references

Power Learn Project — hackathon support

yaml
Copy
Edit
