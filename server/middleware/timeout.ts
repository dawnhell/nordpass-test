const timeout = (req, res, next) => {
  setTimeout(() => next(), 1000);
}

export default timeout;
