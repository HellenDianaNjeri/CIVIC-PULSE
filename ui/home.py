import tkinter as tk
import json
import os
import random

class HomeScreen(tk.Frame):
    def __init__(self, master):
        super().__init__(master)
        tk.Label(self, text="Welcome to CivicPulse", font=("Arial", 24)).pack(pady=20)
        tk.Label(self, text="Your gateway to civic education in Kenya.", font=("Arial", 14)).pack(pady=10)
        tk.Button(self, text="Start Learning", command=master.show_constitution).pack(pady=20)

        tip_label = tk.Label(self, text=self.get_random_tip(), wraplength=700, font=("Arial", 10, "italic"), fg="gray")
        tip_label.pack(pady=30)

    def get_random_tip(self):
        filepath = os.path.join("data", "tips.json")
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                tips = json.load(f)
                return random.choice(tips)["tip"]
        except:
            return "Did you know? Civic education helps citizens make informed decisions."