/*quiz d vacunas x cami, 5 preguntas */
const preguntasQuiz = [
  {
    pregunta: "Las vacunas pueden causar la enfermedad que intentan prevenir.",
    respuestaCorrecta: false,
    explicacion: "Falso. Las vacunas utilizan formas inactivadas o debilitadas del virus, o fragmentos del mismo, que no causan la enfermedad, sino que entrenan al sistema inmunológico."
  },
  {
    pregunta: "Es mejor contagiarse que vacunarse para ganar inmunidad.",
    respuestaCorrecta: false,
    explicacion: "Falso. Enfermarse puede ser muy peligroso. Las vacunas permiten desarrollar inmunidad sin los riesgos graves que conlleva contraer la enfermedad real."
  },
  {
    pregunta: "Las vacunas pasan por pruebas rigurosas antes de ser aprobadas.",
    respuestaCorrecta: true,
    explicacion: "Verdadero. Todas las vacunas autorizadas pasan por múltiples fases de investigación, ensayos clínicos y revisiones científicas para garantizar su seguridad y eficacia."
  },
  {
    pregunta: "Si muchas personas se vacunan, se protege también a quienes no pueden hacerlo.",
    respuestaCorrecta: true,
    explicacion: "Verdadero. Esto se llama inmunidad de grupo. Cuantas más personas estén vacunadas, menos circula el virus y más protegidas están las personas vulnerables."
  },
  {
    pregunta: "Las vacunas contienen chips para controlar a la población.",
    respuestaCorrecta: false,
    explicacion: "Falso. Este es un mito sin fundamento. Las vacunas son productos biológicos diseñados para prevenir enfermedades, no contienen dispositivos electrónicos ni materiales de rastreo."
  }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasUsuario = [];

function iniciarQuiz() {
  preguntaActual = 0;
  respuestasCorrectas = 0;
  respuestasUsuario = [];
  mostrarPregunta();
}

function mostrarPregunta() {
  const quizContainer = document.getElementById('vof');
  
  if (preguntaActual < preguntasQuiz.length) {
    const pregunta = preguntasQuiz[preguntaActual];
    
    quizContainer.innerHTML = `
      <h2>Quiz: Verdadero o Falso</h2>
      <div class="quiz-container">
        <div class="pregunta-numero">Pregunta ${preguntaActual + 1} de ${preguntasQuiz.length}</div>
        <div class="pregunta-texto">${pregunta.pregunta}</div>
        
        <div class="opciones-quiz">
          <button class="opcion-btn" onclick="responder(true)">
            🔘 Verdadero
          </button>
          <button class="opcion-btn" onclick="responder(false)">
            🔘 Falso
          </button>
        </div>
        
        <div class="progreso-quiz">
          <div class="barra-progreso">
            <div class="progreso" style="width: ${(preguntaActual / preguntasQuiz.length) * 100}%"></div>
          </div>
        </div>
      </div>
    `;
  } else {
    mostrarResultados();
  }
}

function responder(respuesta) {
  const pregunta = preguntasQuiz[preguntaActual];
  const esCorrecta = respuesta === pregunta.respuestaCorrecta;
  
  if (esCorrecta) {
    respuestasCorrectas++;
  }
  
  respuestasUsuario.push({
    pregunta: pregunta.pregunta,
    respuestaUsuario: respuesta,
    respuestaCorrecta: pregunta.respuestaCorrecta,
    explicacion: pregunta.explicacion,
    esCorrecta: esCorrecta
  });
  
  mostrarExplicacion(esCorrecta, pregunta.explicacion);
}

function mostrarExplicacion(esCorrecta, explicacion) {
  const quizContainer = document.getElementById('vof');
  
  quizContainer.innerHTML = `
    <h2>Quiz: Verdadero o Falso</h2>
    <div class="quiz-container">
      <div class="resultado-pregunta ${esCorrecta ? 'correcto' : 'incorrecto'}">
        <div class="icono-resultado">
          ${esCorrecta ? '✅' : '❌'}
        </div>
        <div class="texto-resultado">
          ${esCorrecta ? '¡Correcto!' : 'Incorrecto'}
        </div>
      </div>
      
      <div class="explicacion">
        <strong>Explicación:</strong><br>
        ${explicacion}
      </div>
      
      <button class="siguiente-btn" onclick="siguientePregunta()">
        ${preguntaActual < preguntasQuiz.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'} →
      </button>
      
      <div class="progreso-quiz">
        <div class="barra-progreso">
          <div class="progreso" style="width: ${((preguntaActual + 1) / preguntasQuiz.length) * 100}%"></div>
        </div>
      </div>
    </div>
  `;
}

function siguientePregunta() {
  preguntaActual++;
  mostrarPregunta();
}

function mostrarResultados() {
  const quizContainer = document.getElementById('vof');
  const aprobado = respuestasCorrectas >= 3;
  const porcentaje = Math.round((respuestasCorrectas / preguntasQuiz.length) * 100);
  
  let resultadoHTML = `
    <h2>Resultados del Quiz</h2>
    <div class="quiz-container">
      <div class="resultado-final ${aprobado ? 'aprobado' : 'desaprobado'}">
        <div class="icono-final">
          ${aprobado ? '🎉' : '📚'}
        </div>
        <div class="puntaje">
          ${respuestasCorrectas} de ${preguntasQuiz.length} correctas (${porcentaje}%)
        </div>
        <div class="mensaje-final">
          ${aprobado ? 
            '¡Buen trabajo, seguí así!' : 
            '¡No te desanimés! <a href="#inicio" onclick="volverInicio()">seguí aprendiendo aquí</a>'
          }
        </div>
      </div>
      
      <div class="resumen-respuestas">
        <h3>Resumen de tus respuestas:</h3>
  `;
  
  respuestasUsuario.forEach((item, index) => {
    resultadoHTML += `
      <div class="respuesta-item ${item.esCorrecta ? 'correcto' : 'incorrecto'}">
        <div class="pregunta-resumen">
          <strong>Pregunta ${index + 1}:</strong> ${item.pregunta}
        </div>
        <div class="respuesta-resumen">
          Tu respuesta: ${item.respuestaUsuario ? 'Verdadero' : 'Falso'} 
          ${item.esCorrecta ? '✅' : '❌'}
        </div>
        ${!item.esCorrecta ? `
          <div class="respuesta-correcta">
            Respuesta correcta: ${item.respuestaCorrecta ? 'Verdadero' : 'Falso'}
          </div>
        ` : ''}
      </div>
    `;
  });
  
  resultadoHTML += `
      </div>
      
      <div class="botones-finales">
        <button class="reiniciar-btn" onclick="iniciarQuiz()">
          🔄 Reintentar Quiz
        </button>
        <button class="volver-btn" onclick="volverInicio()">
          🏠 Volver al inicio
        </button>
      </div>
    </div>
  `;
  
  quizContainer.innerHTML = resultadoHTML;
}

function volverInicio() {
  document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
}

// Inicializar el quiz cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Agregar el botón para iniciar el quiz en la sección
  const seccionQuiz = document.getElementById('vof');
  if (seccionQuiz && !seccionQuiz.querySelector('.quiz-container')) {
    seccionQuiz.innerHTML = `
      <h2>Quiz: Verdadero o Falso</h2>
      <div class="quiz-intro">
        <p>¡Ponete a prueba! Respondé estas 5 preguntas sobre vacunas.</p>
        <p><strong>Necesitás 3 respuestas correctas para aprobar.</strong></p>
        <button class="iniciar-quiz-btn" onclick="iniciarQuiz()">
          🧠 Comenzar Quiz
        </button>
      </div>
    `;
  }
});

/*hasta acá las 5 q mandé al grupo de wpp*/



