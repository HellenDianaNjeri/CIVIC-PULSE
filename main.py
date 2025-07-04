import tkinter as tk
from ui import home, constitution, rights, budget, updates

class CivicPulseApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("CivicPulse")
        self.geometry("900x600")
        self.resizable(False, False)
        self.current_screen = None
        self.menu_bar = tk.Menu(self)
        self.config(menu=self.menu_bar)

        # Add navigation menu
        self.menu_bar.add_command(label="Home", command=self.show_home)
        self.menu_bar.add_command(label="Constitution", command=self.show_constitution)
        self.menu_bar.add_command(label="Rights", command=self.show_rights)
        self.menu_bar.add_command(label="Budget", command=self.show_budget)
        self.menu_bar.add_command(label="Updates", command=self.show_updates)

        self.show_home()

    def clear_screen(self):
        if self.current_screen:
            self.current_screen.destroy()

    def show_home(self):
        self.clear_screen()
        self.current_screen = home.HomeScreen(self)
        self.current_screen.pack(fill="both", expand=True)

    def show_constitution(self):
        self.clear_screen()
        self.current_screen = constitution.ConstitutionScreen(self)
        self.current_screen.pack(fill="both", expand=True)

    def show_rights(self):
        self.clear_screen()
        self.current_screen = rights.RightsScreen(self)
        self.current_screen.pack(fill="both", expand=True)

    def show_budget(self):
        self.clear_screen()
        self.current_screen = budget.BudgetScreen(self)
        self.current_screen.pack(fill="both", expand=True)

    def show_updates(self):
        self.clear_screen()
        self.current_screen = updates.UpdatesScreen(self)
        self.current_screen.pack(fill="both", expand=True)

if __name__ == "__main__":
    app = CivicPulseApp()
    app.mainloop()
