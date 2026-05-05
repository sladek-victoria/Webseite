import{i as M,t as h}from"./i18n-BKoP9RMg.js";import{l as E,b as P}from"./content-CPn79Hl4.js";const x="pv_admin_session";async function z(e){const t=new TextEncoder().encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function j(){return!1}async function R(e,t){if(!j()||e!=="victoria")return!1;const i=await z(t);if(i!=="dfa1c839b8ddab499059b158d3fa90c70c7b378dbc81f0859c305a9eb85740ffd1")return!1;const a=await z(i+Date.now());return sessionStorage.setItem(x,a),!0}function K(){return sessionStorage.getItem(x)!==null}function J(){sessionStorage.removeItem(x)}const D="pv_admin_content";let l=null,I=!1,T=!1,C=!1;function W(e){return JSON.parse(JSON.stringify(e))}function y(){I||(I=!0,document.getElementById("unsaved-notice")?.classList.remove("hidden"))}function _(){I=!1,document.getElementById("unsaved-notice")?.classList.add("hidden")}function g(e,t="success"){const n=document.getElementById("admin-toast");n&&(n.textContent=e,n.className=`admin-toast ${t} visible`,setTimeout(()=>{n.classList.remove("visible")},3e3))}function m(e){const t=document.createElement("div");return t.textContent=String(e??""),t.innerHTML}async function G(){try{return(await fetch("/api/admin/upload",{method:"GET"})).status===204}catch{return!1}}async function V(){try{const e=localStorage.getItem(D);if(e)return JSON.parse(e)}catch{}return W(P)}async function Z(e){try{return localStorage.setItem(D,JSON.stringify(e)),E.info("admin","Saved to localStorage"),!0}catch(t){return E.error("admin","localStorage save failed",t),!1}}async function v(e){await Z(e),_()}function Y(e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(n),a=document.createElement("a");a.href=i,a.download="content.json",a.click(),URL.revokeObjectURL(i),E.info("admin","content.json exported for download")}function N(e){document.querySelectorAll(".tab-btn").forEach(t=>t.classList.toggle("active",t.dataset.tab===e)),document.querySelectorAll(".admin-panel").forEach(t=>t.classList.toggle("active",t.id===`panel-${e}`))}function Q(){document.querySelectorAll(".tab-btn").forEach(e=>e.addEventListener("click",()=>N(e.dataset.tab))),N("hero")}function X(){const e=document.createElement("div");e.id="admin-lightbox",e.className="admin-lightbox",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Vorschau"),e.innerHTML=`<button class="lb-close" aria-label="Schließen">&times;</button>
    <img class="lb-img" src="" alt="Vollbild-Vorschau" />`,document.body.appendChild(e);const t=e.querySelector(".lb-img"),n=a=>{t.src=a,e.classList.add("active"),document.body.style.overflow="hidden"},i=()=>{e.classList.remove("active"),document.body.style.overflow="",t.src=""};e.addEventListener("click",a=>{(a.target===e||a.target===e.querySelector(".lb-close"))&&i()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&i()}),document.getElementById("admin-app")?.addEventListener("click",a=>{const d=a.target;d.matches(".img-card-img:not(.img-card--broken .img-card-img), .hero-img-preview")&&d.src&&d.naturalWidth>0&&n(d.src)})}function $(e,t,n="",i=""){return`<div class="a-field">
    <label for="${e}">${t}${i?`<span class="a-hint">${i}</span>`:""}</label>
    <input class="a-input" type="text" id="${e}" value="${m(n)}" />
  </div>`}function ee(e,t,n="",i=3,a=""){return`<div class="a-field">
    <label for="${e}">${t}${a?`<span class="a-hint">${a}</span>`:""}</label>
    <textarea class="a-input a-textarea" id="${e}" rows="${i}">${m(n)}</textarea>
  </div>`}function b(e){return document.getElementById(e)?.value.trim()??""}function B(e,t,n=null,i="Speichern"){const a=n?`<div class="a-card-footer"><button class="btn btn-save" id="${n}">💾 ${i}</button></div>`:"";return`<div class="a-card">
    <div class="a-card-header">${e}</div>
    <div class="a-card-body">${t}</div>
    ${a}
  </div>`}async function F(e,t){return new Promise((n,i)=>{const a=new FileReader;a.onerror=()=>i(new Error("Datei konnte nicht gelesen werden")),a.onload=async d=>{try{const r=await fetch("/api/admin/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filename:e.name,folder:t,dataUrl:d.target.result})});if(!r.ok){const c=await r.json().catch(()=>({}));i(new Error(c.error||"Upload fehlgeschlagen"));return}const{src:o}=await r.json();n(o)}catch(r){i(r)}},a.readAsDataURL(e)})}function te(e,t){const n=e.querySelector(".img-card-grid"),i=document.createElement("div");i.className="img-card img-card--loading",i.innerHTML=`<div class="img-card-wrap"><div class="img-card-spinner"></div></div>
    <div class="img-card-filename">${m(t)}</div>`;const a=n.querySelector(".img-empty");return a&&a.remove(),n.appendChild(i),i}function ne(e,t,n=""){const i=t.startsWith("http")?t:n?n+"/"+t:t,a=t.split("/").pop();e.className="img-card",e.innerHTML=`<div class="img-card-wrap">
    <img class="img-card-img" src="${m(i)}" alt="${m(a)}" loading="lazy"
      onerror="this.closest('.img-card').classList.add('img-card--broken')" />
    <div class="img-card-broken-msg">&#128247; Foto nicht gefunden</div>
    <button class="img-card-remove" data-remove-img title="Foto entfernen">&times;</button>
  </div>
  <div class="img-card-filename" title="${m(t)}">${m(a)}</div>
  <input type="hidden" value="${m(t)}" data-img-path />`,e.querySelector("[data-remove-img]").addEventListener("click",()=>{e.remove(),y()})}function L(e,t,n="",i=""){const a=document.getElementById(e);if(!a)return;const d=s=>s.split("/").pop(),r=t.map((s,p)=>{const f=s.startsWith("http")?s:n?n+"/"+s:s;return`<div class="img-card" data-idx="${p}">
      <div class="img-card-wrap">
        <img class="img-card-img" src="${m(f)}" alt="Foto ${p+1}" loading="lazy"
          onerror="this.closest('.img-card').classList.add('img-card--broken')" />
        <div class="img-card-broken-msg">&#128247; Foto nicht gefunden</div>
        <button class="img-card-remove" data-remove-img title="Foto entfernen">&times;</button>
      </div>
      <div class="img-card-filename" title="${m(s)}">${m(d(s))}</div>
      <input type="hidden" value="${m(s)}" data-img-path />
    </div>`}).join(""),o=C&&i,c=o?`<label class="img-drop-zone" tabindex="0" role="button" aria-label="Foto auswählen oder hierher ziehen">
        <input type="file" accept="image/*" multiple class="img-file-input" style="display:none" />
        <span class="img-drop-icon">&#128444;&#65039;</span>
        <span class="img-drop-text">Foto hierher ziehen<br><span class="img-drop-link">oder Datei auswählen</span></span>
      </label>`:`<div class="img-add-section">
        <p class="img-add-hint">&#128161; Legen Sie das neue Foto zuerst in den richtigen Ordner (z.&nbsp;B. <code>${m(i||"Bilder")}/</code>), dann tragen Sie den Dateinamen hier ein:</p>
        <div class="img-add-row">
          <input class="a-input img-new-input" type="text" id="${e}-new-path"
            placeholder="Ordner/dateiname.jpg" />
          <button class="btn-add-img" data-add-to="${e}">+ Foto hinzufügen</button>
        </div>
      </div>`;if(a.innerHTML=`
    <div class="img-card-grid">${r||'<p class="img-empty">Noch keine Fotos vorhanden.</p>'}</div>
    ${c}`,a.querySelectorAll("[data-remove-img]").forEach(s=>{s.addEventListener("click",()=>{s.closest(".img-card").remove(),y()})}),o){const s=a.querySelector(".img-drop-zone"),p=a.querySelector(".img-file-input"),f=async u=>{for(const w of Array.from(u)){if(!w.type.startsWith("image/"))continue;const A=te(a,w.name);try{const S=await F(w,i);ne(A,S,n),y()}catch(S){A.remove(),g("Upload fehlgeschlagen: "+S.message,"error")}}};p.addEventListener("change",u=>{f(u.target.files),p.value=""}),s.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&p.click()}),s.addEventListener("dragover",u=>{u.preventDefault(),s.classList.add("drag-over")}),s.addEventListener("dragleave",u=>{s.contains(u.relatedTarget)||s.classList.remove("drag-over")}),s.addEventListener("drop",u=>{u.preventDefault(),s.classList.remove("drag-over"),f(u.dataTransfer.files)})}else{const s=a.querySelector("[data-add-to]");s&&s.addEventListener("click",()=>{const f=document.getElementById(`${e}-new-path`).value.trim();if(!f)return;const u=k(e);u.push(f),L(e,u,n,i),y()})}}function k(e){const t=document.getElementById(e);return t?[...t.querySelectorAll("[data-img-path]")].map(n=>n.value.trim()).filter(Boolean):[]}function U(e,t,n){const i=document.getElementById(e);if(!i)return;i.innerHTML=`
    <img id="${e}-preview" class="hero-img-preview" src="${m(t)}" alt=""
      onerror="this.style.opacity='.3'" />
    <label class="img-drop-zone img-drop-zone--sm" tabindex="0" role="button" aria-label="Bild ersetzen">
      <input type="file" accept="image/*" class="img-file-input" style="display:none" />
      <span class="img-drop-icon">&#128247;</span>
      <span class="img-drop-text">Bild ersetzen &ndash; hierher ziehen<br><span class="img-drop-link">oder Datei auswählen</span></span>
    </label>
    <input type="hidden" id="${e}-value" value="${m(t)}" />`;const a=i.querySelector(".img-drop-zone--sm"),d=i.querySelector(".img-file-input"),r=i.querySelector(`#${e}-preview`),o=i.querySelector(`#${e}-value`),c=async s=>{if(!(!s||!s.type.startsWith("image/"))){a.classList.add("uploading");try{if(C&&n){const p=await F(s,n);o.value=p,r.src=p}else{const p=n?`${n}/${s.name}`:s.name;o.value=p,r.src=URL.createObjectURL(s),g(`Datei „${s.name}" bitte in den Ordner „${n||"."}" kopieren.`,"info")}r.style.opacity="1",y()}catch(p){g("Upload fehlgeschlagen: "+p.message,"error")}finally{a.classList.remove("uploading")}}};d.addEventListener("change",s=>{c(s.target.files[0]),d.value=""}),a.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&d.click()}),a.addEventListener("dragover",s=>{s.preventDefault(),a.classList.add("drag-over")}),a.addEventListener("dragleave",s=>{a.contains(s.relatedTarget)||a.classList.remove("drag-over")}),a.addEventListener("drop",s=>{s.preventDefault(),a.classList.remove("drag-over"),c(s.dataTransfer.files[0])})}function q(e){return document.getElementById(`${e}-value`)?.value?.trim()||""}function ae(e){const t=document.getElementById("panel-hero");if(!t)return;const n=e.hero||{};t.innerHTML=`
    <p class="panel-intro">Hero-Bild und Logo der Startseite anpassen.<br>
      <em>Texte (Slogan, Begrüßungstext) werden über die Sprachdateien gepflegt und sind hier nicht änderbar.</em></p>

    ${B("🖼 Hero-Bild &amp; Logo",`
      <div class="a-field">
        <label>Hero-Bild <span class="a-hint">Das große Foto ganz oben auf der Startseite</span></label>
        <div id="hero-img-upload"></div>
      </div>
      <div class="a-field" style="margin-top:1.5rem">
        <label>Logo <span class="a-hint">Das Logo der Pension</span></label>
        <div id="hero-logo-upload"></div>
      </div>
    `,"save-hero","Hero speichern")}`,U("hero-img-upload",n.image||"","infos"),U("hero-logo-upload",n.logo||"","infos"),document.getElementById("save-hero").addEventListener("click",async()=>{l.hero={...l.hero,image:q("hero-img-upload"),logo:q("hero-logo-upload")},await v(l),g("Hero gespeichert ✓")})}function ie(e){const t=document.getElementById("panel-rooms");if(!t)return;const n=e.rooms||[],i=e.breakfast||{},a=e.gallery||[],d=n.map((r,o)=>{const c=`room-imgs-${o}`;return`<details class="a-details" ${o===0?"open":""}>
      <summary class="a-details-summary">
        <span class="a-details-icon">🛏</span> ${m(h(`content.rooms.${r.id}.name`))}
      </summary>
      <div class="a-details-body">
        <div class="a-field"><label>Bilder <span class="a-hint">Klicken Sie auf ✕ um ein Bild zu entfernen</span></label>
          <div id="${c}"></div>
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
    </details>`,n.forEach((r,o)=>{const c=r.id.charAt(0).toUpperCase()+r.id.slice(1);L(`room-imgs-${o}`,r.images||[],"",c)}),L("bf-imgs",i.images||[],"","Fruehstueck"),L("gallery-img-list",a.map(r=>r.src),"","allgemein"),t.querySelectorAll("[data-save-room]").forEach(r=>{r.addEventListener("click",async()=>{const o=Number(r.dataset.saveRoom);l.rooms[o]={...l.rooms[o],images:k(`room-imgs-${o}`)},await v(l),g(`Bilder für „${h(`content.rooms.${l.rooms[o].id}.name`)}“ gespeichert ✓`)})}),document.getElementById("save-bf-imgs").addEventListener("click",async()=>{l.breakfast={...l.breakfast,images:k("bf-imgs")},await v(l),g("Frühstück-Bilder gespeichert ✓")}),document.getElementById("save-gallery").addEventListener("click",async()=>{const r=k("gallery-img-list");l.gallery=r.map((o,c)=>({src:o,alt:a[c]?.alt||{de:"",en:"",pl:""}})),await v(l),g("Galerie gespeichert ✓")})}function se(e){const t=document.getElementById("panel-prices");if(!t)return;const n=e.breakfast||{},i=e.extras||[],a=e.rooms||[];let d=a.map((r,o)=>{const c=m(h(`content.rooms.${r.id}.name`));let s=`
      <tr>
        <td class="ptbl-label">${c}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="1" id="ptbl-room-${o}" value="${r.price??0}" /></td>
        <td class="ptbl-unit">pro Nacht</td>
      </tr>`;return r.priceSingle!=null&&(s+=`
      <tr class="ptbl-row-alt">
        <td class="ptbl-label">${c} <small class="ptbl-note">(Einzelnutzung)</small></td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="1" id="ptbl-room-${o}-single" value="${r.priceSingle}" /></td>
        <td class="ptbl-unit">pro Nacht</td>
      </tr>`),s}).join("");d+=`
      <tr class="ptbl-row-sep">
        <td class="ptbl-label">${m(h("breakfast.title"))}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="0.5" id="ptbl-bf" value="${n.price??10}" /></td>
        <td class="ptbl-unit">pro Person</td>
      </tr>`,i.forEach((r,o)=>{const c=m(h(`content.extras.${r.id}.name`)),s=r.id==="dogs"?"pro Nacht (pauschal)":"pro Nacht";d+=`
      <tr>
        <td class="ptbl-label">${c}</td>
        <td class="ptbl-input"><input class="a-input price-input" type="number" min="0" step="0.5" id="ptbl-extra-${o}" value="${r.price??0}" /></td>
        <td class="ptbl-unit">${s}</td>
      </tr>`}),t.innerHTML=`
    <p class="panel-intro">Alle Preise auf einen Blick – identisch zur Preistabelle auf der Webseite.</p>

    ${B("💶 Preise bearbeiten",`
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
    `,"save-all-prices","Alle Preise speichern")}`,document.getElementById("save-all-prices").addEventListener("click",async()=>{a.forEach((r,o)=>{if(l.rooms[o].price=Number(document.getElementById(`ptbl-room-${o}`)?.value)||0,r.priceSingle!=null){const c=document.getElementById(`ptbl-room-${o}-single`)?.value;l.rooms[o].priceSingle=c!==""&&c!=null?Number(c):void 0}}),l.breakfast={...l.breakfast,price:Number(document.getElementById("ptbl-bf")?.value)||0},i.forEach((r,o)=>{l.extras[o]&&(l.extras[o].price=Number(document.getElementById(`ptbl-extra-${o}`)?.value)||0)}),await v(l),g("Alle Preise gespeichert ✓")})}function re(e){const t=document.getElementById("panel-contact");if(!t)return;const n=e.contact||{};t.innerHTML=`
    <p class="panel-intro">Kontaktdaten und Öffnungszeiten für Gäste.</p>

    ${B("📍 Kontaktdaten",`
      ${$("c-address","Adresse",n.address||"")}
      ${ee("c-phones","Telefonnummern (eine pro Zeile)",(n.phones||[]).join(`
`),2)}
      ${$("c-email","E-Mail-Adresse",n.email||"")}
    `,"save-contact","Kontakt speichern")}

    ${B("🕐 Check-in / Check-out",`
      <div class="a-row-2">
        ${$("c-checkin","Check-in ab",n.checkIn||"","z.B. 14:00")}
        ${$("c-checkout","Check-out bis",n.checkOut||"","z.B. 11:00")}
      </div>
    `,"save-times","Zeiten speichern")}`,document.getElementById("save-contact").addEventListener("click",async()=>{l.contact={...l.contact,address:b("c-address"),phones:b("c-phones").split(`
`).map(i=>i.trim()).filter(Boolean),email:b("c-email")},await v(l),g("Kontakt gespeichert ✓")}),document.getElementById("save-times").addEventListener("click",async()=>{l.contact={...l.contact,checkIn:b("c-checkin"),checkOut:b("c-checkout")},await v(l),g("Check-in/out gespeichert ✓")})}async function H(){if(T)return;T=!0,C=await G(),l=await V();const e=document.getElementById("admin-mode-badge");e&&(e.textContent="STATIC – localStorage",e.className="admin-mode-badge static"),ae(l),ie(l),se(l),re(l),Q(),X(),document.getElementById("export-btn")?.addEventListener("click",()=>{Y(l),g("content.json heruntergeladen ✓")}),document.getElementById("logout-btn")?.addEventListener("click",()=>{J(),location.reload()}),document.getElementById("login-screen")?.classList.add("hidden"),document.getElementById("admin-app")?.classList.remove("hidden"),E.info("admin","Admin panel ready")}function oe(){if(K()){H();return}const e=document.getElementById("login-screen"),t=document.getElementById("not-configured-msg");if(!j()){e?.classList.remove("hidden"),t&&(t.hidden=!1),document.getElementById("login-form")?.classList.add("hidden");return}e?.classList.remove("hidden"),document.getElementById("login-form")?.addEventListener("submit",async n=>{n.preventDefault();const i=document.getElementById("input-username").value.trim(),a=document.getElementById("input-password").value,d=n.target.querySelector("button[type=submit]"),r=document.getElementById("login-error");if(r&&(r.textContent=""),d.disabled=!0,d.textContent="…",await R(i,a))await H();else{const c="victoria";r&&(r.textContent=`Anmeldung fehlgeschlagen. Benutzername: „${c}"`,r.style.cssText="display:block;color:#C0392B;font-weight:600;margin-top:.75rem"),document.getElementById("input-password").value="",E.warn("admin","Login failed for username: "+i)}d.disabled=!1,d.textContent="Anmelden"})}function O(){M(),oe()}import.meta.vitest||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O):O());
