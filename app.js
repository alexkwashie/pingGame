/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1.Add random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display results
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // 3. Update result, only IF number is Not 1
    if (dice !== 1) {
        //Continue add score to the roundScore
        roundScore += dice;

        //update score
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else {
        nextPlayer();

    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //THIS IS A TENARY OPERAOR, its just like an 'IF' statment

    //Reset roundScore to 0
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //Hide dice to reset the game
    document.querySelector('.dice').style.display = 'none';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
    //Add current score to Global score
    score[activePlayer] += roundScore;

    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


    //Check if player won
    if (score[activePlayer] >= 10) {
        document.querySelector('#name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1) + ' Won';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        //2nd Player should continue playing
        nextPlayer();
    }



});

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;