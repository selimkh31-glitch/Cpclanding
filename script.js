const forms=document.querySelectorAll("[data-waitlist-form]");
const endpoint=window.CPC_WAITLIST_ENDPOINT||"";
forms.forEach(form=>form.addEventListener("submit",async e=>{
 e.preventDefault();
 const input=form.querySelector('input[type="email"]'),button=form.querySelector("button"),status=form.querySelector(".form-status");
 const email=input.value.trim().toLowerCase();
 status.className="form-status";
 if(!/^\S+@\S+\.\S+$/.test(email)){status.textContent="Entre une adresse email valide.";status.classList.add("error");return}
 if(!endpoint){status.textContent="La waitlist ouvre bientôt — endpoint de collecte à connecter.";status.classList.add("error");return}
 button.disabled=true;status.textContent="Inscription…";
 try{const res=await fetch(endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email,source:"cpc-landing",created_at:new Date().toISOString()})});if(!res.ok)throw new Error("request_failed");status.textContent="✓ Tu es sur la liste. À très vite sur CPC.";input.value=""}
 catch(_){status.textContent="Impossible de t'inscrire pour le moment. Réessaie dans un instant.";status.classList.add("error")}finally{button.disabled=false}
}));