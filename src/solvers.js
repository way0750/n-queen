/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findOneRooksSolution = function (matrix, amountOfPieces) {

  for (var row = 0; row < matrix.length; row++){
    // go through all rows;
    
    for (var col =0; col < matrix.length; col++){
      // go through all col in one row
      // var current position
      if (!window.hasAnyRowConflicts() || !window.hasAnyColConflicts()){
        matrix[row][col]=1;

        if (amountOfPieces > 1){
          return window.findOneRooksSolution(matrix, amountOfPieces-1);
        }

      }


    }

  }
  return matrix;
};


window.findNRooksSolution = function(n) {
  // start with row 0 col 0;
  // then search just one possible pattern;
  var board = new board({n:n});
  var oneSolution = findOneRooksSolution(board, n);

  var solution = undefined; //fixme


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
