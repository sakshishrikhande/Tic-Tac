

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameOver = false;
    
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    const cells = document.querySelectorAll("td");
    const message = document.getElementById("message");
    
    function play(cellIndex) {
      if (!gameOver && board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        renderBoard();
        checkWin();
        checkDraw();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `It's ${currentPlayer}'s turn`;
      }
    }
    
    function renderBoard() {
      for (let i = 0; i < board.length; i++) {
        cells[i].textContent = board[i];
      }
    }
    
    function checkWin() {
      for (let condition of winConditions) {
        if (
          board[condition[0]] !== "" &&
          board[condition[0]] === board[condition[1]] &&
          board[condition[1]] === board[condition[2]]
        ) {
          gameOver = true;
          message.textContent = `${currentPlayer} wins!`;
          break;
        }
      }
    }
    
    function checkDraw() {
      if (!board.includes("")) {
        gameOver = true;
        message.textContent = "It's a draw!";
      }
    }
    
    function restart() {
      board = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      gameOver = false;
      message.textContent = `It's ${currentPlayer}'s turn`;
      renderBoard();
    }
    
    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
        play(index);
        });
    });
    
    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
        restart();
    });
    