exports.successget = (req,res,serie, status) => { 
    res.status(status || 200).send(serie);
}
exports.successpost = (req,res,serie, status) => { 
    res.status(status || 200).send({
        serie});
}

exports.error = (req,res, message, status,details) => {
    console.error(details);
    res.status(status || 500).send({
        message:message,
    body:" "});

}