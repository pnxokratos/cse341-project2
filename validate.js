const validator = require('./validacion/validate');
const validatedTask = async (req, res, next) => {
    const validationRule = {
        "todaysDate": "required|string",
        "task": "required|string",
        "dueDate": "required|string",
        "class": "string",
        "appointment": "string",
        "activities": "string",
        "notes": "string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}

module.exports = {validatedTask}