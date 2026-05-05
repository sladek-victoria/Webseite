# Gästemappe - Schleise Pension

Eine responsive digitale Gästemappe für die Schleise Pension Steinmauern.

## Features

- 🌍 **Mehrsprachig**: Deutsch, Englisch, Polnisch
- 📱 **Responsive**: Optimiert für Mobilgeräte
- 💾 **Persistent**: Speichert den Zustand zwischen Seitenaufrufen
- 🔑 **Moderne Struktur**: Einfache Navigation und klare Informationen
- ⚡ **Schnell**: Keine Abhängigkeiten, reines HTML/CSS/JavaScript

## Inhalte

- **Check-in**: Schlüsselbox und Zugangsinformationen
- **WLAN**: Netzwerkverbindung und Passwort
- **Hausregeln**: Verhaltensrichtlinien und Hinweise
- **Anreise**: Parkplatz und Orientierung
- **Unterkunft**: Ausstattung und Services
- **Abreise**: Check-out und Abmeldung

## Verwendung

Laden Sie die `gaestemappe.html` einfach im Browser:

```bash
# Lokal öffnen
open gaestemappe.html

# Oder Server starten
python3 -m http.server 8000
```

Dann besuchen Sie `http://localhost:8000/gaestemappe.html`

## GitHub Pages

Diese App kann direkt auf GitHub Pages gehostet werden:

1. Repository zu GitHub pushen
2. Settings → Pages → Branch auf `main` setzen
3. Verfügbar unter `https://username.github.io/repo-name/gaestemappe.html`

## Dateien

- `gaestemappe.html` - Komplette App (HTML, CSS, JavaScript)
- `schluesselbox.png` - Bild der Schlüsselbox
- `raucherbereich.png` - Bild des Raucherbereichs
- `klingeln.png` - Bild der Haustür
- `parkplatz.png` - Bild des Parkplatzes
- `anreise.png` - Bild Anreisebeschreibung

## Zustandsverwaltung

Die App speichert automatisch:
- Gewählte Sprache
- Aktuelle Seite
- Aktuelles Kapitel

Diese werden in `localStorage` gespeichert und beim nächsten Besuch wiederhergestellt.

## Anpassungen

Bearbeiten Sie direkt in `gaestemappe.html`:

- **Texte**: Im `T` Objekt (Translations)
- **Farben**: In den CSS-Variablen am Anfang des `<style>` Tags
- **Bilder**: Ersetzen Sie die PNG-Dateien durch Ihre eigenen
- **Kontaktdaten**: Telefonnummern in den `href="tel:xxxx"` Links

## Browser-Kompatibilität

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- iOS Safari: ✅
- Android Chrome: ✅

## Lizenz

Erstellt für Schleise Pension Steinmauern
