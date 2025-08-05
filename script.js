async function generate() {
  const log = document.getElementById('log-output');
  log.textContent = 'Sending prompt to AI...\n';

  const prompt = document.getElementById('prompt').value;

  const res = await fetch('/generate-site', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();

  log.textContent += data.log.join('\n');
  document.getElementById('iframe-preview').src = 'output.html';
}