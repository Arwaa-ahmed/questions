const questions = document.querySelectorAll(".cc");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener('click',function(){
    question.classList.toggle('show');
    
  })
});