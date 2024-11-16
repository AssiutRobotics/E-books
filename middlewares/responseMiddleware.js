function responseMiddleware(req, res, next) {
    const originalJson = res.json;

    res.json = function (body) {
        const status = res.statusCode;
        const isError = status >= 400;

        const response = {
            status: isError ? 'error' : 'success',
            message: body.message || (isError ? 'An error occurred' : 'Request successful'),
            data: isError ? null : body.data || body,
            error: isError ? body.error || null : null,
        };

        return originalJson.call(this, response);
    };

    next();
}

module.exports = responseMiddleware;
