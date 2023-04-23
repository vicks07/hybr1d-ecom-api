const sendResponse = (res, { data, status, msg }) => {
  if (data?.password) delete data.password; //Ensuring the password is not sent in the response
  return res.send({
    body: data,
    statusCode: status,
    msg: msg,
  });
};

module.exports = sendResponse;
