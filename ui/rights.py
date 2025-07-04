import tkinter as tk
import os
import json
from utils.supabase_client import fetch_rights
from utils.translator import translate_text

class RightsScreen(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.rights = []
        self.text_box = None

        tk.Label(self, text="Know Your Rights", font=("Arial", 18, "bold")).pack(pady=10)

        self.language_var = tk.StringVar(value="English")
        lang_menu = tk.OptionMenu(
            self,
            self.language_var,
            "English", "Kiswahili", "French", "German",
            "Kikuyu", "Luo", "Luhya", "Kalenjin", "Maasai", "Embu", "Meru",
            command=self.on_language_change
        )
        lang_menu.pack(pady=5)

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

        self.load_rights()

    def load_rights(self):
        try:
            self.rights = fetch_rights()
            if not self.rights:
                raise ValueError("No data from Supabase")
        except:
            try:
                filepath = os.path.join("data", "rights.json")
                with open(filepath, "r", encoding="utf-8") as f:
                    self.rights = json.load(f)
            except Exception as e:
                self.text_box.insert(tk.END, f"⚠️ Error loading rights: {e}")
                return
        self.display_rights(self.language_var.get())

    def display_rights(self, language):
        self.text_box.config(state="normal")
        self.text_box.delete(1.0, tk.END)
        for item in self.rights:
            full_text = f"Q: {item['question']}\nA: {item['answer']}\n\n"
            translated = translate_text(full_text, language) if language != "English" else full_text
            self.text_box.insert(tk.END, translated)
        self.text_box.config(state="disabled")

    def on_language_change(self, selected_lang):
        self.display_rights(selected_lang)