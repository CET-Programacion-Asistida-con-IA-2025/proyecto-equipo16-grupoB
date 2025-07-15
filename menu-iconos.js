document.addEventListener('DOMContentLoaded', function () {
    const leftIcons = document.getElementById('leftIcons');
    const rightIcons = document.getElementById('rightIcons');

    const iconos = [
        { emoji: "💉", texto: "¿Qué son?", href: "#que-son" },
        { emoji: "💖", texto: "Importancia", href: "#importancia" },
        { emoji: "📋", texto: "Obligatorias", href: "#vacunas-obligatorias" },
        { emoji: "❓", texto: "FAQs", href: "#FAQs" },
        { emoji: "🧠", texto: "Quiz", href: "#vof" },
        { emoji: "🏥", texto: "Hospitales", href: "#mapa-de-hospitales" },
        { emoji: "✉️", texto: "Contacto", href: "#contacto" }
    ];

    // Dividir los iconos entre las dos columnas
    iconos.forEach((icono, index) => {
        const link = document.createElement('a');
        link.className = 'circle-link';
        link.href = icono.href;
        link.innerHTML = `${icono.emoji}<span>${icono.texto}</span>`;

        // Alternar entre columna izquierda y derecha
        if (index % 2 === 0) {
            leftIcons.appendChild(link);
        } else {
            rightIcons.appendChild(link);
        }
    });
});