const modelJnsReview = require('../models/jnsReview');
const controller = {};
const express = require('express');
const app = express();
const { Validator } = require('jsonschema');


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
    } catch (error) {
        res.status(500)
            .json({
                code: '500',
                message: error.message
            })
    }
}

controller.getListJenisRev = async (req, res) => {
    try {
        const list = await modelJnsReview.jns_review.findAll();
        res.status(200)
            .json({
                code: '200',
                message: 'Succuess',
                data: list
            })
    } catch (error) {
        res.status(500)
            .json({
                code: '500',
                message: error.message
            })

    }
}


controller.validateJson = async (req, res) => {
    const data = req.body;
    try {
        // const express = require('express');
        // const app = express();
        // const { Validator } = require('jsonschema');

        // Define your JSON schema

        const mySchema = {
            type: 'object',
            properties: {
                name: { type: 'string' },
                age: { type: 'number', minimumlength: 18 }
            },
            required: ['name', 'age'],
            patternProperties: {
                '^name$': {},
                '^age$': {}
            }
        };

        // Create a JSON schema validator
        const validator = new Validator();

        // Validate the JSON data against the schema
        const result = validator.validate(data, mySchema);



        console.log(result)
        // Check if the validation passed or failed
        if (result.valid) {
            // Validation passed, do something with the data
            res.status(200)
                .json({
                    code: '200',
                    message: 'Validation passed!',
                    data: result
                })
        } else {
            // Validation failed, send error message
            const errors = result.errors.map(error => error.stack);
            res.status(400)
                .json({
                    message: `Validation failed: ${errors.join(', ')}`
                })
        }
    } catch (error) {
        res.status(500)
            .json({
                code: '500',
                message: error.message
            })
    }
}

module.exports = controller;