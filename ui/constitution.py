import tkinter as tk
from utils.supabase_client import fetch_constitution_articles
from utils.translator import translate_text

class ConstitutionScreen(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.articles = []
        self.text_box = None

        tk.Label(self, text="Kenyan Constitution - Supabase", font=("Arial", 18, "bold")).pack(pady=10)

        # Language selector
        self.language_var = tk.StringVar(value="English")
        languages = [
    "English", "Kiswahili", "French", "German",
    "Kikuyu", "Luo", "Luhya", "Kalenjin", "Maasai", "Embu", "Meru"
]

        lang_menu = tk.OptionMenu(
            self,
            self.language_var,
            *languages,
            command=self.on_language_change
        )
        lang_menu.pack(pady=5)

        # Scrollable text area
        text_frame = tk.Frame(self)
        text_frame.pack(fill="both", expand=True, padx=10, pady=10)

        scrollbar = tk.Scrollbar(text_frame)
        scrollbar.pack(side="right", fill="y")

        self.text_box = tk.Text(
            text_frame,
            wrap="word",
            yscrollcommand=scrollbar.set,
            font=("Arial", 12),
            relief="sunken",
            borderwidth=2
        )
        self.text_box.pack(side="left", fill="both", expand=True)
        scrollbar.config(command=self.text_box.yview)

        self.load_articles()

    def load_articles(self):
        try:
            self.articles = fetch_constitution_articles()
            print("✅ Articles fetched from Supabase:", self.articles)

            if not self.articles:
                self.articles = [
                    {
                        "article": "Article 1",
                        "title": "Sovereignty of the People",
                        "summary": "All sovereign power belongs to the people of Kenya."
                    },
                    {
                        "article": "Article 2",
                        "title": "Supremacy of the Constitution",
                        "summary": "This Constitution is the supreme law of the Republic."
                    }
                ]
                print("⚠️ No articles from Supabase, using fallback data.")

            self.display_articles(self.articles, self.language_var.get())
        except Exception as e:
            error_msg = f"⚠️ Error loading articles: {e}"
            self.text_box.insert(tk.END, error_msg)
            print(error_msg)

    def display_articles(self, articles, language):
        self.text_box.config(state="normal")
        self.text_box.delete(1.0, tk.END)

        for article in articles:
            full_text = f"{article['article']}: {article['title']}\n{article['summary']}\n\n"
            translated = translate_text(full_text, language) if language != "English" else full_text
            self.text_box.insert(tk.END, translated)

        self.text_box.config(state="disabled")

    def on_language_change(self, selected_lang):
        self.display_articles(self.articles, selected_lang)
