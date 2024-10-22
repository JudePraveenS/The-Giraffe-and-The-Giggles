function startGame() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('stage-1').classList.remove('hidden');
}

function nextStage(stageId) {
    document.querySelectorAll('.container').forEach(container => container.classList.add('hidden'));
    document.getElementById(stageId).classList.remove('hidden');
}

function finishGame() {
    alert("Thank you for playing, my love! You make every moment special.");
}

window.onload = function() {
    const balloon = document.getElementById('balloon');
    let blowAmount = 0;

    // Simulate "blowing" using sound input (not real microphone input in this simple example)
    document.body.addEventListener('keypress', () => {
        blowAmount += 10;
        balloon.style.transform = `scale(${1 + blowAmount / 100})`;

        if (blowAmount >= 100) {
            balloon.classList.add('hidden');
            document.getElementById('message').innerText = "Your love fills my heart like this balloon!";
        }
    });

    // Drawing canvas
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let drawing = false;

    canvas.addEventListener('mousedown', () => drawing = true);
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mousemove', draw);

    function draw(event) {
        if (!drawing) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#ff69b4';
        ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }
};
