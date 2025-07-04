import tkinter as tk
import os
import json
from utils.supabase_client import fetch_budget
from utils.translator import translate_text

class BudgetScreen(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        self.budget_data = []
        self.text_box = None

        tk.Label(self, text="National & County Budgets", font=("Arial", 18, "bold")).pack(pady=10)

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

        self.load_budget()

    def load_budget(self):
        try:
            self.budget_data = fetch_budget()
            if not self.budget_data:
                raise ValueError("No data from Supabase")
        except:
            try:
                filepath = os.path.join("data", "budget.json")
                with open(filepath, "r", encoding="utf-8") as f:
                    self.budget_data = json.load(f)
            except Exception as e:
                self.text_box.insert(tk.END, f"⚠️ Error loading budget: {e}")
                return
        self.display_budget(self.language_var.get())

    def display_budget(self, language):
        self.text_box.config(state="normal")
        self.text_box.delete(1.0, tk.END)
        for item in self.budget_data:
            full_text = f"{item['category']} - KES {item['allocation']}\n{item['description']}\n\n"
            translated = translate_text(full_text, language) if language != "English" else full_text
            self.text_box.insert(tk.END, translated)
        self.text_box.config(state="disabled")

    def on_language_change(self, selected_lang):
        self.display_budget(selected_lang)
