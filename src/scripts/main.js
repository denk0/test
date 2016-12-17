;(function() {
"use strict";

	var question = [
		['How many angles in triangle?', '3'],
		['The third planet form the Sun?', 'Earth'],
		['What is capital of Ukraine?', 'Kyiv'],
		['First capital of Ukraine?', 'Kharkiv'],
		['Has Leo got Oscar?', 'yes']
	];
	var result = 0;
	var answer;

	var correct = [];
	var incorrect = [];

	for (var i = 0; i < question.length; i++) {
		answer = prompt(question[i][0]);

		if (answer.toLowerCase() === question[i][1].toLowerCase()) {
			result++;
			correct.push(question[i]);
		} else {
			incorrect.push(question[i]);
		}
	}


	if (incorrect.length == 0) {
		document.querySelector('.correct-answers').innerText="You've answered right on all qustions!";
	} else if (correct.length == 0) {
		document.querySelector('.correct-answers').innerText="You've answered wrong on all qustions!";
	} else {

		document.querySelector('.correct-answers .count').innerText=result;
		
		var correctList = document.createElement('ol');
		correctList.classList.add('correct-list');
		document.body.insertBefore(correctList, document.querySelector('.correct-answers'));
		var correctAnswer;
		for (var i = 0; i < correct.length; i++) {
			correctAnswer = document.createElement('li');
			correctAnswer.innerText = correct[i][0];
			document.querySelector('.correct-list').appendChild(correctAnswer);
		}

		var incorrectList = document.createElement('ol');
		incorrectList.classList.add('incorrect-list');
		document.body.insertBefore(incorrectList, document.querySelector('.correct-answers'));
		var incorrectAnswer;
		for (var i = 0; i < incorrect.length; i++) {
			incorrectAnswer = document.createElement('li');
			incorrectAnswer.innerText = incorrect[i][0];
			document.querySelector('.incorrect-list').appendChild(incorrectAnswer); 
		} 
	} 
})();  
