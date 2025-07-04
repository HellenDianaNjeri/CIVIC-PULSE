from supabase import create_client, Client
import os

SUPABASE_URL = os.getenv("SUPABASE_URL", "https://vxkefgaeiqgkqyxxvlwq.supabase.co")
SUPABASE_KEY = os.getenv("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4a2VmZ2FlaXFna3F5eHh2bHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1NTk2MjgsImV4cCI6MjA2NzEzNTYyOH0.QHzpUXT--TA4cECevOULSkGzEy35w3xLNVg3Ryhkxik")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def fetch_constitution_articles():
    response = supabase.table("constitution").select("*").execute()
    return response.data

def fetch_rights():
    response = supabase.table("rights").select("*").execute()
    return response.data

def fetch_updates():
    response = supabase.table("updates").select("*").order("date", desc=True).execute()
    return response.data
