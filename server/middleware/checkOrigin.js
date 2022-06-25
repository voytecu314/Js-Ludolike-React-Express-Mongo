const checkOrigin = (req, res, next) => {
    if(req.headers.origin==='http://localhost:3000' || req.headers.origin==='http://localhost:3001')
    next();
    else res.json({msg: 'nothing to see here'});
}

module.exports = checkOrigin;