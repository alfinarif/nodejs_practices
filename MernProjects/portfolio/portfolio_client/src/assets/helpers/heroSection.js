// script.js
document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        '"performance": "High"',
        '"security": "Enterprise-ready"',
        '"uptime": "99.9%"'
    ];

    const terminalBody = document.querySelector('.terminal-body');
    const cursorLine = document.querySelector('.cursor').parentElement;

    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < skills.length) {
            const p = document.createElement('p');
            p.className = 'ps-3 text-secondary';
            p.innerHTML = skills[lineIndex];
            // Insert before the cursor line
            terminalBody.insertBefore(p, cursorLine);
            lineIndex++;
            setTimeout(typeLine, 1000);
        }
    }

    // Start typing after a delay
    setTimeout(typeLine, 1500);
});