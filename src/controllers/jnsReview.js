const modelJnsReview = require('../models/jnsReview');
const controller = {};


controller.createJenisReview = async (req, res) => {
    let payload = req.body
    try {
        if (!payload.ur_jns_review) {
            res.status(400)
                .json({
                    code: '400',
                    message: 'ur_jns_review is required'
                })
        }

        await modelJnsReview.jns_review.create(payload)
        res.status(200)
            .json({
                code: '200',
                message: "success add new jenis review"
            })
    } catch (err) {
        res.status(400)
            .json({
                code: '400',
                message: 'fail to add new jenis review'
            })
    }
}

module.exports = controller;