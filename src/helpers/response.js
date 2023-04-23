const sendResponse = (res, { data, status, msg }) => {
  return res.send({
    body: data,
    statusCode: status,
    msg: msg,
  });
};

module.exports = sendResponse;
