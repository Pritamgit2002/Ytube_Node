const asyncHandler = (requestHandler) => {
  //this is a higher order function, it takes a function as an argument and returns a new function
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
