import{i as U,t as b}from"./i18n-BJ_62__y.js";import{l as v,b as H}from"./content-DSjmOCAm.js";const k="pv_admin_session";async function w(e){const t=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(s=>s.toString(16).padStart(2,"0")).join("")}function N(){return!0}async function j(e,t){if(!N()||e!=="victoria")return!1;const s=await w(t);if(s!=="dfa1c839b8ab499059b158d3fa90c70c7b378dbc81f0859c305a9eb85740ffd1")return!1;const a=await w(s+Date.now());return sessionStorage.setItem(k,a),!0}function q(){return sessionStorage.getItem(k)!==null}function P(){sessionStorage.removeItem(k)}const O="pv_admin_content",D=!1;let l=null,B=!1,I=!1;function F(e){return JSON.parse(JSON.stringify(e))}function L(){B||(B=!0,document.getElementById("unsaved-notice")?.classList.remove("hidden"))}function R(){B=!1,document.getElementById("unsaved-notice")?.classList.add("hidden")}function u(e,t="success"){const n=document.getElementById("admin-toast");n&&(n.textContent=e,n.className=`admin-toast ${t} visible`,setTimeout(()=>{n.classList.remove("visible")},3e3))}function m(e){const t=document.createElement("div");return t.textContent=String(e??""),t.innerHTML}async function M(){try{const e=localStorage.getItem(O);if(e)return JSON.parse(e)}catch{}return F(H)}async function K(e){try{return localStorage.setItem(O,JSON.stringify(e)),v.info("admin","Saved to localStorage"),!0}catch(t){return v.error("admin","localStorage save failed",t),!1}}async function g(e){await K(e),R()}function J(e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),a=document.createElement("a");a.href=s,a.download="content.json",a.click(),URL.revokeObjectURL(s),v.info("admin","content.json exported for download")}function x(e){document.querySelectorAll(".tab-btn").forEach(t=>t.classList.toggle("active",t.dataset.tab===e)),document.querySelectorAll(".admin-panel").forEach(t=>t.classList.toggle("active",t.id===`panel-${e}`))}function _(){document.querySelectorAll(".tab-btn").forEach(e=>e.addEventListener("click",()=>x(e.dataset.tab))),x("hero")}function V(){const e=document.createElement("div");e.id="admin-lightbox",e.className="admin-lightbox",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Vorschau"),e.innerHTML=`<button class="lb-close" aria-label="Schließen">&times;</button>
    <img class="lb-img" src="" alt="Vollbild-Vorschau" />`,document.body.appendChild(e);const t=e.querySelector(".lb-img"),n=a=>{t.src=a,e.classList.add("active"),document.body.style.overflow="hidden"},s=()=>{e.classList.remove("active"),document.body.style.overflow="",t.src=""};e.addEventListener("click",a=>{(a.target===e||a.target===e.querySelector(".lb-close"))&&s()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&s()}),document.getElementById("admin-app")?.addEventListener("click",a=>{const d=a.target;d.matches(".img-card-img:not(.img-card--broken .img-card-img), .hero-img-preview")&&d.src&&d.naturalWidth>0&&n(d.src)})}function h(e,t,n="",s=""){return`<div class="a-field">
    <label for="${e}">${t}${s?`<span class="a-hint">${s}</span>`:""}</label>
    <input class="a-input" type="text" id="${e}" value="${m(n)}" />
  </div>`}function G(e,t,n="",s=3,a=""){return`<div class="a-field">
    <label for="${e}">${t}${a?`<span class="a-hint">${a}</span>`:""}</label>
    <textarea class="a-input a-textarea" id="${e}" rows="${s}">${m(n)}</textarea>
  </div>`}function f(e){return document.getElementById(e)?.value.trim()??""}function $(e,t,n=null,s="Speichern"){const a=n?`<div class="a-card-footer"><button class="btn btn-save" id="${n}">💾 ${s}</button></div>`:"";return`<div class="a-card">
    <div class="a-card-header">${e}</div>
    <div class="a-card-body">${t}</div>
    ${a}
  </div>`}function y(e,t,n="",s=""){const a=document.getElementById(e);if(!a)return;const d=r=>r.split("/").pop(),i=t.map((r,c)=>{const p=r.startsWith("http")?r:n?n+"/"+r:r;return`<div class="img-card" data-idx="${c}">
      <div class="img-card-wrap">
        <img class="img-card-img" src="${m(p)}" alt="Foto ${c+1}" loading="lazy"
          onerror="this.closest('.img-card').classList.add('img-card--broken')" />
        <div class="img-card-broken-msg">&#128247; Foto nicht gefunden</div>
        <button class="img-card-remove" data-remove-img title="Foto entfernen">&times;</button>
      </div>
      <div class="img-card-filename" title="${m(r)}">${m(d(r))}</div>
      <input type="hidden" value="${m(r)}" data-img-path />
    </div>`}).join(""),o=`<div class="img-add-section">
        <p class="img-add-hint">&#128161; Legen Sie das neue Foto zuerst in den richtigen Ordner (z.&nbsp;B. <code>${m(s||"Bilder")}/</code>), dann tragen Sie den Dateinamen hier ein:</p>
        <div class="img-add-row">
          <input class="a-input img-new-input" type="text" id="${e}-new-path"
            placeholder="Ordner/dateiname.jpg" />
          <button class="btn-add-img" data-add-to="${e}">+ Foto hinzufügen</button>
        </div>
      </div>`;a.innerHTML=`
    <div class="img-card-grid">${i||'<p class="img-empty">Noch keine Fotos vorhanden.</p>'}</div>
    ${o}`,a.querySelectorAll("[data-remove-img]").forEach(r=>{r.addEventListener("click",()=>{r.closest(".img-card").remove(),L()})});{const r=a.querySelector("[data-add-to]");r&&r.addEventListener("click",()=>{const p=document.getElementById(`${e}-new-path`).value.trim();if(!p)return;const S=E(e);S.push(p),y(e,S,n,s),L()})}}function E(e){const t=document.getElementById(e);return t?[...t.querySelectorAll("[data-img-path]")].map(n=>n.value.trim()).filter(Boolean):[]}function C(e,t,n){const s=document.getElementById(e);if(!s)return;s.innerHTML=`
    <img id="${e}-preview" class="hero-img-preview" src="${m(t)}" alt=""
      onerror="this.style.opacity='.3'" />
    <label class="img-drop-zone img-drop-zone--sm" tabindex="0" role="button" aria-label="Bild ersetzen">
      <input type="file" accept="image/*" class="img-file-input" style="display:none" />
      <span class="img-drop-icon">&#128247;</span>
      <span class="img-drop-text">Bild ersetzen &ndash; hierher ziehen<br><span class="img-drop-link">oder Datei auswählen</span></span>
    </label>
    <input type="hidden" id="${e}-value" value="${m(t)}" />`;const a=s.querySelector(".img-drop-zone--sm"),d=s.querySelector(".img-file-input"),i=s.querySelector(`#${e}-preview`),o=s.querySelector(`#${e}-value`),r=async c=>{if(!(!c||!c.type.startsWith("image/"))){a.classList.add("uploading");try{if(!(D&&n)){const p=n?`${n}/${c.name}`:c.name;o.value=p,i.src=URL.createObjectURL(c),u(`Datei „${c.name}" bitte in den Ordner „${n||"."}" kopieren.`,"info")}i.style.opacity="1",L()}catch(p){u("Upload fehlgeschlagen: "+p.message,"error")}finally{a.classList.remove("uploading")}}};d.addEventListener("change",c=>{r(c.target.files[0]),d.value=""}),a.addEventListener("keydown",c=>{(c.key==="Enter"||c.key===" ")&&d.click()}),a.addEventListener("dragover",c=>{c.preventDefault(),a.classList.add("drag-over")}),a.addEventListener("dragleave",c=>{a.contains(c.relatedTarget)||a.classList.remove("drag-over")}),a.addEventListener("drop",c=>{c.preventDefault(),a.classList.remove("drag-over"),r(c.dataTransfer.files[0])})}function A(e){return document.getElementById(`${e}-value`)?.value?.trim()||""}function W(e){const t=document.getElementById("panel-hero");if(!t)return;const n=e.hero||{};t.innerHTML=`
    <p class="panel-intro">Hero-Bild und Logo der Startseite anpassen.<br>
      <em>Texte (Slogan, Begrüßungstext) werden über die Sprachdateien gepflegt und sind hier nicht änderbar.</em></p>

    ${$("🖼 Hero-Bild &amp; Logo",`
      <div class="a-field">
        <label>Hero-Bild <span class="a-hint">Das große Foto ganz oben auf der Startseite</span></label>
        <div id="hero-img-upload"></div>
      </div>
      <div class="a-field" style="margin-top:1.5rem">
        <label>Logo <span class="a-hint">Das Logo der Pension</span></label>
        <div id="hero-logo-upload"></div>
      </div>
    `,"save-hero","Hero speichern")}`,C("hero-img-upload",n.image||"","infos"),C("hero-logo-upload",n.logo||"","infos"),document.getElementById("save-hero").addEventListener("click",async()=>{l.hero={...l.hero,image:A("hero-img-upload"),logo:A("hero-logo-upload")},await g(l),u("Hero gespeichert ✓")})}function Z(e){const t=document.getElementById("panel-rooms");if(!t)return;const n=e.rooms||[],s=e.breakfast||{},a=e.gallery||[],d=n.map((i,o)=>{const r=`room-imgs-${o}`;return`<details class="a-details" ${o===0?"open":""}>
      <summary class="a-details-summary">
        <span class="a-details-icon">🛏</span> ${m(b(`content.rooms.${i.id}.name`))}
      </summary>
      <div class="a-details-body">
        <div class="a-field"><label>Bilder <span class="a-hint">Klicken Sie auf ✕ um ein Bild zu entfernen</span></label>
          <div id="${r}"></div>
        </div>
        <button class="btn btn-save btn-sm" data-save-room="${o}">💾 Bilder speichern</button>
      </div>
    </details>`}).join("");t.innerHTML=`
    <p class="panel-intro">Bilder für Zimmer, Frühstück und die Bildergalerie verwalten.</p>
    ${d}
    <details class="a-details">
      <summary class="a-details-summary">
        <span class="a-details-icon">🥐</span> Frühstück &ndash; Bilder
      </summary>
      <div class="a-details-body">
        <div class="a-field"><label>Bilder <span class="a-hint">Klicken Sie auf ✕ um ein Bild zu entfernen</span></label>
          <div id="bf-imgs"></div>
        </div>
        <button class="btn btn-save btn-sm" id="save-bf-imgs">💾 Bilder speichern</button>
      </div>
    </details>
    <details class="a-details">
      <summary class="a-details-summary">
        <span class="a-details-icon">🌄</span> Bildergalerie
      </summary>
      <div class="a-details-body">
        <div class="a-field"><label>Bilder <span class="a-hint">Klicken Sie auf ✕ um ein Bild zu entfernen</span></label>
          <div id="gallery-img-list"></div>
        </div>
        <button class="btn btn-save btn-sm" id="save-gallery">💾 Galerie speichern</button>
      </div>
    </details>`,n.forEach((i,o)=>{const r=i.id.charAt(0).toUpperCase()+i.id.slice(1);y(`room-imgs-${o}`,i.images||[],"",r)}),y("bf-imgs",s.images||[],"","Fruehstueck"),y("gallery-img-list",a.map(i=>i.src),"","allgemein"),t.querySelectorAll("[data-save-room]").forEach(i=>{i.addEventListener("click",async()=>{const o=Number(i.dataset.saveRoom);l.rooms[o]={...l.rooms[o],images:E(`room-imgs-${o}`)},await g(l),u(`Bilder für „${b(`content.rooms.${l.rooms[o].id}.name`)}“ gespeichert ✓`)})}),document.getElementById("save-bf-imgs").addEventListener("click",async()=>{l.breakfast={...l.breakfast,images:E("bf-imgs")},await g(l),u("Frühstück-Bilder gespeichert ✓")}),document.getElementById("save-gallery").addEventListener("click",async()=>{const i=E("gallery-img-list");l.gallery=i.map((o,r)=>({src:o,alt:a[r]?.alt||{de:"",en:"",pl:""}})),await g(l),u("Galerie gespeichert ✓")})}function Y(e){const t=document.getElementById("panel-prices");if(!t)return;const n=e.breakfast||{},s=e.extras||[],a=e.rooms||[];let d=a.map((i,o)=>{const r=m(b(`content.rooms.${i.id}.name`));let c=`
      <tr>
        <td class="ptbl-label">${r}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="1" id="ptbl-room-${o}" value="${i.price??0}" /></td>
        <td class="ptbl-unit">pro Nacht</td>
      </tr>`;return i.priceSingle!=null&&(c+=`
      <tr class="ptbl-row-alt">
        <td class="ptbl-label">${r} <small class="ptbl-note">(Einzelnutzung)</small></td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="1" id="ptbl-room-${o}-single" value="${i.priceSingle}" /></td>
        <td class="ptbl-unit">pro Nacht</td>
      </tr>`),c}).join("");d+=`
      <tr class="ptbl-row-sep">
        <td class="ptbl-label">${m(b("breakfast.title"))}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="0.5" id="ptbl-bf" value="${n.price??10}" /></td>
        <td class="ptbl-unit">pro Person</td>
      </tr>`,s.forEach((i,o)=>{const r=m(b(`content.extras.${i.id}.name`)),c=i.id==="dogs"?"pro Nacht (pauschal)":"pro Nacht";d+=`
      <tr>
        <td class="ptbl-label">${r}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="0.5" id="ptbl-extra-${o}" value="${i.price??0}" /></td>
        <td class="ptbl-unit">${c}</td>
      </tr>`}),t.innerHTML=`
    <p class="panel-intro">Alle Preise auf einen Blick – identisch zur Preistabelle auf der Webseite.</p>

    ${$("💶 Preise bearbeiten",`
      <table class="price-admin-table">
        <thead>
          <tr>
            <th>Leistung</th>
            <th>Preis (€)</th>
            <th>Einheit</th>
          </tr>
        </thead>
        <tbody>${d}</tbody>
      </table>
    `,"save-all-prices","Alle Preise speichern")}`,document.getElementById("save-all-prices").addEventListener("click",async()=>{a.forEach((i,o)=>{if(l.rooms[o].price=Number(document.getElementById(`ptbl-room-${o}`)?.value)||0,i.priceSingle!=null){const r=document.getElementById(`ptbl-room-${o}-single`)?.value;l.rooms[o].priceSingle=r!==""&&r!=null?Number(r):void 0}}),l.breakfast={...l.breakfast,price:Number(document.getElementById("ptbl-bf")?.value)||0},s.forEach((i,o)=>{l.extras[o]&&(l.extras[o].price=Number(document.getElementById(`ptbl-extra-${o}`)?.value)||0)}),await g(l),u("Alle Preise gespeichert ✓")})}function Q(e){const t=document.getElementById("panel-contact");if(!t)return;const n=e.contact||{};t.innerHTML=`
    <p class="panel-intro">Kontaktdaten und Öffnungszeiten für Gäste.</p>

    ${$("📍 Kontaktdaten",`
      ${h("c-address","Adresse",n.address||"")}
      ${G("c-phones","Telefonnummern (eine pro Zeile)",(n.phones||[]).join(`
`),2)}
      ${h("c-email","E-Mail-Adresse",n.email||"")}
    `,"save-contact","Kontakt speichern")}

    ${$("🕐 Check-in / Check-out",`
      <div class="a-row-2">
        ${h("c-checkin","Check-in ab",n.checkIn||"","z.B. 14:00")}
        ${h("c-checkout","Check-out bis",n.checkOut||"","z.B. 11:00")}
      </div>
    `,"save-times","Zeiten speichern")}`,document.getElementById("save-contact").addEventListener("click",async()=>{l.contact={...l.contact,address:f("c-address"),phones:f("c-phones").split(`
`).map(s=>s.trim()).filter(Boolean),email:f("c-email")},await g(l),u("Kontakt gespeichert ✓")}),document.getElementById("save-times").addEventListener("click",async()=>{l.contact={...l.contact,checkIn:f("c-checkin"),checkOut:f("c-checkout")},await g(l),u("Check-in/out gespeichert ✓")})}async function T(){if(I)return;I=!0,l=await M();const e=document.getElementById("admin-mode-badge");e&&(e.textContent="STATIC – localStorage",e.className="admin-mode-badge static"),W(l),Z(l),Y(l),Q(l),_(),V(),document.getElementById("export-btn")?.addEventListener("click",()=>{J(l),u("content.json heruntergeladen ✓")}),document.getElementById("logout-btn")?.addEventListener("click",()=>{P(),location.reload()}),document.getElementById("login-screen")?.classList.add("hidden"),document.getElementById("admin-app")?.classList.remove("hidden"),v.info("admin","Admin panel ready")}function X(){if(q()){T();return}const e=document.getElementById("login-screen"),t=document.getElementById("not-configured-msg");if(!N()){e?.classList.remove("hidden"),t&&(t.hidden=!1),document.getElementById("login-form")?.classList.add("hidden");return}e?.classList.remove("hidden"),document.getElementById("login-form")?.addEventListener("submit",async n=>{n.preventDefault();const s=document.getElementById("input-username").value.trim(),a=document.getElementById("input-password").value,d=n.target.querySelector("button[type=submit]"),i=document.getElementById("login-error");if(i&&(i.textContent=""),d.disabled=!0,d.textContent="…",await j(s,a))await T();else{const r="victoria";i&&(i.textContent=`Anmeldung fehlgeschlagen. Benutzername: „${r}"`,i.style.cssText="display:block;color:#C0392B;font-weight:600;margin-top:.75rem"),document.getElementById("input-password").value="",v.warn("admin","Login failed for username: "+s)}d.disabled=!1,d.textContent="Anmelden"})}function z(){U(),X()}import.meta.vitest||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):z());
