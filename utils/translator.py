# utils/translator.py

def translate_text(text, target_language):
    """
    Mock translation function for demo purposes.
    Simulates translated output without real API calls.
    Includes support for common Kenyan and international languages.
    """

    mock_translations = {
        "english": text,
        "kiswahili": "Mamlaka yote ni ya wananchi.",
        "french": "Tout le pouvoir appartient au peuple.",
        "german": "Alle Macht gehört dem Volk.",
        "kikuyu": "Utheri wothe ni wa andu.",
        "luo": "Teko duto ber gi ji.",
        "kalenjin": "Nguvu chego tugul chebo logoi.",
        "maasai": "Enkai pee engolon e naa.",
        "luhya": "Amandi yose nibe bantu.",
        "embu": "Utheri wothe ni wa andu aitu.",
        "meru": "Utethia wothe ni wa atumia na arume.",
    }

    lang_key = target_language.strip().lower()
    return mock_translations.get(lang_key, f"[Translated to {target_language}]\n{text}")
