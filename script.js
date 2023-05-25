//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of operators";
  }
}

function evalString(expression) {
  try {
    if (/[\+\-\*\/]{2}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\+\*\/]/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator");
    }

    if (/[\+\*\/\-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator");
    }

    // Evaluate the expression and return the result
    return eval(expression);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw error;
    } else if (error instanceof InvalidExprError) {
      throw error;
    } else {
      throw new OutOfRangeError();
    }
  }
}

// Example usage:
try {
  const expression = prompt("Enter an arithmetic expression");
  const result = evalString(expression);
  console.log("Result:", result);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("Syntax Error:", error.message);
  } else if (error instanceof InvalidExprError) {
    console.error("Invalid Expression Error:", error.message);
  } else if (error instanceof OutOfRangeError) {
    console.error("Out of Range Error:", error.message);
  } else {
    console.error("Unknown Error:", error.message);
  }
}

