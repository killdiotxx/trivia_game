const questions = [
    {
      type: "geografia",
      question: "¿Cuál es la capital de Francia?",
      options: ["París", "Berlín", "Londres"],
      correctIndex: 0,
    },
    {
      type: "geografia",
      question: "¿En qué país se encuentra la Gran Muralla China?",
      options: ["China", "Japón", "Corea del Sur"],
      correctIndex: 0,
    },
    {
      type: "geografia",
      question: "¿Cuál es el país más grande del mundo?",
      options: ["Rusia", "Canadá", "Estados Unidos"],
      correctIndex: 0,
    },
    {
      type: "arte",
      question: "¿Quién pintó la Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
      correctIndex: 0,
    },
    {
      type: "arte",
      question: "¿Cuál es la obra más famosa de Michelangelo?",
      options: ["La última cena", "La creación de Adán", "El grito"],
      correctIndex: 1,
    },
    {
      type: "arte",
      question: "¿Qué famoso pintor fue conocido como el 'holandés errante'?",
      options: ["Rembrandt", "Claude Monet", "Salvador Dalí"],
      correctIndex: 0,
    },
  ];
  
  let currentQuestion = 0;
  let playerName = "";
  let score = 0; // Variable para llevar el registro del puntaje
  
  function showWelcomeScreen() {
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("finalMessage").style.display = "none"; // Ocultar el mensaje final al volver a jugar
  }
  
  function startGame() {
    playerName = document.getElementById("playerName").value;
    if (playerName === "") {
      alert("Por favor, ingresa tu nombre para comenzar el juego.");
      return;
    }
  
    // Obtener el tipo de pregunta seleccionado por la usuaria
    const questionType = document.getElementById("questionType").value;
  
    // Filtrar las preguntas según el tipo seleccionado
    const filteredQuestions = questions.filter(
      (question) => question.type === questionType
    );
  
    // Verificar si hay preguntas disponibles para el tipo seleccionado
    if (filteredQuestions.length === 0) {
      alert("Lo sentimos, no hay preguntas disponibles para el tipo seleccionado.");
      return;
    }
  
    // Restablecer el puntaje al iniciar un nuevo juego
    score = 0;
  
    document.getElementById("welcomeMessage").textContent = `Hola ${playerName}!`;
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
  
    // Guardar las preguntas filtradas en una variable global para usarlas durante el juego
    currentQuestions = filteredQuestions;
    currentQuestion = 0; // Restablecer el índice de pregunta actual al inicio del juego
    showQuestion();
  }
  
  function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = currentQuestions[currentQuestion].question;
  
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = currentQuestions[currentQuestion].options[i];
    }
  
    const correctAnswerElement = document.getElementById("correctAnswer");
    correctAnswerElement.textContent = "";
  }
  
  function checkAnswer(selectedIndex) {
    const correctIndex = currentQuestions[currentQuestion].correctIndex;
    const correctAnswerElement = document.getElementById("correctAnswer");
  
    if (selectedIndex === correctIndex) {
      correctAnswerElement.textContent = "¡Respuesta correcta!";
      score++; // Sumar puntaje si la respuesta es correcta
    } else {
      correctAnswerElement.textContent = `La respuesta correcta era: ${
        currentQuestions[currentQuestion].options[correctIndex]
      }`;
    }
  
    currentQuestion++; // Avanzar a la siguiente pregunta
    if (currentQuestion < currentQuestions.length) {
      setTimeout(showQuestion, 1500); // Mostrar la siguiente pregunta después de 1.5 segundos
    } else {
      showFinalMessage();
    }
  }
  
  function showFinalMessage() {
    const questionScreen = document.getElementById("questionScreen");
    questionScreen.style.display = "none";
  
    const finalMessage = document.getElementById("finalMessage");
    finalMessage.textContent = `¡Felicidades, ${playerName}! Has completado la trivia. Tu puntaje es: ${score} de ${currentQuestions.length}.`;
    finalMessage.style.display = "block";
  }
  
  function showFinalMessage() {
    const questionScreen = document.getElementById("questionScreen");
    questionScreen.style.display = "none";
  
    const finalMessage = document.getElementById("finalMessage");
    const finalMessageText = document.getElementById("finalMessageText");
    const scoreMessage = document.getElementById("scoreMessage"); // Agregamos esta línea
  
    finalMessageText.textContent = `¡Felicidades, ${playerName}! Has completado la trivia.`;
    scoreMessage.textContent = `Tu puntaje es: ${score} de ${currentQuestions.length}.`; // Agregamos esta línea
  
    finalMessage.style.display = "block";
  }
  

  function resetGame() {
    currentQuestion = 0;
    playerName = "";
    score = 0; // Restablecer el puntaje al volver a jugar
    showWelcomeScreen();
    document.getElementById("playerName").value = ""; // Limpiar el valor del input de nombre
    document.getElementById("finalMessage").style.display = "none"; // Ocultar el mensaje final
    document.getElementById("scoreMessage").textContent = ""; // Limpiar el mensaje de puntaje
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showWelcomeScreen();
  });
  