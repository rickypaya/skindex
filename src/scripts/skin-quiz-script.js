$(document).ready(function() {
    var currentQuestion = 0;
    var scores = {
      normal: 0,
      oily: 0,
      dry: 0,
      sensitive: 0,
      combination: 0
    };
    
    var questions = [
      {
        question: "How does your skin feel after washing?",
        answers: [
          { text: "Balanced", type: "normal" },
          { text: "Shiny, especially on forehead and nose", type: "oily" },
          { text: "Tight or flaky", type: "dry" },
          { text: "Irritated or red", type: "sensitive" },
          { text: "Oily in some spots, dry in others", type: "combination" }
        ]
      },
      {
        question: "Do you need moisturizer?",
        answers: [
          { text: "Sometimes", type: "normal" },
          { text: "Rarely, makes me greasy", type: "oily" },
          { text: "Always, still feels dry", type: "dry" },
          { text: "Need special gentle ones", type: "sensitive" },
          { text: "Only on certain parts of face", type: "combination" }
        ]
      },
      {
        question: "How are your pores?",
        answers: [
          { text: "Normal sized", type: "normal" },
          { text: "Large, especially on nose", type: "oily" },
          { text: "Almost invisible", type: "dry" },
          { text: "Can't tell, skin gets red easily", type: "sensitive" },
          { text: "Big on forehead/nose, small elsewhere", type: "combination" }
        ]
      },
      {
        question: "How's your face after shaving?",
        answers: [
          { text: "Usually fine", type: "normal" },
          { text: "Gets shiny or breaks out", type: "oily" },
          { text: "Feels too tight", type: "dry" },
          { text: "Red and irritated", type: "sensitive" },
          { text: "Some areas irritated, others fine", type: "combination" }
        ]
      },
      {
        question: "When you sweat or it's hot out?",
        answers: [
          { text: "I'm normal", type: "normal" },
          { text: "Face gets super shiny", type: "oily" },
          { text: "Skin feels tighter", type: "dry" },
          { text: "Face gets red and irritated", type: "sensitive" },
          { text: "Forehead gets oily but cheeks don't", type: "combination" }
        ]
      }
    ];
    
    var skinInfo = {
      normal: {
        description: "Your skin is balanced. Not too oily or dry.",
        tips: [
          "Use gentle face wash",
          "Use light moisturizer",
          "Wear sunscreen"
        ]
      },
      oily: {
        description: "Your skin is shiny with larger pores. You might get pimples often.",
        tips: [
          "Use gel cleanser",
          "Get oil-free moisturizer",
          "Try blotting papers",
          "Use clay masks"
        ]
      },
      dry: {
        description: "Your skin doesn't make enough oil. Might feel tight or flaky.",
        tips: [
          "Use creamy cleanser",
          "Get thick moisturizer",
          "Try face oils",
          "Don't wash too much"
        ]
      },
      sensitive: {
        description: "Your skin gets irritated easily. Might get red or react to products.",
        tips: [
          "Use fragrance-free stuff",
          "Avoid alcohol products",
          "Test new products first",
          "Less is more"
        ]
      },
      combination: {
        description: "You have oily T-zone (forehead & nose) but normal/dry elsewhere.",
        tips: [
          "Use medium cleanser",
          "Different products for different areas",
          "Oil-free stuff on T-zone",
          "Hydrate dry areas more"
        ]
      }
    };
    
    function loadQuestion() {
      $("#current-question").text(currentQuestion + 1);
      $("#total-questions").text(questions.length);
      $("#question-text").text(questions[currentQuestion].question);
      
      var answersHTML = "";
      for(var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var answer = questions[currentQuestion].answers[i];
        answersHTML += '<button class="answer-btn" data-type="' + answer.type + '">' + answer.text + '</button>';
      }
      
      $("#answers-container").html(answersHTML);
      
      $(".answer-btn").click(function() {
        var type = $(this).data("type");
        scores[type]++;
        
        if(currentQuestion < questions.length - 1) {
          currentQuestion++;
          loadQuestion();
        } else {
          showResult();
        }
      });
    }
    
    function getSkinType() {
      var max = 0;
      var result = "";
      
      for(var type in scores) {
        if(scores[type] > max) {
          max = scores[type];
          result = type;
        }
      }
      
      return result;
    }
    
    function showResult() {
      $("#quiz-box").hide();
      
      var skinType = getSkinType();
      $("#result-title").text("Your skin type: " + skinType);
      $("#result-description").text(skinInfo[skinType].description);
      
      var tipsHTML = "";
      for(var i = 0; i < skinInfo[skinType].tips.length; i++) {
        tipsHTML += "<li>" + skinInfo[skinType].tips[i] + "</li>";
      }
      $("#result-tips").html(tipsHTML);
      
      $("#result-box").show();
    }
    
    $("#restart-btn").click(function() {
      currentQuestion = 0;
      scores = {
        normal: 0,
        oily: 0,
        dry: 0,
        sensitive: 0,
        combination: 0
      };
      
      $("#result-box").hide();
      $("#quiz-box").show();
      loadQuestion();
    });
    
    loadQuestion();
  });