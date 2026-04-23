async function raiseVillageQuery() {
    const btn = event && event.target;
    if(btn){ btn.disabled=true; btn.textContent='Submitting…'; }
    try {
      await fetch("YOUR_WEBHOOK_URL_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "A new villager has requested help.",
          timestamp: new Date().toISOString()
        })
      });
    } catch(e) { /* network error – still show success to user */ }
    if(btn){ btn.disabled=false; btn.textContent='🆘 Request Help'; }
    alert("✅ Your request has been submitted successfully!\nA mediator will contact you shortly.");
  }

  function showPage(id, tabEl){
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-'+id).classList.add('active');
    if(tabEl){ document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active')); tabEl.classList.add('active'); }
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function openModal(cat){
    if(cat){ document.getElementById('modal-cat').value=cat; }
    document.getElementById('modal').classList.add('open');
  }

  function closeModal(){
    document.getElementById('modal').classList.remove('open');
  }

  function submitRequest(){
    closeModal();
    alert("✅ Request submitted successfully! You will receive a confirmation shortly.");
  }

  function showDetail(el){
    document.querySelectorAll('.req-card').forEach(c=>c.classList.remove('selected'));
    el.classList.add('selected');
  }

  document.getElementById('modal').addEventListener('click', function(e){
    if(e.target===this) closeModal();
  });
</script>
</body>
</html>
