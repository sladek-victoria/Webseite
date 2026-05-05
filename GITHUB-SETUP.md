# GitHub-Anleitung

## Repository erstellen

1. GitHub-Account öffnen (falls noch nicht vorhanden unter https://github.com/signup)
2. Neues Repository erstellen:
   - Name: `gaestemappe` (oder beliebig)
   - Description: "Digitale Gästemappe für Schleise Pension"
   - Public (damit es GitHub Pages gibt)
   - Keine README/License initialisieren (haben wir schon)

## Lokal pushen

```bash
# Im Projektverzeichnis
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/gaestemappe.git
git push -u origin main
```

## GitHub Pages aktivieren

1. Im Repository: Settings → Pages
2. "Source" auf "Deploy from a branch" setzen
3. Branch: `main` auswählen
4. Speichern

Nach 1-2 Minuten ist die App verfügbar unter:
- https://USERNAME.github.io/gaestemappe/gaestemappe.html

## Updates pushen

```bash
git add .
git commit -m "Beschreibung der Änderungen"
git push
```

Die Website wird automatisch aktualisiert.

## Domain hinzufügen (optional)

Falls Sie einen eigenen Domain haben:
1. DNS-Settings der Domain anpassen
2. In GitHub Pages Custom Domain eintragen
3. HTTPS aktivieren

## Hilfreiche Links

- https://docs.github.com/en/pages
- https://docs.github.com/en/pages/quickstart
