const apiRequest = async (url = '', optionObj = null, errMsg = null) => {
  try {
    const res = await fetch(url, optionObj);
    if (!res.ok) throw Error('please reload the app');
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
